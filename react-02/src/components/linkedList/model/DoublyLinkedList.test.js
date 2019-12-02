import { DoublyLinkedList } from "./DoublyLinkedList";

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

    const clone = dl.clone();
    expect(clone.showNodes()).toBe(
        "subject: gym amount: 4 <-> subject: math amount: 10 <-> subject: LA amount: 3 <-> subject: music amount: 7 <-> "
    );
});
