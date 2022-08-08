import fs from 'fs'

/**
 * 定义该类的原因：
 * 1. 我们希望可以重用代码
 * 2. 我们可以在将来使用它来读取信息，我们也希望可以读取不同类型的文件
 */
export class CsvFileReader {
  data: string[][] = []; // 由于目前使用了MatchData数据类型，所以该类现在不适合重用，因为只有football.csv类型的数据才满足MatchData类型
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
  }
}