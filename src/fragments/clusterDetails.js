export default ({ brokers, controller, clusterId }) => String.raw`
<div>
    <h3>Cluster Details</h3>
    <p>Cluster ID: ${clusterId}</p>
    <p>Controller: ${controller}</p>
    <ul>
    ${brokers
      .map(
        (broker) =>
          String.raw`<li>Node Id: ${broker.nodeId} Host ${broker.host}:${broker.port}</li>`
      )
      .join('')}
    </ul>
</div>
`
