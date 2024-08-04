export default ({ children, title = 'Kafka App' }) => String.raw`
  <!DOCTYPE html>
  <html>
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.10.2/css/all.css">
    <!--  <link href="https://unpkg.com/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"> -->
      <link rel="stylesheet" href="dist/tailwind.css">
      <title>${title}</title>
      <script
        src="https://unpkg.com/htmx.org@2.0.1/dist/htmx.js"
        integrity="sha384-gpIh5aLQ0qmX8kZdyhsd6jA24uKLkqIr1WAGtantR4KsS97l/NRBvh8/8OYGThAf"
        crossorigin="anonymous"
      ></script>
    </head>
    <body>
      <header class="text-center text-black text-lg">
        <h1>Kafka App</h1>
      </header>
      <main class="max-w-screen-md">${children}</main>
    </body>
  </html>
`
