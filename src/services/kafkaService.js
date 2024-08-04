import { Kafka } from 'kafkajs'

const ConnectionState = {
  CONNECTED: 'CONNECTED',
  DISCONNECTED: 'DISCONNECTED',
}

let kafka = null
let state = ConnectionState.DISCONNECTED

export default function ({ host, port, clientId }) {
  return {
    connect: async function () {
      kafka = new Kafka({
        clientId: clientId,
        brokers: [`${host}:${port}`],
      })

      const admin = kafka.admin()

      return admin
        .connect()
        .then(() => {
          state = ConnectionState.CONNECTED
          return Promise.resolve('Connected to Kafka')
        })
        .catch((error) => {
          state = ConnectionState.DISCONNECTED
          return Promise.reject(`Failed to connect to Kafka:  ${error}`)
        })
    },
    describeCluster: async function () {
      if (state === ConnectionState.DISCONNECTED) {
        return Promise.reject('Not connected to Kafka, please connect first')
      }
      if (kafka === null) {
        console.error('Kafka instance is not initialized')
        return Promise.reject('Kafka instance is not initialized')
      }
      const admin = kafka.admin()

      return admin.describeCluster()
    },
  }
}
