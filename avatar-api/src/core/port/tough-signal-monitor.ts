import { ToughSinal } from '@core/entity/tough-sinal'

export interface ToughSignalMonitor {
  pull(avatarId: string): Promise<ToughSinal>
}
