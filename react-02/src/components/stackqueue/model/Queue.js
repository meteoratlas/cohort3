import { DoublyLinkedList } from "../../linkedList/model/DoublyLinkedList";

export default class Queue extends DoublyLinkedList {
    constructor(sub, amt) {
        super(sub, amt);
    }
    pop() {
        let last = super.last();
        super.delete(super.last());
        return last;
    }
    add(sub, amt) {
        super.addFront(sub, amt);
    }
}
