// Importing HTTP Module
const http = require("http");

// Creating HTTP Server
const server = http.createServer((req, res) => {
  // Setting Status Code and Headers
  res.writeHead(200, {
    "Content-Type": "text/plain",
    "Server": "node.js"
  });

  // Sending Response
  res.end("Hello, World!");
});

// Defining Port Number
const PORT = 3007;

// Starting Server
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
