/*
    Key focus of the day? Removing a node from the middle of a SLL.
    Let's think about this. If we have:
    H: 5 -> 4 -> 3 -> 2 -> 1 ->

    And we want to remove the node with a value of 3, how might we do this?
    The end result should look something like:
    H: 5 -> 4 -> 2 -> 1 ->

    Well in that case, all we really need to do is move 4's .next to be 3's .next, right?
    Right.

    With that in mind...

    Two challenges today!

    Challenge 1: moveMinToFront()
    Write a method that will find the node with the smallest value, and move it to the front. 
    EXAMPLE:
    H: 5 -> 3 -> 6 -> 1 -> 2 ->
    would become
    H: 1 -> 5 -> 3 -> 6 -> 2 -> 

    Challenge 2: moveMaxToBack()
    Write a method that will find the node with the largets value, and move it to the back.
    EXAMPLE:
    H: 1 -> 7 -> 11 -> 2 -> 18 -> 4 ->
    would become
    H: 1 -> 7 -> 11 -> 2 -> 4 -> 18 ->
*/

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class SLList {
    constructor(){
        this.head = null;
    }

    addToFront(value) {
        var newHead = new SLNode(value);
        newHead.next = this.head;
        this.head = newHead;
        return this;
    }

    addToBack(value) {
        if(this.head == null) {
            this.addToFront(value);
            return this;
        }

        var newNode = new SLNode(value);
        var runner = this.head;

        while(runner.next != null) {
            runner = runner.next;
        }

        runner.next = newNode;
        return this;
    }

    contains(value) {
        if(this.head == null) {
            return false;
        }

        var runner = this.head;

        while(runner != null) {
            if(runner.value == value) {
                return true;
            } else { 
                runner = runner.next;
            }
        }

        return false;
    }

    removeFront() {
        if(this.head == null) {
            return false;
        }

        var nodeToRemove = this.head;
        this.head = nodeToRemove.next;
        nodeToRemove.next = null;

        return nodeToRemove;
    }

    removeBack() {
        if(this.head == null) {
            return false;
        } else if(this.head.next = null) {
            return this.removeFront();
        }

        var lagger = null; 
        var leader = this.head; 
        while(leader.next != null) {
            lagger = leader;
            leader = leader.next;
        }

        lagger.next = null;
        return leader;
    }

    moveMinToFront(){
        // EDGE CASES: What 
        if(this.head == null || this.head.next == null) {
            return this;
        }

        // This is going to make it so we don't have to pass through twice!
        var minPrev = null; // At the end, we'll use this to "skip around" the min
        var min = this.head; // And this will be our min value node

        // If we want to be able to keep track of the minimum and its previous node,
        // it's easiest to just take a 2 runner approach
        var lagger = null;
        var leader = this.head;

        // While our leader hasn't checked every node
        while(leader != null) {
            // At each node, we'll check our leader's value against our min value
            if(leader.value < min.value) {
                // If the leader is at a node that has a value less than our minimum, set it as our minimum
                min = leader;
                // And set the lagger as our minPrev
                minPrev = lagger;
            }

            // Regardless of if we found a smaller value or not, we still need to move 
            // our leader and lagger down the line!
            lagger = leader;
            leader = leader.next;
        }

        // Now that our runners have finished the list, we can safely say we have our min.
        // BUT ONLY IF THE MIN IS NOT THE HEAD
        if(min != this.head) {
            // So set the minPrev's .next to the min's .next 
            minPrev.next = min.next;
            // To move the min node to the front, set its .next to the head
            min.next = this.head;
            // and reassign the list's head to the min node
            this.head = min;
        }
        // and voila!
        return this;
    }

    moveMaxToBack(){
        if(this.head == null || this.head.next == null) {
            return this;
        }

        // Same core logic as moveMinToFront
        var maxPrev = null;
        var max = this.head;

        var lagger = null;
        var leader = this.head;

        while(leader != null) {
            if(leader.value > max.value) {
                max = leader;
                maxPrev = lagger;
            }

            lagger = leader;
            leader = leader.next;
        }

        // If the max is the head, we have to handle this slightly differently. 
        // AKA, move the head first
        if(max = this.head) {
            this.head = max.next;
        } else {
            // otherwise, set maxPrev's .next to max's next
            maxPrev.next = max.next;
        }
        // Now this is where things get different.
        // The lagger is at the last node, since leader is at null after the last node
        // So, set lagger's next node to be the max, and make sure max's .next is set to null
        lagger.next = max;
        max.next = null;
        // Boom!
        return this;
    }
}