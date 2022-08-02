import fs from 'fs'
import { dateStringToDate } from './utils'
import { MatchResult } from './MatchResult'
// 定义一个元组
type MatchData = [Date, string, string, number, number, MatchResult, string]
/**
 * 定义该类的原因：
 * 1. 我们希望可以重用代码
 * 2. 我们可以在将来使用它来读取信息，我们也希望可以读取不同类型的文件
 */
export class CsvFileReader {
  data: MatchData[] = []; // 由于目前使用了MatchData数据类型，所以该类现在不适合重用，因为只有football.csv类型的数据才满足MatchData类型
  // 如果将来我们的csv文件结构发生变化，我们将不得不打开该类进行修改
  constructor(private fileName: string) {
  }

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    // .map((row: string[]): (number | string | Date | MatchResult)[] => { // 这种方式并不好，我们需要使用到类型保护
    .map((row: string[]): MatchData => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        /*
          In Typescript, Type assertion is a technique that informs(通知) the compiler about the type of a variable. Type assertion is similar to typecasting but it doesn’t reconstruct code. You can use type assertion to specify a value’s type and tell the compiler not to deduce(推断) it. When we want to change a variable from one type to another such as any to number etc, we use Type assertion
        */
        // 类型断言：Type assertion is where you and I as the development are trying to override
        // typescript default behavior or kind of tell typescript that hey we know what is going
        // on here,
        // 这里目前typescript只知道row[5]是一个字符串，所以我们需要使用类型断言覆盖掉原来的默认行为字符串，
        // 并且告诉typescript相信我们开发人员，这里到底发生了什么
        row[5] as MatchResult, // 告诉Typescript，这个字符串将成为MatchResult中匹配的一个值
        row[6]
      ]
      // return row.map((item: string, index: number): (Date | string) => {
      //   if (index === 0) {
      //     return dateStringToDate(item)
      //   }
      //   return item
      // })
    })
  }
}