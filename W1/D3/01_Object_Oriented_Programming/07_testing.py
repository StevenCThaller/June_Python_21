### Testing Methods and Attributes
# class Fruit:
#     food_type = "Fruit"

#     def __init__(self, flavor, grows_on, color, name):
#         self.flavor = flavor
#         self.grows_on = grows_on
#         self.color = color
#         # adding one more attribute
#         self.name = name

#     def ripen(self):
#         print(f"The {self.name} ripens, becoming a vibrant {self.color}, and has a delicious {self.flavor} flavor. You may now pick it from the {self.grows_on}")

# my_fruit = Fruit("sweet", "tree", "red", "cherry")
# your_fruit = Fruit("sweet", "tree", "yellow", "banana")

# my_fruit.ripen()
# your_fruit.ripen()

### Testing class and static methods
class Fruit:
    food_type = "Fruit"
    all_fruits = []

    def __init__(self, flavor, grows_on, color, name):
        self.flavor = flavor
        self.grows_on = grows_on
        self.color = color
        self.name = name
        Fruit.all_fruits.append(self)


    def ripen(self):
        print(f"The {self.name} ripens, becoming a vibrant {self.color}, and has a delicious {self.flavor} flavor. You may now pick it from the {self.grows_on}")

    
    @classmethod
    def get_all_fruits(cls):
        for fruit in cls.all_fruits:
            print(fruit.name)
        # print(f"This was called from {cls.name}") <- this will not work since this is a class method, not an instance method


    @staticmethod
    # but unlike the class method, it doesn't get any arguments referring to the class or object itself
    def remove_fruit(name, list_of_fruit):
        for i in range(len(list_of_fruit)):
            if list_of_fruit[i].name == name:
                list_of_fruit.pop(i)

my_fruit = Fruit("sweet", "bush", "red", "strawberry")
your_fruit = Fruit("sweet", "tree", "yellow", "banana")
my_fruit.ripen()
my_fruit.get_all_fruits()


Fruit.remove_fruit("banana", Fruit.all_fruits)

Fruit.get_all_fruits()