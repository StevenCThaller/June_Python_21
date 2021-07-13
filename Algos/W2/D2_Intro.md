# Singly Linked List

Today we're learning about Singly Linked Lists!

A Singly Linked List is a data structure consisting of
Nodes. Each Node contains a value attribute, and a next attribute,
where the value is the data the node is holding on to, and the next
attribute is the next node in the sequence.

The list itself only has one attribute: the head. This is the START
of the singly linked list. When the list is first initialized, the
head is null, meaning there is nothing in the list.

I've gone ahead and given you the starter code below:

### Node
```js
class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Why??
    }
}
```

### List
```js
class SLList {
    constructor(){
        this.head = null;
    }
}
```

## Iterating Through a Singly Linked List

To iterate through a singly linked list, we need to start at the
beginning (duh). But how? Well, we know what the start of the list is: `someList.head`.

And, if each node has a `.next` that points to the next node in the sequence, getting to the END
of a singly linked list means finding the node that has a `.next` that does not point to another node.

So if we initialize some kind of iterator (it's pretty standard to call it `runner`) as the list's `.head`,
and move `runner` to `runner.next` until `runner.next` is null, we will have iterated through
the entire singly linked list.

```js
// To stop runner on the LAST node
var runner = this.head;
while(runner.next != null) {
    runner = runner.next;
}
```

## To Create a New Instance of a Node

```js
var newNode = new SLNode(somevalue)
```