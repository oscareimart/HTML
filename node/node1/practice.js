import { readFile } from "fs/promises";
import http from "http";
import os from "os";

const myService = async () => {
  const json = await readFile("data.json", "utf-8");
  const dataParsed = JSON.parse(json);
  const dateCurrent = new Date().toLocaleString();

  return {
    dataServerDate: `Hora del Servidor: ${dateCurrent}`,
    dataServerHostname: os.hostname(),
    data: dataParsed,
  };
};

const server = http.createServer(async (req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  const response = await myService();

  res.end(JSON.stringify({ status: 200, response }));
});

console.log("Escuchando en puerto 3000 \n");

server.listen(3000);
