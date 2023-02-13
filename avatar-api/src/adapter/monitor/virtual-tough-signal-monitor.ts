import { ToughSinal } from '@core/entity/tough-sinal'
import { ToughSignalMonitor } from '@core/port/tough-signal-monitor'

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export class VirtualToughSignalMonitor implements ToughSignalMonitor {
  constructor() {}

  async pull(avatarId: string): Promise<ToughSinal> {
    const toughSignal = new ToughSinal(
      randomIntFromInterval(60, 100),
      randomIntFromInterval(12, 20),
      `${randomIntFromInterval(120, 130)}/${randomIntFromInterval(80, 90)}`,
      randomIntFromInterval(36, 38),
    )
    return Promise.resolve(toughSignal)
  }
}
