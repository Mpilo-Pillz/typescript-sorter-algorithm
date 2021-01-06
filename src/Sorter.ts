import { NumbersCollection } from './NumbersCollection';
//define an interface that describes what ckasses will need if they want to be eligable for sorting


export class Sorter {
    constructor(public collection: NumbersCollection ) { }
 
    sort(): void {
     //    const length = this.collection.length
     const { length } = this.collection;
 
     for (let i = 0; i < length; i++) {
         for (let j = 0; j < length - i - 1; j++) {
            if (this.collection.compare(j, j + 1)) {
                    this.collection.swap(j, j + 1)
             }
         }
     }
    }
 }