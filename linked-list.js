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

    // empty Linked List
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
    // increment length by one
    this.length++;
  };

  /** unshift(val): add new value to start of list. */

  unshift(val) {
    let node = new Node(val);

    // empty Linked List
    if(this.head === null) {
      this.head = node;
      this.tail = node;
      this.length++;
      return;
    }
    // node next value points to the head
    node.next = this.head;
    // new head is assigned to new node
    this.head = node;
    // increment length by one
    this.length++;
  };

  /** pop(): return & remove last item. */

  pop() {
    let popped = null;
    let currentNode = this.head;

    // nothing in Linked List
    if (this.length === 0 && this.head === null) throw new Error('Empty Linked List');

    // only one node in the Linked List 
    if (this.length === 1 && this.head.next === null) {
      popped = this.head;
      this.head = null;
      this.tail = null;
      this.length--;
      return popped.val;
    }
    
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
    // decrement length by one
    this.length--;
    // return the popped node;
    return popped.val;
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
      return currentNode.val;
    };
    // heads next node is now the new head
    this.head = this.head.next;
    // decrement length by one;
    this.length--;
    // set currentNode next pointer to null
    currentNode.next = null;

    return currentNode.val;
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
    return currentNode.val;
  };

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    let currentNode = this.head;
    // treat index as an array
    if (idx >= this.length || idx < 0) throw new Error('Out of range index');
    if (typeof idx !== 'number') throw new Error('Index must be a number');

    for (let i = 0; i < idx; ++i) {
      currentNode = currentNode.next;
    }
    let popped = currentNode;

    currentNode.val = val;
  };

  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    let currentNode = this.head;
    
    if (idx > this.length || idx < 0) throw new Error('Out of range index');
    if (typeof idx !== 'number') throw new Error('Index must be a number');
    
    // no need to traverse if its first or last index O(1)
    if (idx === 0) return this.unshift(val); // its at the head
    if (idx === this.length && idx !== 0) return this.push(val); // its at the tail

    // O(n)
    for (let i = 1; i < idx; i++) {
      currentNode = currentNode.next;
    };
    // create new node to insert 
    let node = new Node(val);
    node.next = currentNode.next; // new node points to current nodes next node
    currentNode.next = node; // current node points to new node
    this.length++; // increment length
  };

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    let currentNode = this.head;
    // treat index as an array
    if (idx >= this.length || idx < 0) throw new Error('Out of range index');
    if (typeof idx !== 'number') throw new Error('Index must be a number');

    // O(1) if at first node and last node
    if (idx === 0) return this.shift();
    if (idx === this.length - 1) return this.pop();

    for (let i = 0; i < idx - 1; i++) {
      currentNode = currentNode.next;
    }
    let popped = currentNode.next;
    currentNode.next = popped.next;
    this.length--;
    return popped.val;
  }

  /** average(): return an average of all values in the list */

  average() {
    
  }
}

// var ll = new LinkedList(['one','two', 'three', 'four', 'five', 'six']);
module.exports = LinkedList;
