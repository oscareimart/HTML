import http from "http";
import { readFile } from "fs/promises";
import os from "os";

const dotEnv = JSON.parse(await readFile("envs.json", "utf-8"));

const serviceGet = async (country) => {
  const { APP_SECRET = "MI_LLAVE_SECRETA" } = dotEnv;
  const { URL_BACKEND = "https://restcountries.com" } = dotEnv;

  const urlService = `${URL_BACKEND}/v3.1/name${country}`;

  const res = await fetch(urlService);

  if (res.status === 404) return { data: "Sin Datos en la base" };

  const data = await res.json();

  return {
    countryData: {
      name: data[0]?.name.common,
      capital: data[0]?.capital,
      region: data[0]?.region,
      geolocation: data[0]?.latlng,
      timezones: data[0]?.timezones,
    },
    dateServer: new Date().toLocaleString(),
    hostname: os.hostname(),
    APP_SECRET,
  };
};

const server = http.createServer(async (req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "application/json" });

    if (req.method !== "GET")
      res.end(
        JSON.stringify({ status: 500, message: "Solo se permite metodos GET" })
      );

    const country = req.url;

    const response = await serviceGet(country);

    console.log(response);

    res.end(JSON.stringify({ status: 200, response }));
  } catch (error) {
    return { status: error.status, message: error.message };
  }
});

console.log("Escuchando en puerto 3000: \n");

server.listen(3000);
