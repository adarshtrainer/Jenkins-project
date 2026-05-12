const http = require("http");

const PORT = 3000;

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(`
    <h1>Jenkins Node.js Demo</h1>
    <p>Build completed successfully from Jenkins Freestyle Job!</p>
    <p>Application is running on port ${PORT}</p>
  `);
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
