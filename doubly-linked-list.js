class Node {
  constructor(val) {
    this.val = val;
    this.previous = null;
    this.next = null;
  }
}

class DoublyLinkedList {
  constructor(vals=[]) {
    this.length = 0;
    this.head = null;
    this.tail = null;

    for (let val of vals) {
      this.push(val);
    }
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
      newNode.previous = this.tail;
    }
    this.tail = newNode;
    this.length++;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.tail = newNode;
    } else {
      this.head.previous = newNode;
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++;
  }

  pop() {
    if (this.length === 0) return new Error("Empty list");

    const val = this.tail.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail.previous.next = null;
      this.tail = this.tail.previous;
    }
    this.length--;
    return val;
  }

  shift() {
    if (this.length === 0) return new Error("Empty list");

    const val = this.head.val;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head.next.previous = null;
      this.head = this.head.next;
    }
    this.length--;
    return val;

  }

  getAt(ind) {
    if (this.length <= ind || ind < 0) return new Error("Invalid index");

    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === ind) {
        return currentNode.val;
      }
      currentNode = currentNode.next;
      count++;
    }
  }

  setAt(ind, val) {
    if (this.length <= ind || ind < 0) return new Error("Invalid index");

    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === ind) {
        currentNode.val = val;
      }
      currentNode = currentNode.next;
      count++;
    }
  }

  insertAt(ind, val) {
    if (this.length < ind || ind < 0) return new Error("Invalid index");

    const newNode = new Node(val);

    if (ind === 0 && this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else if (ind === 0) {
      this.head.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    } else if (ind === this.length) {
      this.tail.next = newNode;
      newNode.previous = this.tail;
      this.tail = newNode;
    } else {
      let currentNode = this.head;
      let count = 0;

      while (currentNode) {
        if (ind === count) {
          currentNode.previous.next = newNode;
          newNode.next = currentNode;
          currentNode.previous = newNode;
        }
        currentNode = currentNode.next;
        count++;
      }
    }
    this.length++;
  }

  removeAt(ind) {
    if (this.length <= ind || ind < 0) return new Error("Invalid index");

    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === ind) {
        if (ind === 0 && this.length === 1) {
          this.head = null;
          this.tail = null;
        } else if (ind === 0) {
          this.head = currentNode.next;
          currentNode.next.previous = null;
        } else if (ind === this.length - 1) {
          this.tail = currentNode.previous;
          currentNode.previous.next = null;
        } else {
          currentNode.previous.next = currentNode.next;
          currentNode.next.previous = currentNode.previous;
        }
        this.length--;
        return currentNode.val;
      }
      currentNode = currentNode.next;
      count++;
    }
  }

}

module.exports = DoublyLinkedList;
