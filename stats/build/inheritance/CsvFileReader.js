"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CsvFileReader = void 0;
const fs_1 = __importDefault(require("fs"));
/**
 * 定义该类的原因：
 * 1. 我们希望可以重用代码
 * 2. 我们可以在将来使用它来读取信息，我们也希望可以读取不同类型的文件
 */
/**
 * 泛型：
 * 1. Like function arguments, but for types in class/function definitions
 * 2. Allows us to define the type of a property/argument/return value at a future point
 * 3. Used heavily when writing reusable code
 */
class CsvFileReader {
    constructor(fileName) {
        this.fileName = fileName;
        this.data = [];
    }
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        })
            .map(this.mapRow);
    }
}
exports.CsvFileReader = CsvFileReader;
