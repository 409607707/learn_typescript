"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const NumbersCollection_1 = require("./NumbersCollection");
const CharactersCollection_1 = require("./CharactersCollection");
const LinkedList_1 = require("./LinkedList");
const collection = new NumbersCollection_1.NumbersCollection([10, 50, -5, 0]);
// const sorter = new Sorter(collection)
collection.sort();
console.log('--NumbersCollection--', collection.data);
const characters = new CharactersCollection_1.CharacterCollection('Xaayb');
// const characterSorter = new Sorter(characters)
characters.sort();
console.log('--characterSorter--', characters.data);
const linkedList = new LinkedList_1.LinkedList();
linkedList.add(10);
linkedList.add(-5);
linkedList.add(0);
linkedList.add(-10);
linkedList.add(2);
// const sorter = new Sorter(linkedList)
linkedList.sort();
linkedList.print();
