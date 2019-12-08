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

class LinkedList {
    constructor() {
        this.sentinel = new ListNode(null, null, null, null);
        this.sentinel.next = this.sentinel;
        this.sentinel.prev = this.sentinel;
        this.count = 0;
    }
}
