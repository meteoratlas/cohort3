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
        if (!this.sentinel.next) return null;
        if (!this.current) {
            this.current = null;
            return null;
        }
        if (this.current === this.sentinel.next) {
            if (this.sentinel.next) {
                this.sentinel.next.prev = null;
                this.sentinel.next = this.sentinel.next.next;
                this.current = this.sentinel.next;
            } else {
                this.sentinel.next = null;
                this.current = null;
            }
            return;
        }
        if (this.current.prev) this.current.prev.next = this.current.next;
        if (this.current.next) this.current.next.prev = this.current.prev;
        // return node after this.current, if no node after this.current, return the last node
        if (this.current.next) {
            this.current = this.current.next;
            return this.current.next;
        } else {
            this.current = this.current.prev;
            return this.current.prev;
        }
    }
    clone() {
        if (!this.sentinel.next) return new LinkedList();
        let newList = new LinkedList();
        let currNode = this.sentinel.next;
        let writeNode = newList.sentinel.next;

        while (currNode && currNode !== this.sentinel) {
            newList.insert(currNode.subject, currNode.amount);
            writeNode = writeNode.next;
            currNode = currNode.next;
        }

        return newList;
    }
    map(func) {
        let cur = this.sentinel.next;
        let arr = [];
        while (cur !== this.sentinel) {
            arr.push(func(cur));
            cur = cur.next;
        }
        return arr;
    }
}
