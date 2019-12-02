export class ListNode {
    constructor(subject = "", amount = 0, next = null) {
        this.subject = subject;
        this.amount = amount;
        this.next = next;
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
export class SinglyLinkedList {
    constructor(subject, amount) {
        this.head = new ListNode(subject, amount);
        this.length = 1;
    }
    first() {
        return this.head;
    }
    last(position) {
        if (!position) return position;
        let p = position;
        while (p.next != null) {
            p = p.next;
        }
        return p;
    }
    next(position) {
        if (!position) return position;
        return position.next;
    }
    previous(position) {
        if (!position) return position;
        let p = this.head;
        while (p.next !== position) {
            p = p.next;
        }
        return p;
    }
    addFront(subject, amount) {
        let newNode = new ListNode(subject, amount, this.head);
        this.head = newNode;
        this.length += 1;
        return this.head;
    }
    insert(position, subject = "", amount = 0) {
        let newNode = new ListNode(subject, amount, position.next);
        position.next = newNode;
        this.length += 1;
        return newNode;
    }
    delete(position) {
        if (!position) return position;
        let p = this.head;
        while (p.next !== position) {
            p = p.next;
        }
        p.next = position.next;
        this.length -= 1;
        // returning the node after position, if it's null, return the last node
        return p.next === null ? p : p.next;
    }
    sumAmount() {
        return this.sumAmountHelper(this.head);
    }
    sumAmountHelper(node) {
        if (node.next === null) return node.amount;
        return this.sumAmountHelper(node.next) + node.amount;
    }
    showNodes() {
        let string = "";
        let p = this.head;
        while (p !== null) {
            string += `${p.show()} -> `;
            p = p.next;
        }
        console.log(string);
    }
}
