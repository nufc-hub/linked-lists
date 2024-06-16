import Node from './node.js';

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Adds a new node containing -value- to the end of the list.
  append(value) {}

  // Adds a new node containing -value- to the start of the list.
  prepend(value) {}

  // Returns the total number of nodes in the list
  size() {}

  // Returns the first node in the list.
  head() {}

  // Returns the last node in the list.
  tail() {}

  // Returns the node at the given index
  at(index) {}

  // Removes the last element from the list
  pop() {}

  // Returns true if the passed in value is in the list and otherwise returns false.
  contains(value) {}

  // Returns the index of the node containing value, or null if not found.
  find(value) {}

  // Represents your LinkedList objects as strings, so you can print them out and preview them in the console. The format should be: ( value ) -> ( value ) -> ( value ) -> null
  toString() {}
}

export default LinkedList;
