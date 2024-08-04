export default ({ host, port, clientId }) => String.raw`
<div>
    <h3>Connected to Kafka</h3>
    <div hx-get="/action/describe" hx-trigger="load" hx-target="#main">

</div>
`
