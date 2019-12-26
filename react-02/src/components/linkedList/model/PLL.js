const uuidv4 = require("uuid/v4");
class ListNode {
    constructor(title, artist, year, url, next, prev) {
        this.title = title;
        this.artist = artist;
        this.year = year;
        this.url = url;
        this.id = uuidv4();
        this.next = next;
        this.prev = prev;
    }
    show() {
        return `Title: ${this.title} Artist: ${this.artist} Year: ${this.year} URL:${this.url}`;
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
export class PLL {
    constructor(title, artist, year, url) {
        let newNode = new ListNode(title, artist, year, url, null, null);
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
        return last;
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
    insert(title, artist, year, url) {
        if (!this.head) {
            this.head = new ListNode(title, artist, year, url, null, null);
            return;
        }
        let newNode = new ListNode(
            title,
            artist,
            year,
            url,
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
    clone() {
        if (!this.head) return new PLL(null, null, null, null);
        let newList = new PLL(
            this.head.title,
            this.head.artist,
            this.head.year,
            this.head.url
        );
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
