/*
    We're rocking 2 algos again today: prepend and append values.

    Prepend => 2 parameters: valueToFind, valueToAdd
    - Find the node with a value of valueToFind, and add a new node with a value of
    valueToAdd before it.

    EXAMPLE: 
    someList = H: 5 -> 4 -> 2 -> 1 ->

    someList.prepend(2, 3) would make someList H: 5 -> 4 -> 3 -> 2 -> 1 ->

    Append => 2 parameters: valueToFind, valueToAdd
    - Find the node with a value of valueToFind, and add a new node with a value of
    valueToAdd after it.

    EXAMPLE:
    someList = H: 7 -> 2 -> 4 -> 8 -> 11 ->

    someList.append(4, 5) would make someList H: 7 -> 2 -> 4 -> 5 -> 8 -> 11 ->

    SOME EDGE CASES:
    - What if the list is empty?
    - What if the value I'm looking for isn't there?
        - You can just return False in that case.
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
        // Edge Case 1: list is empty --> return false because the valueToFind doesn't exist
        if(this.head == null) {
            return false;
        } else if (this.head.value == valueToFind){ // Edge Case 2: The head of the list has the value we want
            // In which case, we're just adding to the front. Which we've done before.
            return this.addToFront(newValue);
        }

        // We'll need to keep track of the runner and the node before it, so:
        var walker = null;
        var runner = this.head;

        // Traverse along the list
        while(runner != null) {
            // Check each node's value against valueToFind
            if(runner.value == valueToFind){
                // If we found it, create our new node
                var newNode = new SLNode(newValue);
                // Set its .next to the runner (newNode is now before the runner)
                newNode.next = runner;
                // But, newNode isn't connected to the node that was before runner,
                // so set walker's .next to the new node
                walker.next = newNode;
                // and we don't need to check anything else, so peace out
                return this;
            }

            // if we didn't make it into that if check, we need to check the next node
            // so set walker to runner, and runner to the next node from there
            walker = runner;
            runner = runner.next;
        }
        // If we're here, it means that runner has checked every node in the list,
        // and never found the value, so return false
        return false;
    }

    appendValue(valueToFind, newValue){
        // Edge Case: List is empty
        if(this.head == null) {
            return false;
        }

        // We only need to keep track of one node at a time, and its next 
        // if we find the node we want to append to. So I'm going with just 1 runner
        var runner = this.head;
        // while runner != null because we want to include checking the last node
        while(runner != null) {
            // If runner is at the node we want to append to
            if(runner.value == valueToFind){
                // create our new node
                var newNode = new SLNode(newValue);
                // set the new node's .next to be runner's .next
                newNode.next = runner.next;
                // And then reassign runner's .next to be newNode
                runner.next = newNode;

                // Diagram of process:
                // valueToFind = 4
                // valueToAdd = 8
                // List: H: 9 -> 4 -> 6 -> 2 -> 3 ->
                //               r
                // H: 9 -> 4 -> 6 -> 2 -> 3 -> 
                //         r    ^
                //              8 nN        new node's .next is runner's .next 
                // H: 9 -> 4 -> 8 -> 6 -> 2 -> 3
                //         r    nN

                // And finally, return the list, because we're donezo
                return this;
            }
            // If we didnt' hop into that if check, move runner along
            runner = runner.next;
        }
        // If we finished the while loop, runner has checked every node, meaning the value doesn't exist.
        return false;
    }
}