import layout from './layout.js'

const connectionStatus = 'connection-status'
const actionUrl = '/action/connection'
const main = String.raw`
<div class="text-gray-600">
    <div hx-get="/connectionForm" hx-trigger="load" hx-target="main"></div>
</div>
`

export default () => layout({ children: main })
