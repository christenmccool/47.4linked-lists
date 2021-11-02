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


  /** reverse(): reverse list in place */

  reverse() {
    if (this.length === 0) return [];

    for (let i = 0; i < this.length / 2; i ++) {
      const temp = this.getAt(i); 

      this.setAt(i, this.getAt(this.length - 1 - i));

      this.setAt(this.length - 1 - i, temp);
    }
  }

  static sort(list1, list2) {
    const newList = new LinkedList();

    let currentNodeList1 = list1.head;
    let currentNodeList2 = list2.head;

    while (currentNodeList1 || currentNodeList2) {

      if (currentNodeList1 && (!currentNodeList2 || currentNodeList1.val <= currentNodeList2.val)) {
        newList.push(currentNodeList1.val);
        currentNodeList1 = currentNodeList1.next;
      } else if (currentNodeList2 && (!currentNodeList1 || currentNodeList1.val > currentNodeList2.val)) {
        newList.push(currentNodeList2.val);
        currentNodeList2 = currentNodeList2.next;
      }
    }
    return newList;
  }

  pivot(val) {
    if (this.length === 0) return [];

    let largerValList = new LinkedList();

    let previousNode;
    let currentNode = this.head;

    while (currentNode) {
      if (currentNode.val >= val) {
        if (!previousNode) {
          this.head = currentNode.next;
        } else {
          previousNode.next = currentNode.next;
        }
        this.length--;
        largerValList.push(currentNode.val);
      } else {
        previousNode = currentNode;
      }
      currentNode = currentNode.next;
    }

    this.tail.next = largerValList.head;
    this.tail = largerValList.tail;
    this.length = this.length + largerValList.length;
  }

}

module.exports = LinkedList;
