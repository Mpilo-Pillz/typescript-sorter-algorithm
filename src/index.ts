import { Sorter } from './Sorter'
import { NumbersCollection } from './NumbersCollection';
import { CharactersCollection } from './CharactersCollection';
import { LinkedList } from './LinkedList';

const numbersCollection = new NumbersCollection([10, 3, -5, 0])
numbersCollection.sort();
console.log(numbersCollection);

// const numbersSorter = new Sorter(numbersCollection);
// numbersSorter.sort();
console.log(numbersCollection.data);

const charactersCollection = new CharactersCollection('Xaayb');
charactersCollection.sort();

// const charactersSorter = new Sorter(charactersCollection);
// charactersSorter.sort();
console.log(charactersCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(-3);
linkedList.add(4);
linkedList.sort()

// const linkedListSorter = new Sorter(linkedList);
// linkedListSorter.sort();
linkedList.print();

