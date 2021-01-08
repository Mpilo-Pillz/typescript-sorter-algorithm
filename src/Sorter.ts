//define an interface that describes what ckasses will need if they want to be eligable for sorting
// interface Sortable {
//     length: number;
//     compare(leftIndex: number, rightIndex: number): boolean;
//     swap(leftIndex: number, rightIndex: number): void;
// }

export abstract class Sorter {
    abstract compare(leftIndex: number, rightIndex: number): boolean;
    abstract swap(leftNode: number, rightIndex: number): void;
    abstract length: number;
    
    sort(): void {
     //    const length = this.collection.length
     const { length } = this;
 
     for (let i = 0; i < length; i++) {
         for (let j = 0; j < length - i - 1; j++) {
            if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1)
             }
         }
     }
    }
 }