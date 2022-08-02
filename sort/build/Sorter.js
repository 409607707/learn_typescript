"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sorter = void 0;
/**
 * 该类用于收集一些数据并对其中的所有元素进行排序
 * 同时，我们不希望该类被实例化
 */
class Sorter {
    sort() {
        // const { length } = this.collection
        const { length } = this;
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
        for (let i = 0; i < length; i++) {
            for (let j = 0; j < length - i - 1; j++) {
                // if (this.collection.compare(j, j + 1)) {
                //   this.collection.swap(j, j + 1)
                // }
                if (this.compare(j, j + 1)) {
                    this.swap(j, j + 1);
                }
            }
        }
    }
}
exports.Sorter = Sorter;
