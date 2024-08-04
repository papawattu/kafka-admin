import layout from './layout.js'

const connectionStatus = 'connection-status'
const actionUrl = '/action/connection'
const main = String.raw`
<div class="justify-center max-w-screen-md">
    <div class="flex items-center justify-center max-w-screen-md" hx-get="/connectionForm" hx-swap="outerHTML" hx-trigger="load" hx-target="main"></div>
</div>
`

export default () => layout({ children: main })
