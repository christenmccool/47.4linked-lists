const CircularArray = require("./circular-array");

let circ; 

beforeEach(()=> {
  circ = new CircularArray();

  circ.addItem('harry');
  circ.addItem('hermione');
  circ.addItem('ginny');
  circ.addItem('ron');
})

describe("print", function() {
  it("prints circular array", function() {
    circ.printArray();
  });
});

describe("adds item", function() {
  it("contains items", function() {
    expect(circ.vals.length).toBe(4);

    expect(circ.getByIndex(0)).toBe('harry');
    expect(circ.getByIndex(1)).toBe('hermione');
    expect(circ.getByIndex(2)).toBe('ginny');
    expect(circ.getByIndex(3)).toBe('ron');
    expect(circ.getByIndex(4)).toBe(null);
  });
});

describe("rotates right", function() {
  it("rotate right 1", function() {
    circ.rotate(1);
    expect(circ.getByIndex(0)).toBe('hermione');
    expect(circ.getByIndex(1)).toBe('ginny');
    expect(circ.getByIndex(2)).toBe('ron');
    expect(circ.getByIndex(3)).toBe('harry');
    expect(circ.getByIndex(4)).toBe(null);
    circ.printArray();
  });
});

describe("rotates left", function() {
  it("rotate left 1", function() {
    circ.rotate(-1);
    expect(circ.getByIndex(0)).toBe('ron');
    expect(circ.getByIndex(1)).toBe('harry');
    expect(circ.getByIndex(2)).toBe('hermione');
    expect(circ.getByIndex(3)).toBe('ginny');
    expect(circ.getByIndex(4)).toBe(null);
    circ.printArray();
  });

  it("rotate left 17", function() {
    circ.rotate(-17);
    expect(circ.getByIndex(1)).toBe('harry');
    circ.printArray();
  });
});