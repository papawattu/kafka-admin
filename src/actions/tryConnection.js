import kafkaService from '../services/kafkaService.js'

export default (connectionDetails) => {
  const { connect, describeCluster } = kafkaService(connectionDetails)
  return {
    connectToCluster: () =>
      connect()
        .then((response) => {
          return Promise.resolve('Connected to Kafka')
        })
        .catch((error) => {
          console.error('Failed to connect to Kafka:', error)
          return Promise.reject(`Failed to connect to Kafka:  ${error}`)
        }),

    describeCluster,
  }
}
