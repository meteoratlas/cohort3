export class ListNode {
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

export class LinkedList {
    constructor() {
        this.sentinel = new ListNode(null, null, null, null);
        this.sentinel.next = this.sentinel;
        this.sentinel.prev = this.sentinel;

        this.current = this.sentinel.next;
    }
    first() {
        if (this.sentinel.next === this.sentinel) return null;
        return this.sentinel.next;
    }
    last() {
        if (this.sentinel.prev === this.sentinel) return null;
        return this.sentinel.prev;
    }
    next() {
        return (this.current = this.current.next);
    }
    prev() {
        return (this.current = this.current.prev);
    }
    insert(subject, amount) {
        const newNode = new ListNode(
            subject,
            amount,
            this.current.next,
            this.current
        );
        this.current.next.prev = newNode;
        this.current.next = newNode;
        this.current = newNode;
    }
    sumAmount() {
        let currNode = this.sentinel.next;
        let sum = 0;
        while (currNode !== this.sentinel) {
            sum += currNode.amount;
            currNode = currNode.next;
        }
        return sum;
    }
    showNodes() {
        let string = "";
        let p = this.sentinel.next;
        while (p !== this.sentinel) {
            string += `${p.show()} <-> `;
            p = p.next;
        }
        console.log(string);
        return string;
    }
    delete() {
        this.current.prev.next = this.current.next;
        this.current.next.prev = this.current.prev;
        this.current = null;
        this.current;
    }
}
