import Node from './node.js';

class LinkedList {
  constructor() {
    this.head = null;
  }

  // Adds a new node containing -value- to the end of the list.
  append(value) {
    const newNode = new Node(value);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.nextNode !== null) {
        current = current.nextNode; //Or node. next?
      }

      current.nextNode = newNode;
    }
  }

  // Adds a new node containing -value- to the start of the list.
  prepend(value) {
    this.head = new Node(value, this.head);
  }

  // Returns the total number of nodes in the list
  size() {
    let listSize = 0;
    let current = this.head;

    while (current !== null) {
      listSize++;
      current = current.nextNode;
    }
    console.log(listSize);
  }

  // Returns the first node in the list.
  getHead() {
    return this.head;
  }

  // Returns the last node in the list.
  getTail() {
    if (this.head === null) {
      return this.head;
    }

    let current = this.head;
    while (current.nextNode !== null) {
      current = current.nextNode;
    }
    return current;
  }

  // Returns the node at the given index
  at(index) {
    if (index < 0 || this.head === null) {
      return this.head;
    } else {
      let counter = 0;
      let current = this.head;

      while (current !== null && counter < index) {
        current = current.nextNode;
        counter++;
      }

      return current;
    }
  }

  // Removes the last element from the list
  pop() {
    if (this.head === null) {
      return null;
    }

    if (this.head.nextNode === null) {
      this.head = null;
      return;
    }

    let current = this.head;
    let previous = null;

    while (current.nextNode !== null) {
      previous = current;
      current = current.nextNode;
    }
    previous.nextNode = null;
  }

  // Returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {
    if (this.head === null) {
      return false;
    }

    let current = this.head;

    while (current !== null) {
      if (current.value === value) {
        return true;
      }
      current = current.nextNode;
    }

    return false;
  }

  // Returns the index of the node containing value, or null if not found.
  find(value) {
    if (this.head === null) {
      return null;
    }

    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.value === value) {
        return index;
      }
      index++;
      current = current.nextNode;
    }
    return null;
  }

  // Represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {
    if (this.head === null) {
      return 'null';
    }

    let current = this.head;
    let string = '';

    while (current !== null) {
      // console.log(`${current.value} -> `); // Add the node value to a sting seperated by '->'
      string += `${current.value} -> `;
      current = current.nextNode;
    }

    string += 'null';
    return string;
  }
}

export default LinkedList;
