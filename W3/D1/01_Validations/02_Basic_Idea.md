# Basic Idea

To validate a form submission, basically what we need to do is check each input against some set of rules (decided on by ourselves).

For example: I'm building a registration form and I want my user to submit a `username` and a `password`, with a `confirm password` field as well. The username should be between 2 and 32 characters.

```py
if len(request.form['username']) < 2 or len(request.form['username']) > 32:
    # code for what happens when its invalid
```

Conceptually, pretty simple, yeah? Technically, you COULD do all of this logic directly in the route function in your controller. However, these rules are specific to a given model, so what we'll do instead is make it a `static method` in our model, and call that static method from the function!