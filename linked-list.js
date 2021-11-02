/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
    } else {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length++
  }

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.tail = newNode;
    } else {
      newNode.next = this.head;
    }
    this.head = newNode;
    this.length++
  }

  /** pop(): return & remove last item. */

  pop() {
    if (this.length === 0) return new Error('Cannot remove element from empty list');

    let currentNode = this.head;

    if (currentNode.next === null) {
      this.head = null;
      this.tail = null;
      this.length--;
      return currentNode.val;
    }

    while (currentNode) {
      const nextNode = currentNode.next;

      if (nextNode.next === null) {
        this.tail = currentNode;
        currentNode.next = null;
        this.length--;
        return nextNode.val;
      }
      currentNode = nextNode;
    }
  }

  /** shift(): return & remove first item. */

  shift() {
    if (this.length === 0) return new Error('Cannot remove element from empty list');
    
    let currentNode = this.head;

    if (currentNode.next === null) {
      this.tail = null;
    } 
    this.head = currentNode.next;
    this.length--;
    return currentNode.val;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (this.length === 0 || idx > this.length - 1 || idx < 0) return new Error("Invalid index");

    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === idx) {
        return currentNode.val;
      }
      count++;
      currentNode = currentNode.next;
    }
  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (this.length === 0 && idx === 0) {
      const newNode = new Node(val);
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else if (idx > this.length - 1 || idx < 0) {
      return new Error("Invalid index");
    }

    let currentNode = this.head;
    let count = 0;

    while (currentNode) {
      if (count === idx) {
        currentNode.val = val;
      }
      count++;
      currentNode = currentNode.next;
    }
  }

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    const newNode = new Node(val);

    if (this.length === 0 && idx === 0) {
      this.head = newNode;
      this.tail = newNode;
      this.length++;
    } else if (this.length === idx) {
      this.tail.next = newNode;
      this.tail = newNode;
      this.length++;
    } else if (idx > this.length - 1 || idx < 0) {
      return new Error("Invalid index");
    } else {
      let currentNode = this.head;
      let previousNode;
      let count = 0;

      while (currentNode) {
        const nextNode = currentNode.next;

        if (count===idx) {
          if (!previousNode) {
            this.head = newNode;
          } else {
            previousNode.next = newNode;
          }
          newNode.next = currentNode;
          this.length++;
        }
        count++;
        previousNode = currentNode;
        currentNode = nextNode;
      }
    }
  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (this.length === 0 || idx > this.length - 1) return new Error();

    let currentNode = this.head;
    let previousNode = null;
    let count = 0;

    while (currentNode) {
      const nextNode = currentNode.next;

      if (count === idx) {
        if (!previousNode && !nextNode) {
          this.head = null;
          this.tail = null;
        } else if (!previousNode) {
          this.head = nextNode;
        } else if (!nextNode) {
          previousNode.next = null;
          this.tail = previousNode;
        } else {
          previousNode.next = nextNode;
        }
        this.length--;
        return currentNode.val;
      }
      count++;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    return new Error();
  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let currentNode = this.head;
    let count = 0;
    let sum = 0;

    while (currentNode) {
      count++;
      sum += currentNode.val;
      currentNode = currentNode.next;
    }
    return sum / count;
  }
}

module.exports = LinkedList;
