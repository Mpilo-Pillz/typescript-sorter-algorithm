import { Sorter } from './Sorter';
export class NumbersCollection extends Sorter{
    constructor(public data: number[]) {
        super();
    }

    //adding a getter or accessor to change the method call into a property call
    get length(): number {
        return this.data.length;
    }

    compare(leftIndex: number, rightIndex: number): boolean {
        return this.data[leftIndex] > this.data[rightIndex];
    }

    swap(leftIndex: number, rightIndex: number): void {
        const leftHand = this.data[leftIndex];
        this.data[leftIndex] = this.data[rightIndex];
        this.data[rightIndex] = leftHand
    }
}