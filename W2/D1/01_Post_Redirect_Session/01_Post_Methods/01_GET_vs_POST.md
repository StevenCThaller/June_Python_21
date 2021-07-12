# Form Submissions

Now that we've seen how we can get data from the back end to the front end, we can try and figure out how to do the opposite.


## GET and POST requests

When using the internet, from a network perspective, we're really just making series of HTTP requests.
These requests actually have specific types based on what should be accomplished by the request.
For this stack, we will only be focusing on two: `GET` and `POST` requests.

### GET Request

A `GET` request is made when the client making the request is trying to **retrieve**, or **get** information FROM the server.
Typical `GET` requests include:
1. Clicking on a link
2. Manually typing in a url into the browser
3. Any action that results in your browser rendering a new page.

NOTE: Number `3` is a LITTLE tricky, and we'll see why here in a bit.

### POST Request
A `POST` request is made when the client making the request is trying to **send**, or **post** information TO the server.
Typical `POST` requests include submitting a form (this is the only type we'll be working with this stack).


