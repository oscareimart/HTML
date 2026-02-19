async function loadData() {
  return await new Promise((resolve) => {
    setTimeout(() => {
      const data = [
        {
          id: 1,
          name: "Javier",
          email: "javier@email.cm",
          user: "javi111",
        },
        {
          id: 2,
          name: "Oscar",
          email: "oscar@email.cm",
          user: "oscarrrrr",
        },
        {
          id: 3,
          name: "Hector",
          email: "hector@email.cm",
          user: "hectt",
        },
        {
          id: 4,
          name: "Andres",
          email: "andres@email.cm",
          user: "anddress",
        },
      ];
      resolve(data);
    }, 2000);
  });
}

console.log("Obteniendo Datos, espere por favor... \n");

const data = await loadData();

console.log(data);

console.log("\n Datos obtenidos con existo, Fin... ");
