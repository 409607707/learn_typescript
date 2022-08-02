import fs from 'fs'
import { MatchResult } from './MatchResult'
// 定义一个元组
export type MatchData = [Date, string, string, number, number, MatchResult, string]
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
export abstract class CsvFileReader<T> {
  data: T[] = [];
  constructor(private fileName: string) {
  }
  abstract mapRow(row: string[]): T

  read(): void {
    this.data = fs.readFileSync(this.fileName, {
      encoding: 'utf-8'
    })
    .split('\n')
    .map((row: string): string[] => {
      return row.split(',')
    })
    .map(this.mapRow)
  }
}