import { MatchData } from '../MatchData'
import { Analyzer } from '../Summary'
import { MatchReader } from '../MatchReader'
import { MatchResult } from '../MatchResult'
export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}
  run(matches: MatchData[]): string {
    let wins = 0
    for (let match of matches) {
      if (match[1] === 'Man United' && match[5] === MatchResult.HomeWin) {
        wins++
      } else if (match[2] === 'Man United' && match[5] === MatchResult.AwayWin) { // 检查客队获胜的情况
        wins++
      }
    }
    return `Team ${this.team} won ${wins} games`
  }
}