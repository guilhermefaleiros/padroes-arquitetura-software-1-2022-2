import { ToughSinal } from '@core/entity/tough-sinal'
import { EventBusPort } from '@core/port/event-bus-port'
import { ToughSignalMonitor } from '@core/port/tough-signal-monitor'

export class ToughSinalService {
  constructor(private readonly toughSignalMonitor: ToughSignalMonitor, private readonly eventBus: EventBusPort) {}

  async findByAvatar(avatarId: string): Promise<ToughSinal> {
    const response = await this.toughSignalMonitor.pull(avatarId)
    await this.eventBus.send(response)
    return response
  }
}
