# Inheritance

Yesterday afternoon, we had fun building a superhero class, and a superpower class. But we ended the day suggesting that inheritance might help with something like introducing Heroes vs Villains. So let's take a look at how we can do that.

## Refactor the SuperHero Class to be a bit more basic

```py
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

```

Ultimately, we want to move towards this being a class that will contain shared features between any/all child subclasses.

So things like, maybe not calling it `SuperHero`, removing `league_of_heroes` and any related code, would help us slim down to the basics.

```py
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

    # methods removed for brevity's sake
```

Now, if I want to have a SuperHero Class that has the same information, and then some more information, our first approach would be something like this:

```py
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
    
    # methods removed for brevity's sake

```

That's the least DRY thing I've ever seen. The whole reason we're here is to learn about `INHERITANCE`, so let's do it.

```py
# To inherit from another class, our class definition will accept a "parameter"
class SuperHero(Character):
    league_of_heroes = []
    # When we have a class that is inheriting from another class, our list of parameters needs to reflect the parameters of the PARENT constructor
    def __init__(self, name: str, alter_ego: str, super_powers: dict, weaknesses: list, catch_phrase: str, planet_of_origin: str ="Earth", can_fly: bool =False, stamina: int =100, valor: int = 125):
        # super() is how we access the Parent (Character) class and any of its methods/attributes
        super().__init__(name, alter_ego, super_powers, weaknesses, planet_of_origin, can_fly, stamina, False)
        
        self.catch_phrase = catch_phrase
        self.valor = valor

        SuperHero.league_of_heroes.append(self)

        # everything else was handled by the Character constructor
```

What about our super villains? The whole point of this was to be able to re-use the Character class for any other related sub-classes (children).

```py
class SuperVillain(Character):
    league_of_villains = []
    def __init__(self, name: str, alter_ego: str, super_powers: dict, weaknesses: list, taunt: str, planet_of_origin: str ="Earth", can_fly: bool =False, stamina: int =100, has_cape: bool = False, infamy: int = -100):
        super().__init__(name, alter_ego, super_powers, weaknesses, planet_of_origin, can_fly, stamina, has_cape)

        self.taunt = taunt
        self.infamy = infamy

        SuperVillain.league_of_villains.append(self)
```