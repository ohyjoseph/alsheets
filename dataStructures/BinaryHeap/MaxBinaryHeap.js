class MaxBinaryHeap {
  constructor() {
    this.heap = [];
  }
  insert(value) {
    this.heap.push(value);
    let currentIndex = this.heap.length - 1;
    let parentIndex = this.getParentIndex(currentIndex);
    while (parentIndex !== undefined && this.heap[currentIndex] > this.heap[parentIndex]) {
      this.swapValues(currentIndex, parentIndex);
      currentIndex = parentIndex;
      parentIndex = this.getParentIndex(currentIndex);
    }
  }
  removeRoot() {
    if (!this.heap.length) return null;
    if (this.heap.length === 1) return this.heap.pop();
    this.swapValues(0, this.heap.length - 1);
    let returnValue = this.heap.pop();
    let parentI = 0;
    let [leftChildI, rightChildI] = this.getChildrenIndices(parentI);
    while (leftChildI !== undefined || rightChildI !== undefined) {
      let largerI;
      if (this.heap[rightChildI] === undefined || this.heap[leftChildI] > this.heap[rightChildI]) largerI = leftChildI;
      else largerI = rightChildI;
      if (this.heap[parentI] < this.heap[largerI]) {
        this.swapValues(parentI, largerI);
        parentI = largerI;
        [leftChildI, rightChildI] = this.getChildrenIndices(parentI);
      } else return returnValue;
    }
    return returnValue;
  }
  getParentIndex(index) {
    let parentIndex = Math.floor((index - 1) / 2);
    return parentIndex >= 0 ? parentIndex : undefined;
  }
  getChildrenIndices(index) {
    let leftChildI = index * 2 + 1;
    if (leftChildI >= this.heap.length) leftChildI = undefined;
    let rightChildI = index * 2 + 2;
    if (rightChildI >= this.heap.length) rightChildI = undefined;
    return [leftChildI, rightChildI];
  }
  swapValues(index1, index2) {
    let value1 = this.heap[index1];
    this.heap[index1] = this.heap[index2];
    this.heap[index2] = value1;
  }
}

let maxHeap = new MaxBinaryHeap();
maxHeap.insert(1);
maxHeap.insert(4);
maxHeap.insert(5);
maxHeap.insert(9);
maxHeap.insert(1);
maxHeap.insert(1);
maxHeap.insert(0);
maxHeap.removeRoot();

console.log(maxHeap.heap); //[5, 1, 4, 1, 0, 1]