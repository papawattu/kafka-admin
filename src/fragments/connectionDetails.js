const host = process.env.BROKER_HOST || 'localhost'
const port = process.env.BROKER_PORT || '9092'

export default ({ actionUrl, connectionStatus }) => String.raw`
<div class="bg-gray-200 text-gray-800 font-bold rounded-lg border-2 border-gray-600 shadow-xl p-10 ml-44 mr-44" id="main">
    <h3>Kafka Connection Details</h3>
    <form hx-post="${actionUrl}" hx-target="#main" hx-disabled-elt="#connectBtn">
        <div>
            <label for="broker">Broker Hosts:</label>
            <span class="text-black p-1 m-2 border border-gray-800 rounded-sm font-normal shadow-lg"><input  type="text" id="host" name="host" value="${host}" required></span>
            <label for="port">Port:</label>
            <input type="text" id="port" name="port" value="${port}" required>
            
            <!-- Add more input fields for other connection details if needed -->
            
            <button id="connectBtn" type="submit" class="bg-blue-500 hover:bg-blue-700 disabled:opacity-75 text-white text-sm font-bold px-2 py-2 m-2 border border-blue-700 rounded">
                Connect
            </button>
            <div class="htmx-indicator">
                <p class="transition-opacity opacity-100 duration-300">Trying to connect to kafka host <img src="images/oval.svg"/></p>
            </div>
        </div>
    </form>
    <div id="message"></div>
</div>
`
