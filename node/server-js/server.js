import http from "http";

const server = http.createServer((req, res) => {
  if (req.url === "/" && req.method === "GET") {
    res.end("Inicio");
  } else if (req.url === "/users" && req.method === "GET") {
    res.end("Usuarios");
  } else {
    res.statusCode = 404;
    res.end("No encontrado");
  }
});

server.listen(3000);
