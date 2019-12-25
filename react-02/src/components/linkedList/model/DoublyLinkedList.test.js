import { ListNode, DoublyLinkedList } from "./DoublyLinkedList";

// import { ListNode, LinkedList } from "./LinkedList";

// test("ListNode:show", () => {
//     const ln = new ListNode("A", 1);
//     expect(ln.show()).toBe(`subject: A amount: 1`);
// });

test("insert", () => {
    let ll = new DoublyLinkedList();
    ll.insert("A", 1);
    expect(ll.showNodes()).toBe("subject: A amount: 1 <-> ");
    ll.insert("B", 1);
    expect(ll.showNodes()).toBe(
        "subject: A amount: 1 <-> subject: B amount: 1 <-> "
    );
    ll.prev();
    ll.insert("C", 1);
    expect(ll.showNodes()).toBe(
        "subject: A amount: 1 <-> subject: C amount: 1 <-> subject: B amount: 1 <-> "
    );
    ll.prev();
    ll.prev();
    ll.prev();
    ll.insert("D", 2);
    expect(ll.showNodes()).toBe(
        "subject: A amount: 1 <-> subject: C amount: 1 <-> subject: B amount: 1 <-> subject: D amount: 2 <-> "
    );
});

test("First and last", () => {
    let ll = new DoublyLinkedList();
    expect(ll.first()).toBe(null);
    expect(ll.last()).toBe(null);
    ll.insert("A", 1);
    ll.insert("B", 2);
    expect(ll.first().subject).toBe("A");
    expect(ll.last().subject).toBe("B");
});

test("next and prev", () => {
    let ll = new DoublyLinkedList();
    ll.insert("A", 1);
    ll.insert("B", 2);
    expect(ll.prev().subject).toBe("A");
    expect(ll.next().subject).toBe("B");
});

test("deletion", () => {
    let ll = new DoublyLinkedList();
    ll.insert("A", 1);
    ll.insert("B", 2);
    ll.prev();
    ll.delete();
    expect(ll.showNodes()).toBe("subject: B amount: 2 <-> ");
    ll.delete();
    expect(ll.showNodes()).toBe("");
});

test("sum node amounts", () => {
    let ll = new DoublyLinkedList();
    ll.insert("A", 1);
    ll.insert("B", 2);
    ll.insert("C", 4);
    ll.insert("D", 8);
    expect(ll.sumAmount()).toBe(15);
});

test("clone function", () => {
    let ll = new DoublyLinkedList();
    ll.insert("A", 1);
    ll.insert("B", 2);
    ll.insert("C", 4);
    const clone = ll.clone();
    expect(clone.showNodes()).toBe(
        "subject: A amount: 1 <-> subject: B amount: 2 <-> subject: C amount: 4 <-> "
    );
});

test("map function", () => {
    let ll = new DoublyLinkedList();
    ll.insert("A", 1);
    ll.insert("B", 2);
    ll.insert("C", 4);
    ll.insert("D", 8);
    let mapTest = ll.map(x => x.amount * 2);
    expect(mapTest).toStrictEqual([2, 4, 8, 16]);
});
