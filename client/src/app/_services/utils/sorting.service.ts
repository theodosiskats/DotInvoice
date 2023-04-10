import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class SortService {

  private merge<T>(leftArray: T[], rightArray: T[], propertyName: keyof T): T[] {
    let resultArray: T[] = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < leftArray.length && rightIndex < rightArray.length) {
      if (leftArray[leftIndex][propertyName] < rightArray[rightIndex][propertyName]) {
        resultArray.push(leftArray[leftIndex]);
        leftIndex++;
      } else {
        resultArray.push(rightArray[rightIndex]);
        rightIndex++;
      }
    }

    return resultArray
      .concat(leftArray.slice(leftIndex))
      .concat(rightArray.slice(rightIndex));
  }

  mergeSort<T>(array: T[], propertyName: keyof T): T[] {
    if (array.length <= 1) {
      return array;
    }

    const middleIndex = Math.floor(array.length / 2);
    const leftArray = array.slice(0, middleIndex);
    const rightArray = array.slice(middleIndex);

    return this.merge(this.mergeSort(leftArray, propertyName), this.mergeSort(rightArray, propertyName), propertyName);
  }
}
