class ListNode {
    constructor(subject, amount, next, prev) {
        this.subject = subject;
        this.amount = amount;
        this.next = next;
        this.prev = prev;
    }
    show() {
        return `subject: ${this.subject} amount: ${this.amount}`;
    }
}
/*
  first ⇒ position to the first node
  last ⇒ position to the last node
  next ⇒ move to the next node
  previous ⇒ backup one node (how are we going to do this?)
  insert ⇒ inserts a new node after the current node (which node will be the current node after the insertion?)
  delete ⇒ delete the current node (which node will be the current node after the deletion?)

*/
export class DoublyLinkedList {
    constructor(subject, amount) {
        let newNode = new ListNode(subject, amount, null, null);
        this.head = newNode;
        this.length = 1;
    }
    first() {
        return this.head;
    }
    last() {
        return this.head.prev;
    }
    next(position) {
        if (!position) return position;
        return position.next;
    }
    previous(position) {
        if (!position) return position;
        return position.prev;
    }
    insert(position, subject, amount) {
        let newNode = new ListNode(subject, amount, position.next, position);
        if (position.next) position.next.prev = newNode;
        position.next = newNode;
        this.length += 1;
        return newNode;
    }
    delete(position) {
        if (!position) return position;
        position.prev.next = position.next;
        position.next.prev = position.prev;
        this.length -= 1;
        // return node after position, if no node after position, return the last node
        return position.next ? position.next : position.prev;
    }
    sumAmount() {
        let currNode = this.head;
        let sum = 0;
        while (currNode) {
            sum += currNode.amount;
            currNode = currNode.next;
        }
        return sum;
    }
    showNodes() {
        let string = "";
        let p = this.head;
        while (p) {
            string += `${p.show()} <-> `;
            p = p.next;
        }
        console.log(string);
    }
    addFront(subject, amount) {
        let newNode = new ListNode(subject, amount, this.head, null);
        this.head.prev = newNode;
        this.head = newNode;
        return this.head;
    }
}
