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
class CsvFileReader {
    // 如果将来我们的csv文件结构发生变化，我们将不得不打开该类进行修改
    constructor(fileName) {
        this.fileName = fileName;
        this.data = []; // 由于目前使用了MatchData数据类型，所以该类现在不适合重用，因为只有football.csv类型的数据才满足MatchData类型
    }
    read() {
        this.data = fs_1.default.readFileSync(this.fileName, {
            encoding: 'utf-8'
        })
            .split('\n')
            .map((row) => {
            return row.split(',');
        });
        // .map((row: string[]): (number | string | Date | MatchResult)[] => { // 这种方式并不好，我们需要使用到类型保护
    }
}
exports.CsvFileReader = CsvFileReader;
