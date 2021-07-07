class SuperHero:
    has_cape = False # NO CAPES
    league_of_heroes = []

    def __init__(self, name: str, alter_ego: str, super_powers: dict, weaknesses: list, planet_of_origin: str ="Earth", can_fly: bool =False, stamina: int =100):
        self.name = name 
        self.alter_ego = alter_ego
        self.super_powers = super_powers
        self.planet_of_origin = planet_of_origin
        self.can_fly = can_fly
        self.weaknesses = weaknesses
        self.stamina = stamina
        self.health = 100

        SuperHero.league_of_heroes.append(self)
    
    def attack(self, key: str, target: object):
        # Logic Needed:
        # 1. Pick which super_power to use
        if key in self.super_powers:
            power_to_use = self.super_powers[key]
        else:
            print("Invalid selection, please select a valid type.")
            return self
        # 2. Determine how much damage is done
        damage_dealt = power_to_use.damage
        # 3. Determine the stamina cost of the power
        stamina_cost = power_to_use.stamina_cost
        # 3a. Check to see if we can actually use that attack
        if self.stamina < stamina_cost:
            print(f"Oh no! {self.name} doesn't have enough stamina left!")
            print(f"{power_to_use.name} takes {stamina_cost} stamina, but {self.name} only has {self.stamina} left!")
            return self
        # 3. Reduce the attacking hero's stamina by the stamina_cost
        self.stamina -= stamina_cost
        # # 4. Reduce the target's health by the damage
        # target.health -= damage_dealt
        # 5. Print a message saying what happened!
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


# super_powers dictionary
# {
#    "physical": SuperPower(insertdatahere)
#    "special": SuperPower(insertdatahere)
#    "defense": SuperPower(insertdatahere)
#    "support": SuperPower(insertdatahere)
# }

batman_powers = {
    "physical": SuperPower("Justice Slam", 40, 50),
    "special": SuperPower("Kryptonite Krush", 70, 80),
    "defense": SuperPower("Bat Bash", 10, 15),
    "support": SuperPower("Alfred Assist", 30, 30)
}

superman_powers = {
    "physical": SuperPower("Planetary Pummel", 80, 80),
    "special": SuperPower("Frost Breath", 60, 40),
    "defense": SuperPower("Block", 10, 10),
    "support": SuperPower("Solitary Struggle", 11, 9)
}

batman = SuperHero(super_powers=batman_powers, name="Batman", alter_ego="Bruce Wayne", weaknesses=[])
superman = SuperHero("Superman", "Clark Kent", superman_powers, [])
batman.attack("physical", superman)
superman.attack("defense", batman)
batman.attack("special", superman)