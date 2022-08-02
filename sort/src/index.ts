import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection'
import { CharacterCollection } from './CharactersCollection'
import { LinkedList } from './LinkedList'

const collection = new NumbersCollection([10, 50, -5, 0])
// const sorter = new Sorter(collection)
collection.sort()
console.log('--NumbersCollection--', collection.data)
const characters = new CharacterCollection('Xaayb')
// const characterSorter = new Sorter(characters)
characters.sort()
console.log('--characterSorter--', characters.data);
const linkedList = new LinkedList()
linkedList.add(10)
linkedList.add(-5)
linkedList.add(0)
linkedList.add(-10)
linkedList.add(2)
// const sorter = new Sorter(linkedList)
linkedList.sort()
linkedList.print()

