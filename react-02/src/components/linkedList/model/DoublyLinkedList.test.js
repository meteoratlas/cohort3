import { DoublyLinkedList } from "../Linked List/DoublyLinkedList";

test("testing DoublyLinkedList methods", () => {
    const dl = new DoublyLinkedList("math", 10);
    dl.insert(dl.head, "music", 7);
    console.log(dl);
    expect(dl.length).toBe(2);
    expect(dl.sumAmount()).toBe(17);
    dl.insert(dl.head, "LA", 3);
    expect(dl.sumAmount()).toBe(20);
    dl.showNodes();
    dl.addFront("gym", 4);
    dl.showNodes();
    expect(dl.sumAmount()).toBe(24);
});
