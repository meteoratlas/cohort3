import { DoublyLinkedList } from "../../linkedList/model/DoublyLinkedList";

export default class Queue extends DoublyLinkedList {
    pop() {
        let first = super.first();
        super.delete();
        return first;
    }
    add(sub, amt) {
        super.last();
        super.insert(sub, amt);
    }
    clone() {
        if (!this.head) return new Queue(null, null);
        let newList = new Queue(this.head.subject, this.head.amount);
        let currNode = this.head.next;
        let writeNode = newList.head;

        while (currNode) {
            newList.insert(currNode.subject, currNode.amount);
            writeNode = writeNode.next;
            currNode = currNode.next;
        }
        newList.head = this.head;
        newList.length = this.length;
        newList.current = this.current;

        return newList;
    }
}
