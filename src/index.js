#!/usr/bin/node
import LinkedList from './linkedList.js';

const linkedList = new LinkedList();

linkedList.append(10);
console.log(linkedList.toString()); // 10 -> null
linkedList.append(11);
linkedList.append(12);
linkedList.prepend(9);
console.log(linkedList.toString()); // 9 -> 10 -> 11 -> 12 -> null
console.log(linkedList.getHead()); // Returns head node.
console.log(linkedList.getTail()); // Node { value: 12, nextNode: null }
console.log(linkedList.at(2)); // Node { value: 11, nextNode: Node { value: 12, nextNode: null } }
console.log(linkedList.at(6)); // null
linkedList.pop();
console.log(linkedList.toString()); // 9 -> 10 -> 11 -> null
console.log(linkedList.contains(10)); // true
console.log(linkedList.contains(15)); // false
console.log(linkedList.find(11)); // 2
console.log(linkedList.find(12)); // null
linkedList.insertAt(5, 1);
console.log(linkedList.toString()); // 9 -> 5 -> 10 -> 11 -> null
linkedList.insertAt(5, 7); // Index 7 is out of bounds.
linkedList.removeAt(2);
console.log(linkedList.toString()); // 9 -> 5 -> 11 -> null
console.log(linkedList.size()); // 3
