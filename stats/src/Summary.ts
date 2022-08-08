/**
 * Remember other objects inside of typescript can implicitly satisfy an interface.
 * In this case remember we can optionally use an interface definition to help us
 */

import { MatchData } from "./MatchData";
import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { HtmlReport } from "./reportTargets/HtmlReport";
import { ConsoleReport } from "./reportTargets/ConsoleReport";

export interface Analyzer {
  run(matches: MatchData[]): string
}

export interface OutputTarget {
  print(report: string): void
}

export class Summary {
  static winsAnalysisWithHtmlReport(team: string): Summary {
    return new Summary(
      new WinsAnalysis(team),
      // new HtmlReport()
      new ConsoleReport()
    )
  }
  constructor(public analyzer: Analyzer, public outputTarget: OutputTarget) {
  }

  buildAndPrintReport(matches: MatchData[]): void {
    const output = this.analyzer.run(matches)
    this.outputTarget.print(output)
  }
}