const host = process.env.BROKER_HOST || 'localhost'
const port = process.env.BROKER_PORT || '9092'

export default ({ actionUrl, connectionStatus }) => String.raw`
<div class="bg-blue-800 text-white font-bold rounded-lg border shadow-lg p-10" id="main">
    <h3>Kafka Connection Details</h3>
    <form hx-post="${actionUrl}" hx-target="#main" hx-disabled-elt="#connectBtn">
        <div class="space-y-4">
            <label for="broker">Broker Hosts:</label>
            <input class="text-black" type="text" id="host" name="host" value="${host}" required>
            <label for="port">Port:</label>
            <input class="text-black" type="text" id="port" name="port" value="${port}" required>
            
            <!-- Add more input fields for other connection details if needed -->
            
            <button id="connectBtn" type="submit" class="bg-blue-500 hover:bg-blue-700 disabled:opacity-75 text-white font-bold py-2 px-4 border border-blue-700 rounded">
                Connect
            </button>
            <p class="htmx-indicator">Trying to connect to kafka host <img src="images/oval.svg"/></p>
        </div>
    </form>
    <div id="message"></div>
</div>
`
