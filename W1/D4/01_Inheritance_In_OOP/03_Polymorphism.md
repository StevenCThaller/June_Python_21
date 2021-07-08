# Polymorphism

Polymorphism dictates that while yes, we want to inherit `attributes` and `methods` from a `parent class`, we also want to keep some uniqueness here.

So what we'll do, is we'll take the `attack` method we built into the `SuperHero` class from YESTERDAY'S lecture [Insert Link Here](), and make it a little more generalized. Then, we'll add in the unique features to the `SuperHero` and `Villain` classes.

## Our Previous Attack Method
```py
class SuperHero:
    # stuff removed

    def attack(self, key: str, target: object):
        if key in self.super_powers:
            power_to_use = self.super_powers[key]
        else:
            print("Invalid selection, please select a valid type.")
            return self
        damage_dealt = power_to_use.damage
        stamina_cost = power_to_use.stamina_costattack
        if self.stamina < stamina_cost:
            print(f"Oh no! {self.name} doesn't have enough stamina left!")
            print(f"{power_to_use.name} takes {stamina_cost} stamina, but {self.name} only has {self.stamina} left!")
            return self
        self.stamina -= stamina_cost
        print(f"{self.name} attacked {target.name} with {power_to_use.name}.")
        print(f"It cost {self.name} {stamina_cost} stamina, and dealt {damage_dealt} damage to {target.name}.")

        target.take_damage(damage_dealt)

        return self

    # stuff removed
```

Let's modify so that it's in the `Character` class instead

```py
class Character:
    # stuff removed

    def attack(self, key: str, target: object):
        if key in self.super_powers:
            power_to_use = self.super_powers[key]
        else:
            print("Invalid selection, please select a valid type.")
            return self
        damage_dealt = power_to_use.damage
        stamina_cost = power_to_use.stamina_costattack
        if self.stamina < stamina_cost:
            print(f"Oh no! {self.name} doesn't have enough stamina left!")
            print(f"{power_to_use.name} takes {stamina_cost} stamina, but {self.name} only has {self.stamina} left!")
            return self
        self.stamina -= stamina_cost
        print(f"{self.name} attacked {target.name} with {power_to_use.name}.")
        print(f"It cost {self.name} {stamina_cost} stamina, and dealt {damage_dealt} damage to {target.name}.")

        target.take_damage(damage_dealt)

        return self

    # stuff removed
```

And finally, give in to Polymorphism, and add the unique parts to the `SuperHero` and `SuperVillain` classes.

#### SuperHero

```py
class SuperHero(Character):
    # code removed

    def attack(self, key: str, target: object):
        # Do we want to copy and paste all of that logic?
        
        # HELL no
        super().attack(key, target)

        if isinstance(target, SuperVillain) and target.health <= 0:
            print(self.catch_phrase)
            self.valor += 25

        elif isinstance(target, SuperHero) and target.health <= 0:
            self.valor -= 25

        return self
    # code removed
```

But our `SuperVillain` needs to be able to do the same thing!

```py
class SuperVillain(Character):
    # code removed

    def attack(self, key: str, target: object):
        super().attack(key, target)

        if target.health <= 0:
            print(self.taunt)

            if isinstance(target, SuperHero):
                self.infamy -= 25
            elif isinstance(target, SuperVillain):
                self.infamy -= 50

        return self
    
    # code removed
```