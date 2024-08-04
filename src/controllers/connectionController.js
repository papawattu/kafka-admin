import tryConnection from '../actions/tryConnection.js'
import connectedOK from '../fragments/connectedOK.js'
import clusterDetails from '../fragments/clusterDetails.js'
import connectionDetailsForm from '../fragments/connectionDetails.js'

export default (req, res) => {
  const connectionStatus = 'connection-status'
  const actionUrl = '/action/connection'
  const { connectToCluster, describeCluster } = tryConnection(req.body)

  const connectionDetails = {
    host: req.body.host,
    port: req.body.port,
    clientId: req.body.clientId,
  }
  console.log('connectionDetails', JSON.stringify(connectionDetails, null, 2))
  console.log('req.path', req.path)
  switch (req.path) {
    case actionUrl:
      connectToCluster()
        .then((response) => {
          res.send(connectedOK(connectionDetails))
        })
        .catch((error) => {
          console.error('Failed to connect to Kafka:', error)
          res.send(`Failed to connect to Kafka:  ${error}`)
        })
      break
    case '/action/describe':
      describeCluster().then((response) => {
        console.log('response', JSON.stringify(response, null, 2))
        res.send(clusterDetails(response))
      })
      break
    case '/connectionForm':
      res.send(connectionDetailsForm({ actionUrl, connectionStatus }))
      break

    default:
      res.send('Unknown action').status(404)
  }
}
