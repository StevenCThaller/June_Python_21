# Four Pillars of OOP

There are four "pillars" of Object Oriented Programming.

## **Encapsulation**
Encapsulation is when all of the relevant information and functionalities (`attributes` and `methods`) are contained WITHIN the object itself. There is no need to have variables or functions elsewhere, as we can keep all of it **encapsulated** within the object itself.

NOTE: Encapsulation typically refers to a `private state` within a class. However, private and protected members are a little bit more advanced, so we won't really be looking at them quite yet.

---

## **Abstraction**
This is an extension of encapsulation. The idea of abstraction is to **abstract** away the complex logic involved in performing some function (`method` within a class). Let's look at a real world example!

You wake up in the morning, and you go to the kitchen, and turn on your coffee machine to make coffee. That **IS** abstraction. You need to add water and coffee beans, and press the button to start the machine, but what you DON'T need to know is how the coffee machine is working internally to get that done.

In programming, abstraction would be the equivalent of, rather than expecting the user to perform all of the individual steps required (route electricity to heating coils, monitor temperature of water, once it reaches some ideal temperature, re-route the water to pour over the ground coffee beans, then voila, you have your coffee), you would simply add a `method` to your Coffee Machine `Class` called `make_coffee`, thus **abstracting** the logic away from the user.

---

## **Inheritance**
The ability of one object to acquire some (or all) properties and methods from another object is called **inheritance**. One of the main focuses of OOP is reusability (one of the major flaws of `procedural programming`), and inheritance builds on that idea. 

Let's look at an example! You build a `class` called Fruit. The Fruit class might have attributes like `flavor`, `grows_on`, and `color`, and maybe a method called `ripen()`. But when you go to the store, you don't just walk up to an employee and say "Yes I will have one fruit please!" You get an Apple, or a Banana, or whatever. So, you could create an `Apple` and `Banana` class that `inherit` from the `Fruit` class, and they will also have a `flavor`, `grows_on`, `color`, and `ripen()`. But then you can add `Apple` and `Banana` specific attributes and methods! For example, you might add a method to the banana called `peel()`.

---

## **Polymorphism**

Polymorphism builds on Inheritance in that it allows each `child sub-class` to have the same `attributes` and `methods` as its parent class, but what makes it `polymorphism` is that the child class's methods will have something to make it its own.

Example:

You have a `Mammal` class that has a `make_sound()` method, and that `make_sound()` method will print "The mammal makes a noise" to the console.

But when you create a sub-class, like `Dog` or `Cat`, polymorphism dictates that the `Dog` should have a `make_sound()` that, rather than printing "The mammal makes a noise", prints "Woof". And the `Cat` class's `make_sound()` will print "Meow".