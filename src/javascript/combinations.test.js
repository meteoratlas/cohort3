import funcs from "./combinations";

test("test comb function", () => {
    expect(funcs.comb(2, 5)).toBe(10);
    expect(funcs.comb(16, 24)).toBe(735471);
    expect(funcs.comb(12, 5)).toBe(undefined);
});
