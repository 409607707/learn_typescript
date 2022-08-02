import { NumbersCollection } from "./NumbersCollection"
interface Sortable {
  length: number;
  compare(leftIndex: number, rightIndex: number): boolean;
  swap(leftIndex: number, rightIndex: number): void
}
/**
 * 该类用于收集一些数据并对其中的所有元素进行排序
 * 同时，我们不希望该类被实例化
 */
 export abstract class Sorter {
  // constructor(public collection: number[] | string) {//使用接口重构前 collection用于保存需要进行排序的数据
  //   this.collection = collection
  // }
  // constructor(public collection: Sortable) {
  // }
  /**
   * 当调用该方法时，我们将对collection数组进行排序
   * 字符串和数组都可以通过索引来访问指定位置的值，但是通过索引修改字符串指定位置的值是不行的
   * 因为字符串是不可变字符序列，所以数组的交换逻辑不适用字符串
   */

  // 这三个抽象方法就是为了告诉typescript，我们承诺，当子类继承后，子类最终会实现
  abstract length: number;
  abstract compare(leftIndex: number, rightIndex: number): boolean;
  abstract swap(leftIndex: number, rightIndex: number): void
  sort(): void {
    // const { length } = this.collection
    const { length } = this
    // 这种排序算法不适合字符串，
    // 有两个问题：
      // 不能通过索引对字符串中相邻元素进行交换位置，
      // "X" > "a" 为false  因为'x'.charCodeAt(0) = 88， 'a'.charCodeAt(0) == 97，没有得到我们想要的结果
      // 所以需要重新设计算法
      // 只适合数字数组
    // for(let i = 0; i < length; i++) {
    //   for(let j = 0; j < length - i - 1; j++) {
    //     if (this.collection[j] > this.collection[j + 1]) {
    //       const leftHand = this.collection[j]
    //       this.collection[j] = this.collection[j + 1]
    //       this.collection[j + 1] = leftHand
    //     }
    //   }
    // }
    // 一种不好的方式解决上诉问题：这种方式不好的原因是：如果我们想要添加对排序其他类型数据集合的支持，
    // 我们需要添加很多的if条件块
    // for(let i = 0; i < length; i++) {
    //   for(let j = 0; j < length - i - 1; j++) {
    //     // 如果collection是一个数字数组
    //     if (this.collection instanceof Array) {
    //       if (this.collection[j] > this.collection[j + 1]) {
    //         const leftHand = this.collection[j]
    //         this.collection[j] = this.collection[j + 1]
    //         this.collection[j + 1] = leftHand
    //       }
    //     }
    //     // 如果collection是一个字符串
    //     if (typeof this.collection === 'string') {
          
    //     }
    //   }
    // }
    // 好的方式
    for(let i = 0; i < length; i++) {
      for(let j = 0; j < length - i - 1; j++) {
        // if (this.collection.compare(j, j + 1)) {
        //   this.collection.swap(j, j + 1)
        // }
        if (this.compare(j, j + 1)) {
          this.swap(j, j + 1)
        }
      }
    }
  }
}