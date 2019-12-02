import { SinglyLinkedList, ListNode } from "./SinglyLinkedList";

test("testing SinglyLinkedList methods", () => {
    const sl1 = new SinglyLinkedList("math", 10);
    sl1.insert(sl1.head, "music", 7);
    console.log(sl1);
    expect(sl1.length).toBe(2);
    expect(sl1.sumAmount()).toBe(17);
    sl1.insert(sl1.head, "LA", 3);
    expect(sl1.sumAmount()).toBe(20);
    sl1.showNodes();
    sl1.addFront("gym", 4);
    sl1.showNodes();
    expect(sl1.sumAmount()).toBe(24);

    const clone = sl1.clone();
    expect(clone.showNodes()).toBe(
        "subject: gym amount: 4 -> subject: math amount: 10 -> subject: LA amount: 3 -> subject: music amount: 7 -> "
    );
});
