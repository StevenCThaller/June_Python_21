/*
    More Singly Linked Lists!

    Today we're going to be adding two new methods to our SLL class.

    Method 1:
    Remove Front
        - This method should remove the first node in the list, and
        reassign the head of the list.
        - Returns the node that was removed. If there was no node to return, return false
        Potential Edge Cases: Empty list and only one node??
    
    Remove Back
        - This method should remove the LAST node in the list.
        This one can be a little bit tricky.
        - Returns the node that was removed. If there was no node to return, return false.
        Potential Edge Cases: Empty list and only one node??
    
*/

class SLNode {
    constructor(value) {
        this.value = value;
        this.next = null; // Why??
    }
}

class SLList {
    constructor(){
        this.head = null;
    }

    addToFront(value) {
        // Step 1: Create a new node for our new head
        var newHead = new SLNode(value);

        // Step 2: Assign the new node's .next attribute to be the current list's head node
        newHead.next = this.head;

        // Step 3: Reassign the list's head node to be the new node
        this.head = newHead;
        
        return this;
    }

    addToBack(value) {
        // EDGE CASE: If the list is empty, adding to the back is the same as adding to the front
        if(this.head == null) { // the list is empty if there IS no head
            // and we've already built out our method for adding to the front, soooo
            this.addToFront(value);
            return this;
        }

        // Step 1: Create our new node
        var newNode = new SLNode(value);

        // Step 2: Start at the head of the list
        var runner = this.head;

        // Step 3: Run to the last node
        while(runner.next != null) {
            runner = runner.next;
        }

        // Step 4: Set the last node's .next to be the new node
        runner.next = newNode;
        return this;
    }

    contains(value) {
        // EDGE CASE: What if the list is empty?
        if(this.head == null) {
            // If there's nothing in the list, it can't contain a node with any value. Duh.
            return false;
        }

        // Start at the head of the list
        var runner = this.head;

        // We need to check every single node
        while(runner != null) {
            // Check if the value of runner matches the value passed in
            if(runner.value == value) {
                // If it does, we're done
                return true;
            } else { // Otherwise, we need to move runner down the line
                runner = runner.next;
            }
        }

        // If we're still here, then we've checked every node, so we're done, and it's not there.
        return false;
    }

    removeFront() {
        // EDGE CASE: No nodes!
        if(this.head == null) {
            return false;
        }

        // To remove the first node, we really just need to remove its .next reference, and reassign the head.
        // But removing the .next means we lose our reference to the next node. So I'll store the current head 
        // in a variable, then reassign the head, THEN reassign the node's .next. 

        var nodeToRemove = this.head;

        this.head = nodeToRemove.next;
        nodeToRemove.next = null;

        // This will work with our without a second node, so I'm not particularly concerned about making it any more efficient.
        return nodeToRemove;
    }

    removeBack() {
        // EDGE CASE: No nodes/One node
        if(this.head == null) {
            return false;
        } else if(this.head.next = null) {
            // If there's only one node in the list, the back is the front.
            // I already have a method that removes from the front, soooo
            return this.removeFront();
        }

        // Otherwise, things get a bit trickier. Finding the last node isn't difficult.
        // We did it yesterday. Just move the runner on down the line until we find the node
        // with a .next of null. But we want the SECOND to last. 

        // Option 1 - ugly: Find the last node, intialize a second runner, run the second
        // runner until the .next is the last node. This means we need 2 passes through the list,
        // which isn't great. I won't do this one.

        // Option 2 - less ugly: Utilize .next.next. A node's .next is, theoretically, a node.
        // And that node has a .next. So if runner.next is a node, runner.next.next is that
        // node's .next. So we can use that. NOTE: If we didn't handle the edge case of
        // if there's only one node, this would potentially break.
        // var runner = this.head;

        // while(runner.next.next != null) {
        //     runner = runner.next;
        // }

        // // By this point, runner is at the second to last node. So set the last node to a variable
        // var nodeToRemove = runner.next;
        // // And remove runner's reference to that node.
        // runner.next = null;
        // // And finally remove the node
        // return nodeToRemove;

        // Option 3 - two runners: If you have two runner variables, with one lagging behind the other,
        // when the leading runner reaches a point where its .next is null, the lagging runner will be at the
        // second to last node. Then, we already have a reference to the last node, which is v good
        var lagger = null; // I don't particularly care what this references quite yet.
        var leader = this.head; // duh
        while(leader.next != null) { // to get our leader to the last node
            lagger = leader; // catch the lagger up to the leader
            leader = leader.next; // ohp, you almost had em! leader moves up one
        }

        // By now, our lagger is at the second to last node, and the leader is at the last node.
        lagger.next = null; // chop it off
        return leader; // return the node you just chopped off
    }
}