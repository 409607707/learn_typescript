"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
/**
 * 线性链表由Node构成，每个Node由value和next组成
 */
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    /**
     * 我们需要考虑两件事：
     * 1. head是空， 那么新创建的节点Node属性赋值给head
     * 2. head不为空的时候，我们需要找到最后一个节点Node，并将新添加的节点赋值给它
     * @param data
     */
    add(data) {
        const node = new Node(data);
        if (!this.head) {
            this.head = node;
            return;
        }
        // 指向对第一个节点的引用
        let tail = this.head;
        // 通过循环查找出最后一个节点Node，因为到了链中最后一个元素的时候，next就是null，循环就会停止
        while (tail.next) {
            tail = tail.next;
        }
        // 循环结束代表着找到了最后一个节点，给最后一个节点的next属性赋值为新创建的节点
        tail.next = node;
    }
    /**
     * 获取LinkList链表的长度
     */
    get length() {
        if (!this.head) {
            return 0;
        }
        let length = 1;
        // 对第一个节点进行引用
        let node = this.head;
        while (node.next) {
            length++;
            node = node.next;
        }
        return length;
    }
    /**
     * 返回指定位置处的节点
     * @param index
     * @returns
     */
    at(index) {
        // 当链表为空的时候来拿指定位置的节点，这时候抛出异常
        if (!this.head) {
            throw new Error('Index out of bounds');
        }
        // 我们想从第一个节点的索引为零开始计数
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error('Index out of bounds');
    }
    compare(leftIndex, rightIndex) {
        if (!this.head) {
            throw new Error('List is empty');
        }
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    swap(leftIndex, rightIndex) {
        // 交换两个节点是非常复杂的，因为你需要破坏不同节点之间的引用关系，所以我们只交换两个节点对应的值
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    print() {
        if (!this.head) {
            return;
        }
        let node = this.head;
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
