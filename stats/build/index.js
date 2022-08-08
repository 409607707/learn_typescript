"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const MatchReader_1 = require("./MatchReader");
const Summary_1 = require("./Summary");
// 流程是：加载football.csv文件中的数据，进行解析， 然后进行分析，最后生成报告
// Load --> parse  --> Analyze  --> report
// 第一版
// const matches = fs.readFileSync('football.csv', {
//   encoding: 'utf-8'
// })
// .split('\n')
// .map((row: string): string[] => {
//   return row.split(',')
// })
// 提取获取数据的逻辑，可以让代码更加易于复用
// const reader = new Reader('football.csv')
// reader.read()
// let dateOfFirstMatch = reader.data[0][0]
// console.log(dateOfFirstMatch);
// Create an object that satisfies the 'DataReader' interface
// const csvFileReader = new CsvFileReader('football.csv')
// Create an instance of MatchReader and pass in something satisfying the 'DataReader' interface
// const matchReader = new MatchReader(csvFileReader)
// matchReader.load()
// matchReader.matches
// let manUnitedWins= 0
// for (let match of matchReader.matches) {
/**
 * 问题：其他工程师看到match[5] === 'H'，match[5] === 'A'不能了解到我们正在做什么，所以我们需要找到一种方式
 * 来澄清这两种比较到底代表什么意思
 */
// 检查主队获胜的情况
// if (match[1] === 'Man United' && match[5] === 'H') {
//   manUnitedWins++
// } else if (match[2] === 'Man United' && match[5] === 'A') { // 检查客队获胜的情况
//   manUnitedWins++
// }
/**
 * 这种方式的问题是：我们已经将一些关于我们的数据集的信息放到了我们的代码中
 * 如果其他工程师查看这两个选项，他们可能认为一场比赛的结果是主场获胜或者客场获胜，
 * 而且我们没有说明存在第三种可能性(平局)
 */
// const homeWin = 'H' // 代表主队获取
// const awayWin = 'A' // 代表客队或者
// 虽然声明了第三种情况，但是给其他开发的感觉就是未使用，如果没有被使用，就有可能删除掉，所以这种方式不推荐
// 那么就会再次失去平局的情况
// const draw = 'D' // 代表平局
// if (match[1] === 'Man United' && match[5] === homeWin) {
//   manUnitedWins++
// } else if (match[2] === 'Man United' && match[5] === awayWin) { // 检查客队获胜的情况
//   manUnitedWins++
// }
/**
 * 这种方式可以把平局的情况放入，并且平局永远不会被标记为未使用，其他人都不会进来删除它
 * 问题：在JavaScript中我们使用对象来表示记录或者类似的信息，有时候我们使用对象来存储不同方法或不同属性的
 * 集合，目的不是很清楚
 */
// const MatchResult = {
//   HomeWin: 'H', // 主场赢
//   AwayWin: 'A', // 客场赢
//   Draw: 'D' // 平局
// }
// if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//   manUnitedWins++
// } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) { // 检查客队获胜的情况
//   manUnitedWins++
// }
/**
 * 枚举：枚举是一个存储一些非常密切相关的值得对象，这些值总是数字或字符串
 * 调用方式和普通对象几乎一致
 * 枚举注意点：
 *  1. Follow near-identical syntax rules as normal objects
 *  2. creates an object with the same keys and values when converted from TS to JS
 *  3. Primary goal is to signal to other enginners that these are all closely related values
 *  4. Use whenever we have a small fiexed set of values that are all closely related and known at compile time
 * 我们必须在编写代码的时候列出所有枚举可能存在的选项，不能在运行的过程中给枚举添加选项，同时不能通过网络请求给枚举添加选项，
 * 不需要等待一段时间，通过某找方式查询到所有可能的值
 * 举例说明：
 * primary colors on a color picker ? 可以，因为三原色是事先知道的
 * the set of movie categories on Netflix? 不可以，因为电影种类会随着时间的改变而改变
 * the titles of all blog posts by a particular user ? 不可以， 因为博客的标题可能会改变
 * all years since the year 1750? 不可以，因为从1750到现在年份太多，不适合使用枚举
 *
 */
// enum MatchResult {
//   HomeWin = 'H',// 主场赢
//   AwayWin = 'A', // 客场赢
//   Draw = 'D' // 平局
// }
//   if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
//     manUnitedWins++
//   } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) { // 检查客队获胜的情况
//     manUnitedWins++
//   }
// }
// console.log(manUnitedWins);
// const summary = new Summary(
//   new WinsAnalysis('Man United'),
//   new HtmlReport()
// )
// summary.buildAndPrintReport(matchReader.matches)
const matchReader = MatchReader_1.MatchReader.fromCsv('football.csv');
matchReader.load();
const summary = Summary_1.Summary.winsAnalysisWithHtmlReport('Man United');
summary.buildAndPrintReport(matchReader.matches);
