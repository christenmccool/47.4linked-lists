class CircularArray {
  constructor() {
    this.vals = [];
    this.start = 0;
  }

  addItem(item) {
    this.vals.push(item);
  }

  getByIndex(ind) {
    if (ind > this.vals.length - 1) return null;
    let calcI = ind + this.start; 
    if (calcI > this.vals.length - 1) {
      calcI -= this.vals.length;
    }
    return this.vals[calcI]
  }

  rotate(num) {
    let newStart = num;
    newStart = newStart % this.vals.length;
    if (newStart < 0) {
      newStart += this.vals.length;
    }
    this.start = newStart;
  }

  printArray() {
    for (let i=0; i < this.vals.length; i++) {
      console.log(this.getByIndex(i));
    }
  }
}

module.exports = CircularArray;