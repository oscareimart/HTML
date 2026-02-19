import { readFile } from "fs/promises";

const data = await readFile("file.txt", "utf-8");
console.log(data);

import http from "http";

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ status: 200 }));
});

server.listen(3000);

import EventEmitter from "events";
const emisor = new EventEmitter();

emisor.on("saludo", (nombre) => {
  console.log(`Hola ${nombre} `);
});

emisor.emit("saludo", "Oscar");
