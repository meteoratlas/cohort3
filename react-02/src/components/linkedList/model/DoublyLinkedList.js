const uuidv4 = require("uuid/v4");
class ListNode {
    constructor(subject, amount, next, prev) {
        this.subject = subject;
        this.amount = amount;
        this.id = uuidv4();
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
        this.current = this.head;
    }
    current() {
        return this.current;
    }
    first() {
        if (!this.head) return;
        this.current = this.head;
        return this.head;
    }
    last() {
        if (!this.head) return;
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        this.current = last;
        return this.current;
    }
    next() {
        if (!this.head) return;
        if (!this.current.next) return this.current;
        this.current = this.current.next;
        return this.current;
    }
    previous() {
        if (!this.head) return;
        if (!this.current.prev) return this.current;
        this.current = this.current.prev;
        return this.current;
    }
    insert(subject, amount) {
        if (!this.head) {
            this.head = new ListNode(subject, amount, null, null);
            return;
        }
        let newNode = new ListNode(
            subject,
            amount,
            this.current.next,
            this.current
        );
        if (this.current.next) this.current.next.prev = newNode;
        this.current.next = newNode;
        this.length += 1;
        this.current = newNode;
        return newNode;
    }
    delete() {
        if (!this.head) return null;
        if (!this.current) {
            this.current = null;
            return null;
        }
        if (this.current === this.head) {
            if (this.head.next) {
                this.head.next.prev = null;
                this.head = this.head.next;
                this.current = this.head;
            } else {
                this.head = null;
                this.current = null;
            }
            this.length--;
            return;
        }
        if (this.current.prev) this.current.prev.next = this.current.next;
        if (this.current.next) this.current.next.prev = this.current.prev;
        this.length--;
        // return node after position, if no node after position, return the last node
        if (this.current.next) {
            this.current = this.current.next;
            return this.current.next;
        } else {
            this.current = this.current.prev;
            return this.current.prev;
        }
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
        return string;
    }
    addFront(subject, amount) {
        let newNode = new ListNode(subject, amount, this.head, null);
        this.head.prev = newNode;
        this.head = newNode;
        this.current = newNode;
        return this.head;
    }
    clone() {
        if (!this.head) return new DoublyLinkedList(null, null);
        let newList = new DoublyLinkedList(this.head.subject, this.head.amount);
        let currNode = this.head.next;
        let writeNode = newList.head;

        while (currNode) {
            newList.insert(/*writeNode,*/ currNode.subject, currNode.amount);
            writeNode = writeNode.next;
            currNode = currNode.next;
        }
        newList.head = this.head;
        newList.length = this.length;
        newList.current = this.current;

        return newList;
    }
    map(func) {
        let cur = this.head;
        let arr = [];
        while (cur) {
            arr.push(func(cur));
            cur = cur.next;
        }
        return arr;
    }
}
