import { VirtualToughSignalMonitor } from '@adapter/monitor/virtual-tough-signal-monitor'
import { PostgresAvatarRepository } from '@adapter/database/repository/postgres-avatar-repository'
import { AvatarService } from '@core/service/avatar-service'
import { ToughSinalService } from '@core/service/tough-sinal-service'
import { Request, Response, Router } from 'express'
import { KafkaEventBusAdapter } from '@adapter/kafka/kafka-event-bus-adapter'

const eventBusAdapter = new KafkaEventBusAdapter()
const avatarRepository = new PostgresAvatarRepository()
const toughSignalMonitor = new VirtualToughSignalMonitor()
const avatarService = new AvatarService(avatarRepository)
const toughSignalService = new ToughSinalService(toughSignalMonitor, eventBusAdapter)

export const createRouter = () => {
  const router = Router()

  router.get('/v1/avatar/:id', async (req: Request, res: Response) => {
    const avatar = await avatarService.findById(req.params.id as any)
    return res.status(200).json(avatar)
  })

  router.get('/v1/avatar/:id/tough-sinal', async (req: Request, res: Response) => {
    const avatar = await toughSignalService.findByAvatar(req.params.id)
    return res.status(200).json(avatar)
  })

  return router
}
