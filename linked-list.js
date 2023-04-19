/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
};

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  };

  /** push(val): add new value to end of list. */

  push(val) {
    let node = new Node(val);

    // empty lisked list
    if(this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    };
    // tail node now points to new node
    this.tail.next = node;
    // new node is now the tail
    this.tail = node;

    this.length++;
  };

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);
    // node next value points to the head
    node.next = this.head;
    // new head is assigned to new node
    this.head = node;
    this.length++;
  };

  /** pop(): return & remove last item. */

  pop() {
    let popped = null;
    let currentNode = null;

    // nothing in Linked List
    if (this.length === 0 && this.head === null) throw new Error('Empty Linked List');

    // only one node in the Linked List 
    if (this.length === 1 && this.head.next === null) {
      popped = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return popped;
    }
    // starting point
    currentNode = this.head;
    // traverse Linked List until we find the tail
    while(currentNode.next !== this.tail) {
      currentNode = currentNode.next;
    };

    // popped node that should be returned and removed
    popped = currentNode.next;

    // current node is now the tail node
    this.tail = currentNode;
    // set tails next pointer to null
    this.tail.next = null;
    // one less node in Linked List
    this.length--;
    // return the popped node;
    return popped;
  };

  /** shift(): return & remove first item. */

  shift() {
    let currentNode = this.head;
    // nothing in Linked List
    if (this.head === null || this.length === 0 ) throw new Error('Empty Linked List');
    // only one item in Linked List
    if (this.head && this.length === 1) {
      this.head = null;
      this.tail = null
      this.length--;
      return currentNode;
    };
    // heads next node is now the new head
    this.head = this.head.next;
    // subtract length by one
    this.length--;
    // set currentNode next pointer to null
    currentNode.next = null;

    return currentNode;
  };

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    let currentNode = this.head;
    // treat index as an array
    if (idx >= this.length || idx < 0) throw new Error('Out of range index');
    if (typeof idx !== 'number') throw new Error('Index must be a number');

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  };

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    // treat index as an array
    if (idx >= this.length || idx < 0) throw new Error('Out of range index');
    if (typeof idx !== 'number') throw new Error('Index must be a number');

    for (let i = 0; i < idx; i++) {
      currentNode = currentNode.next;
    }
    currentNode.val = val;
  };

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {

  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

var ll = new LinkedList(['test','second test', 'play', 'study', 'enjoy', 'success']);
// module.exports = LinkedList;
