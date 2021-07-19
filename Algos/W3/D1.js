/*
    removeNegatives(): Write a method that will remove all nodes with negative values from our singly linked list.

    EXAMPLES:

    H: -1 -> 5 -> 7 -> -3 -> 4 -> will become H: 5 -> 7 -> 4 ->

    H: 7 -> -4 -> -3 -> -2 -> will become H: 7 ->

    H: -10 -> -7 -> -4 -> will become H: (an empty list)

    H: (empty list) will become H: (empty list)

    secondToLastValue(): Write a method that will find the second to last node and return its value

    EXAMPLES:
    H: 10 -> 9 -> 4 -> 1 ->  would return 4
    H: (empty list) would return false
    H: 10 -> would return false
    
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
        if(this.head == null || this.head.next == null) {
            return this;
        }

        var minPrev = null; 
        var min = this.head; 

        var lagger = null;
        var leader = this.head;

        while(leader != null) {
            if(leader.value < min.value) {
                min = leader;
                minPrev = lagger;
            }

            lagger = leader;
            leader = leader.next;
        }

        if(min != this.head) {
            minPrev.next = min.next;
            min.next = this.head;
            this.head = min;
        }
        return this;
    }

    moveMaxToBack(){
        if(this.head == null || this.head.next == null) {
            return this;
        }
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
        if(max = this.head) {
            this.head = max.next;
        } else {
            maxPrev.next = max.next;
        }
        lagger.next = max;
        max.next = null;
        return this;
    }

    prependValue(valueToFind, newValue){
        if(this.head == null) {
            return false;
        } else if (this.head.value == valueToFind){
            return this.addToFront(newValue);
        }

        var walker = null;
        var runner = this.head;

        while(runner != null) {
            if(runner.value == valueToFind){
                var newNode = new SLNode(newValue);
                newNode.next = runner;
                walker.next = newNode;
                return this;
            }
            walker = runner;
            runner = runner.next;
        }
        return false;
    }

    appendValue(valueToFind, newValue){
        if(this.head == null) {
            return false;
        }
        var runner = this.head;
        while(runner != null) {
            if(runner.value == valueToFind){
                var newNode = new SLNode(newValue);
                newNode.next = runner.next;
                runner.next = newNode;
                return this;
            }
            runner = runner.next;
        }
        return false;
    }

    removeNegatives(){
        // EDGE CASE: If the list is empty
        if(this.head == null) {
            return this;
        }

        // EDGE CASE: What if we have 1 (or more) negative values at the start of the list.
        // The easiest way to handle it is move the head to the next node until its not negative (and still exists)
        while(this.head != null && this.head.value < 0) {
            this.head = this.head.next;
        }

        // Now let's re-test our original edge case, because it's possible we broke out of that while loop
        // due to the head being null (i.e. if all values were negative)
        if(this.head == null) {
            return this;
        }

        // In order to remove a node, we need to reassign the previous node's .next to
        // the current node's .next
        // Since we've already determined the head is not negative, we'll start with runner at the 2nd node
        var walker = this.head;
        var runner = walker.next;

        // Check every node
        while(runner != null) {
            // If the node's value is negative
            if(runner.value < 0){
                // "remove it" by reassigning walker.next to be runner.next
                walker.next = runner.next;
                // Now, in this situation, we don't want to move runner AND walker, 
                // as we could potentially have multiple negative values consecutively.
                runner = runner.next;
                // So we just move runner, since walker is the next node's new previous node
            } else {
                // If the node's value was NOT negative, then we move both walker AND runner
                walker = runner;
                runner = runner.next;
            }
        }

        return this; // After running through, we're done!
    }

    secondToLastValue(){
        // EDGE CASE: List is empty or only 1 node
        if(this.head == null || this.head.next == null) {
            return false;
        }

        // Otherwise, this one's pretty easy. We'll go until we're at the second
        // to last node, which means the one whose next node's .next is null.
        // I can use one runner and use .next.next or use a walker and runner, where
        // runner stopping on the last node means walker stops on the second to last.
        // From a space complexity standpoint, one runner using .next.next is more efficient, 
        // but one extra variable in memory is negligible
        var walker = null;
        var runner = this.head;
        // Runner will stop at the last node if it stops when its .next is null
        while(runner.next != null) {
            walker = runner;
            runner = runner.next;
        }

        // Now, we want to return the value of the second to last node.
        // Walker is the second to last node.
        return walker.value;
    }
}
