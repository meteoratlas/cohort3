import Stack from "./Stack";
import Queue from "./Queue";

test("Test stack functionality", () => {
    let stack = new Stack("First", 20);
    expect(stack.showNodes()).toBe("subject: First amount: 20 <-> ");
    stack.add("Second", 16);
    let popped = stack.pop();
    expect(popped.subject).toBe("Second");
    expect(popped.amount).toBe(16);
    stack.add("Third", 32);
    stack.add("Fourth", 2);
    popped = stack.pop();
    expect(popped.subject).toBe("Fourth");
    expect(popped.amount).toBe(2);
});

test("Test queue functionality", () => {
    let queue = new Queue("First", 1);
    expect(queue.showNodes()).toBe("subject: First amount: 1 <-> ");
    queue.add("Second", 16);
    let popped = queue.pop();
    expect(popped.subject).toBe("First");
    expect(popped.amount).toBe(1);
    popped = queue.pop();
    expect(popped.subject).toBe("Second");
    expect(popped.amount).toBe(16);
});
