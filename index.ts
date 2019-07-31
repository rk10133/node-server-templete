const http = require("http");
const port = 7000;

const server = http.createServer((req, res) => {
  res.end("hello world");
});

server.listen(port, error => {
  console.log(`http://localhost:${port}`);
});
