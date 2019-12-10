// import { DoublyLinkedList } from "../../linkedList/model/DoublyLinkedList";
import { DoublyLinkedList } from "../../linkedList/model/DoublyLinkedList";

export default class Stack extends DoublyLinkedList {
    constructor(sub, amt) {
        super(sub, amt);
    }
    pop() {
        let last = super.last();
        super.delete(super.last());
        return last;
    }
    add(sub, amt) {
        super.insert(super.last(), sub, amt);
    }
}
