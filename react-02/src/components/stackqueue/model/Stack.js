import { DoublyLinkedList } from "../../linkedList/model/DoublyLinkedList";

export default class Stack extends DoublyLinkedList {
    pop() {
        let last = super.last();
        super.delete();
        return last;
    }
    add(sub, amt) {
        super.last();
        super.insert(sub, amt);
    }
    clone() {
        if (!this.head) return new Stack(null, null);
        let newList = new Stack(this.head.subject, this.head.amount);
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
