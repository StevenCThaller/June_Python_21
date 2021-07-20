/*
    isCircular() 

    Write a method that will return a boolean based on whether a singly linked list is circular.

    A SLL is circular if there is no node with a .next of null (i.e. what should be the last node has a .next
    that points back at another previous node)


    HINT: https://www.youtube.com/watch?v=7UGu2sRmSHI&ab_channel=TopMovieClips
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
        if(this.head == null) {
            return this;
        }

        while(this.head != null && this.head.value < 0) {
            this.head = this.head.next;
        }

        if(this.head == null) {
            return this;
        }

        var walker = this.head;
        var runner = walker.next;

        while(runner != null) {
            if(runner.value < 0){
                walker.next = runner.next;
                runner = runner.next;
            } else {
                walker = runner;
                runner = runner.next;
            }
        }

        return this;
    }

    secondToLastValue(){
        if(this.head == null || this.head.next == null) {
            return false;
        }

        var walker = null;
        var runner = this.head;
        while(runner.next != null) {
            walker = runner;
            runner = runner.next;
        }

        return walker.value;
    }

    isCircular() {
        // Edge case: If the list is empty, it can't be Circular
        if(this.head == null) {
            return false;
        }
        // Just like Cap and Sam, we'll have 2 runners: one that moves twice as fast as the other.

        // If Cap is ever about to pass Sam again after starting, then we have to have a circular SLL

        // They both start their run at the same spot
        var cap = this.head;
        var sam = this.head;

        // Cap's gonna move twice as fast as Sam, so we need to make sure that both the node
        // Cap is at, AND the node that Cap is going to be at is not null
        while(cap != null && cap.next != null && cap.next.next) {
            cap = cap.next.next;
            sam = sam.next;

            // If Cap calls out "On your left"
            if(cap == sam) {
                // We'll save Sam the embarassment of being lapped over and over again and just end it
                return true;
            }
        }

        return false;
    }
}


var list1 = new SLList();
list1.addToBack(1).addToBack(2).addToBack(3).addToBack(4);
list1.head.next.next.next.next = list1.head.next;

var list2 = new SLList();
list2.addToBack(1).addToBack(2).addToBack(3);

list1.isCircular() // Should return true
list2.isCircular() // Should return false