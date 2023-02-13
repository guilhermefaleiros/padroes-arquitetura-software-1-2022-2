import { EventBusPort } from '@core/port/event-bus-port'

import { Kafka, Producer } from 'kafkajs'

export class KafkaEventBusAdapter implements EventBusPort {
  private readonly producer: Producer

  constructor() {
    this.producer = new Kafka({
      clientId: 'avatar-api',
      brokers: ['pkc-n00kk.us-east-1.aws.confluent.cloud:9092'],
      ssl: true,
      sasl: {
        mechanism: 'plain',
        username: 'VSYUFX6K7U4RTHRW',
        password: 'kJ06gOvx52Tv9Dmx1IIHi+4hmU1+bpvoP82G7tewrHrkobv0wIonf8un1o82+B5Z',
      },
    }).producer()
  }

  async send(event: any) {
    await this.producer.connect()
    await this.producer.send({
      topic: 'tough-sinal-event',
      messages: [
        {
          value: JSON.stringify(event),
        },
      ],
    })
    console.log(`Event sent to tough-sinal-event topic: ${JSON.stringify(event)}`)
  }
}
