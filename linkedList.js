class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  addFirstNode(data) {
    this.head = new Node(data, this.head);
    this.length++;
  }

  addLastNode(data) {
    const node = new Node(data);
    let currentNode;

    if (!this.head) {
      this.head = node;
    } else {
      currentNode = this.head;

      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      currentNode.next = node;
      this.length++;
    }
  }

  addWithIndex(data, index) {
    if (index > 0 && index > this.length) {
      return null;
    }

    if (index === 0) {
      return this.addFirstNode(data);
    }

    const node = new Node(data);
    let currentNode;
    let previousNode;

    currentNode = this.head;
    let count = 0;

    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    previousNode.next = node;
    node.next = currentNode;
    this.length++;
  }

  getWithIndex(index) {
    let current = this.head;
    let count = 0;

    while (current) {
      if (count === index) {
        return current.data;
      }
      current = current.next;
      count++;
    }

    return null;
  }

  removeWithIndex(index) {
    if (index < 0 || index > this.length) {
      return null;
    }

    let currentNode = this.head;
    let count = 0;
    let previousNode;

    if (index === 0) {
      return (this.head = currentNode.next);
    }

    while (count < index) {
      previousNode = currentNode;
      currentNode = currentNode.next;
      count++;
    }

    previousNode.next = currentNode.next;

    this.length--;
  }

  reverseLinkedList() {
    if (this.head === null) return;

    let currentNode = this.head;
    let previousNode = null;

    while (currentNode) {
      let nextNode = currentNode.next;
      currentNode.next = previousNode;
      previousNode = currentNode;
      currentNode = nextNode;
    }
    this.head = previousNode;
    return this.head;
  }

  clearAllList() {
    delete this.head;
    this.length = 0;
    console.log(this);
  }

  logListData() {
    if (!this.head) {
      console.log('0 elements in Linked List');
      return;
    }
    let currentNode = this.head;

    while (currentNode) {
      console.log(currentNode.data);
      currentNode = currentNode.next;
    }
  }

  randomNodeGenerator(nodesCount) {
    for (let i = 0; i < nodesCount; i++) {
      const randomNumber = Math.ceil(Math.random() * 100);
      this.addFirstNode(randomNumber);
    }
  }

  countLengthWithDoubleLink() {
    let current = this.head;
    let iterCount = 0;
    let lengthOfLinkedList = 1;

    if (!current) {
      return 'the linked list is empty';
    }
    while (current.next) {
      if (current.next?.next) {
        current = current.next.next;
        lengthOfLinkedList += 2;
      } else {
        lengthOfLinkedList += 1;
        current = current.next;
      }

      iterCount++;
    }

    console.log(iterCount, 'iteration count');
    console.log(lengthOfLinkedList, 'length of linked list');
  }
}
const linkedList = new LinkedList();
// linkedList.addFirstNode(100);
// linkedList.addLastNode(300);
// linkedList.addLastNode(500);
// linkedList.addLastNode(800);
// linkedList.addLastNode(1100);
// linkedList.addWithIndex(777, 2);
// linkedList.reverseLinkedList();
// linkedList.removeWithIndex(3);
// linkedList.getWithIndex(3);
// linkedList.clearAllList();
linkedList.randomNodeGenerator(15);
linkedList.logListData();
linkedList.countLengthWithDoubleLink();
