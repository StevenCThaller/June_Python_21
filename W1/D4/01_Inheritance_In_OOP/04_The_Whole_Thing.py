class Character:
    def __init__(self, name: str, alter_ego: str, super_powers: dict, weaknesses: list, planet_of_origin: str ="Earth", can_fly: bool =False, stamina: int =100, has_cape: bool = False):
        self.name = name 
        self.alter_ego = alter_ego
        self.super_powers = super_powers
        self.planet_of_origin = planet_of_origin
        self.can_fly = can_fly
        self.weaknesses = weaknesses
        self.stamina = stamina
        self.health = 100
        self.has_cape = has_cape
    
    def attack(self, key: str, target: object):
        if key in self.super_powers:
            power_to_use = self.super_powers[key]
        else:
            print("Invalid selection, please select a valid type.")
            return self
        damage_dealt = power_to_use.damage
        stamina_cost = power_to_use.stamina_cost
        if self.stamina < stamina_cost:
            print(f"Oh no! {self.name} doesn't have enough stamina left!")
            print(f"{power_to_use.name} takes {stamina_cost} stamina, but {self.name} only has {self.stamina} left!")
            return self
        self.stamina -= stamina_cost
        print(f"{self.name} attacked {target.name} with {power_to_use.name}.")
        print(f"It cost {self.name} {stamina_cost} stamina, and dealt {damage_dealt} damage to {target.name}.")

        target.take_damage(damage_dealt)

        return self

    def die(self):
        print(f"{self.name} has no health left. They die.")
        return self

    def take_damage(self, damage):
        self.health -= damage
        
        if self.health <= 0:
            self.die()

        return self

class SuperPower:
    def __init__(self, name: str, damage: int, stamina_cost: int):
        self.name = name
        self.damage = damage
        self.stamina_cost = stamina_cost



class SuperHero(Character):
    league_of_heroes = []
    def __init__(self, name: str, alter_ego: str, super_powers: dict, weaknesses: list, catch_phrase: str, planet_of_origin: str ="Earth", can_fly: bool =False, stamina: int =100, valor: int = 125):
        super().__init__(name, alter_ego, super_powers, weaknesses, planet_of_origin, can_fly, stamina, False)
        
        self.catch_phrase = catch_phrase
        self.valor = valor

        SuperHero.league_of_heroes.append(self)
    
    def attack(self, key: str, target: object):
        super().attack(key, target)

        if isinstance(target, SuperVillain) and target.health <= 0:
            print(self.catch_phrase)
            self.valor += 25

        elif isinstance(target, SuperHero) and target.health <= 0:
            self.valor -= 25

        return self

class SuperVillain(Character):
    league_of_villains = []
    def __init__(self, name: str, alter_ego: str, super_powers: dict, weaknesses: list, taunt: str, planet_of_origin: str ="Earth", can_fly: bool =False, stamina: int =100, has_cape: bool = False, infamy: int = -100):
        super().__init__(name, alter_ego, super_powers, weaknesses, planet_of_origin, can_fly, stamina, has_cape)

        self.taunt = taunt
        self.infamy = infamy

        SuperVillain.league_of_villains.append(self)

    def attack(self, key: str, target: object):
        super().attack(key, target)

        if target.health <= 0:
            print(self.taunt)

            if isinstance(target, SuperHero):
                self.infamy -= 25
            elif isinstance(target, SuperVillain):
                self.infamy -= 50

        return self

batman_powers = {
    "physical": SuperPower("Justice Slam", 40, 50),
    "special": SuperPower("Kryptonite Krush", 70, 40),
    "defense": SuperPower("Bat Bash", 10, 15),
    "support": SuperPower("Alfred Assist", 30, 30)
}

superman_powers = {
    "physical": SuperPower("Planetary Pummel", 80, 80),
    "special": SuperPower("Frost Breath", 60, 40),
    "defense": SuperPower("Block", 10, 10),
    "support": SuperPower("Solitary Struggle", 11, 9)
}
joker_powers = {
    "physical": SuperPower("HAHAHAHA", 80, 80),
    "special": SuperPower("Why So Serious", 60, 40),
    "defense": SuperPower("My mouth hurts from these scars", 10, 10),
    "support": SuperPower(":)", 11, 9)
}

batman = SuperHero(super_powers=batman_powers, name="Batman", alter_ego="Bruce Wayne", catch_phrase="I am Vengeance, I am the Night, I am BATMAN", weaknesses=[])
superman = SuperHero("Superman", "Clark Kent", superman_powers, [], "No you actually can't hurt me hahaha please don't tell my mom")
joker = SuperVillain("Joker", "N/A", joker_powers, [], "Why so serious?")


batman.attack("physical", superman)
superman.attack("special", joker)
batman.attack("special", joker)

