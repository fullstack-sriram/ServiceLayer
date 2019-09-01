const http = require("http");
const logic = require(".//modules//logic");

var server = http.createServer((req, res) => {
  var pathName = req.url;
  res.writeHead(200, { "Content-type": "application/json" });
  logic(pathName, res);
});

server.listen(8080, "127.0.0.1", () => {
  console.log("Server started and waiting for requests....");
});
