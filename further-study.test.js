const LinkedList = require("./further-study");


// describe("seeing what a linked list looks like", function() {
//   it("prints", function() {
//     let lst = new LinkedList([5, 6, 8, 10]);
//     console.log(lst);
//   });
// });

describe("reverse", function() {
  it("reverses a linked list", function() {
    let lst = new LinkedList([2, 7, 5, 3, 10]);

    lst.reverse();

    expect(lst.length).toBe(5);
    expect(lst.head.val).toBe(10);
    expect(lst.head.next.val).toBe(3);
    expect(lst.head.next.next.val).toBe(5);
    expect(lst.head.next.next.next.val).toBe(7);
    expect(lst.tail.val).toBe(2);
  });
});

describe("sort", function() {
  it("sorts two sorted lists", function() {
    let lst1 = new LinkedList([2, 5, 10]);
    let lst2 = new LinkedList([3, 4, 11]);

    const lst = LinkedList.sort(lst1, lst2);

    expect(lst.length).toBe(6);
    expect(lst.head.val).toBe(2);
    expect(lst.head.next.val).toBe(3);
    expect(lst.head.next.next.val).toBe(4);
    expect(lst.head.next.next.next.val).toBe(5);
    expect(lst.head.next.next.next.next.val).toBe(10);
    expect(lst.tail.val).toBe(11);
  });
});

describe("pivot", function() {
  it("pivots list around a value", function() {
    let lst = new LinkedList([7, 6, 2, 5, 3, 5, 9, 1, 1]);

    lst.pivot(5)

    expect(lst.length).toBe(9);

    expect(lst.head.val).toBe(2);
    expect(lst.head.next.val).toBe(3);
    expect(lst.head.next.next.val).toBe(1);
    expect(lst.head.next.next.next.val).toBe(1);
    expect(lst.head.next.next.next.next.val).toBe(7);
    expect(lst.head.next.next.next.next.next.val).toBe(6);
    expect(lst.head.next.next.next.next.next.next.val).toBe(5);
    expect(lst.head.next.next.next.next.next.next.next.val).toBe(5);
    expect(lst.tail.val).toBe(9);
  });
});