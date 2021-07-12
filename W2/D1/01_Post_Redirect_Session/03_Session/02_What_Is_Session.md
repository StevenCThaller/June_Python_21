# What is Session?

Ever been to a website, and you logged in, then closed the tab, ran some errands, took a nap, came back, opened a new browser window, went back to that website, and you were still logged in?

THAT is a result of session. `Session` allows us to keep track of some information across multiple routes. This `session` data is stored in a `cookie` that is returned to the user who made the initial request, and that `cookie` is sent to the server each time that user sends another request.

SO, we can make it so that the data a user submitted persists across multiple renders and redirects by using `session`.

## Use Cases
1. I don't have a database, and I want to display a user's input after they submit a form. Obviously, I can't just render the data because of that rule that Cody will be very disappointed with me for breaking. 
2. I do have a database, but I want to keep track of which user is logged in so when they make more requests, I know what they can and cannot do.
3. I'm a malicious jerk and I want to track things that they're doing, so I'm going to use their cookies to do bad things! (DON'T BE THIS GUY)