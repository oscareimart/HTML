import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

let data = [
  {
    id: 1,
    user: "admin",
    password: "ABCabc123.",
  },
  {
    id: 2,
    user: "user",
    password: "MiPassword",
  },
  {
    id: 3,
    user: "auditor",
    password: "12345678.",
  },
];

app.get("/", (req, res) => {
  res.send("API en funcionamiento, version: 1.0.0");
});

app.get("/users/:id", (req, res) => {
  res.json({ id: req.params.id });
});

app.delete("/users/:id", (req, res) => {
  const { id } = req.params;
  console.log(id);
  console.log(data);

  const userFoundIndex = data.findIndex(
    (e) => parseInt(e?.id) === parseInt(id),
  );

  if (userFoundIndex === -1)
    return res.json({ message: "Usuario no encontrado" });

  const userFound = data.find((e) => parseInt(e.id) === parseInt(id));

  console.log("uuserFound: ");

  console.log(userFound);

  delete data[userFoundIndex];

  console.log(data);

  return res.json({ user: userFound, message: "Registro Borrado" });
});

app.post("/users", (req, res) => {
  console.log(req.body);

  res.status(201).json({ message: "usuario creado", user: req.body });
});

app.post("/login", (req, res) => {
  try {
    const user = req.body.user;
    const pass = req.body.password;

    if (!user) return res.status(400).json({ message: "Se requiere Usuario" });
    if (!pass) return res.status(400).json({ message: "Se requiere Password" });

    const userFound = data.find((e) => e.user === user);
    console.log(userFound);

    if (!userFound)
      return res.status(404).json({ message: "Usuario no encontrado" });

    if (userFound.password !== pass)
      return res.status(404).json({
        message: "Usuario o Contraseña incorrecta",
      });

    return res.status(200).json({
      message: "Login Exitoso, Bienvenido...",
      token: "alsjid08a9sjdpja90e9ajsdijas09dua09wjed9ajsd9aus90dua",
    });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Error Interno", message: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Escuchando en puerto: ${PORT}`);
});
