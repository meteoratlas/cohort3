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
        this.current = this.head;
    }
    first() {
        this.current = this.head;
        return this.head;
    }
    last() {
        let last = this.head;
        while (last.next) {
            last = last.next;
        }
        this.current = last;
        return last;
    }
    next(position) {
        if (!position.next) return position;
        this.current = position.next;
        return position.next;
    }
    previous(position) {
        if (!position.prev) return position;
        this.current = position.prev;
        return position.prev;
    }
    insert(position, subject, amount) {
        if (!this.head) {
            this.head = new ListNode(subject, amount);
            return;
        }
        let newNode = new ListNode(subject, amount, position.next, position);
        if (position.next) position.next.prev = newNode;
        position.next = newNode;
        this.length += 1;
        this.current = newNode;
        return newNode;
    }
    delete(position) {
        // if (!this.head) return;
        if (position === this.head) {
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
        if (!position) return position;
        if (position.prev) position.prev.next = position.next;
        if (position.next) position.next.prev = position.prev;
        this.length--;
        // return node after position, if no node after position, return the last node
        //return position.next ? position.next : position.prev;
        if (position.next) {
            this.current = position.next;
            return position.next;
        } else {
            this.current = position.prev;
            return position.prev;
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
            newList.insert(writeNode, currNode.subject, currNode.amount);
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
