import { PLL } from "./PLL";

test("insert", () => {
    let ll = new PLL("A", "Artist 1", 1, "google.com");
    expect(ll.showNodes()).toBe(
        "Title: A Artist: Artist 1 Year: 1 URL:google.com <-> "
    );
    ll.insert("B", "Artist 2", 2, "yahoo.com");
    expect(ll.showNodes()).toBe(
        "Title: A Artist: Artist 1 Year: 1 URL:google.com <-> Title: B Artist: Artist 2 Year: 2 URL:yahoo.com <-> "
    );
    ll.previous();
    ll.insert("C", "Artist 3", 3, "site.ca");
    expect(ll.showNodes()).toBe(
        "Title: A Artist: Artist 1 Year: 1 URL:google.com <-> Title: C Artist: Artist 3 Year: 3 URL:site.ca <-> Title: B Artist: Artist 2 Year: 2 URL:yahoo.com <-> "
    );
    ll.next();
    ll.insert("D", "Artist 4", 5, "e.ca");
    expect(ll.showNodes()).toBe(
        "Title: A Artist: Artist 1 Year: 1 URL:google.com <-> Title: C Artist: Artist 3 Year: 3 URL:site.ca <-> Title: B Artist: Artist 2 Year: 2 URL:yahoo.com <-> Title: D Artist: Artist 4 Year: 5 URL:e.ca <-> "
    );
});

test("First and last", () => {
    let ll = new PLL("A", 0);
    expect(ll.first().title).toBe("A");
    expect(ll.last().title).toBe("A");
    ll.insert("B", 1);
    ll.insert("C", 2);
    expect(ll.first().title).toBe("A");
    expect(ll.last().title).toBe("C");
});

test("next and previous", () => {
    let ll = new PLL("HEAD", 0);
    ll.insert("A", 1);
    ll.insert("B", 2);
    expect(ll.previous().title).toBe("A");
    expect(ll.next().title).toBe("B");
});

test("deletion", () => {
    let ll = new PLL("HEAD", "Artist 1", 1999, "a.ca");
    ll.insert("A", "Steve", 2009, "site2.ca");
    ll.insert("B", "Amy", 2001, "amy.ca");
    ll.previous();
    ll.delete();
    expect(ll.showNodes()).toBe(
        "Title: HEAD Artist: Artist 1 Year: 1999 URL:a.ca <-> Title: B Artist: Amy Year: 2001 URL:amy.ca <-> "
    );
    ll.delete();
    ll.delete();
    expect(ll.showNodes()).toBe("");
});

test("clone function", () => {
    let ll = new PLL("HEAD", "Artist 1", 2002, "e.ca");
    ll.insert("A", "Amy", 2301, "b.com");
    ll.insert("B", "M.", 1923, "web.site");
    const clone = ll.clone();
    expect(clone.showNodes()).toBe(
        "Title: HEAD Artist: Artist 1 Year: 2002 URL:e.ca <-> Title: A Artist: Amy Year: 2301 URL:b.com <-> Title: B Artist: M. Year: 1923 URL:web.site <-> "
    );
});

test("map function", () => {
    let ll = new PLL("HEAD", "Artist", 0);
    ll.insert("A", "Artist", 1);
    ll.insert("B", "Artist", 2);
    ll.insert("C", "Artist", 4);
    ll.insert("D", "Artist", 8);
    let mapTest = ll.map(x => x.year * 2);
    expect(mapTest).toStrictEqual([0, 2, 4, 8, 16]);
});
