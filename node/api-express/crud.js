import e from "express";
import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

//Midlewares

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});

app.use((req, res, next) => {
  try {
    const method = req.method;

    switch (method) {
      case "POST":
        if (!req.body || Object.keys(req.body).length === 0)
          return res
            .status(400)
            .json({ error: `Se require body para crear el registro` });
        break;

      case "PUT":
        if (!req.body || Object.keys(req.body).length === 0)
          return res
            .status(400)
            .json({ error: `Se require body para actualizar el registro` });
        break;

      case "PATCH":
        if (!req.body || Object.keys(req.body).length === 0)
          return res
            .status(400)
            .json({ error: `Se require body para actualizar el registro` });
        break;

      default:
        break;
    }
    next();
  } catch (error) {
    return res.status(500).json({ error: `Error no controlado: ${error}` });
  }
});

let users = [
  { id: 1, name: "Julio", email: "julio@gmail.com", age: 33 },
  { id: 2, name: "Maria", email: "maria@gmail.com", age: 23 },
];

app.get("/users", (req, res) => {
  res.json(users);
});

app.get("/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id);

    if (Number.isNaN(id))
      return res
        .status(400)
        .json({ erro: "Campo Id tiene q ser un numero real entero" });

    const user = users.find((u) => u.id === id);

    if (!user) {
      return res.status(404).json({ erro: "Usuario no encontrado" });
    }

    res.json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error Interno de Servidor: ${error}` });
  }
});

app.post("/users", (req, res) => {
  try {
    const { name, email, age } = req.body;

    if (typeof name !== "string")
      return res.status(400).json({ message: "Nombre tiene q ser texto" });
    if (typeof age !== "number")
      return res.status(400).json({ message: "Edad tiene q ser numero" });

    if (!name || !email || !age) {
      return res.status(400).json({ message: "Faltan Datos" });
    }

    const userFound = users.find((e) => e.email === email);
    if (userFound)
      return res.status(409).json({
        message: `ya existe el usuario con email: ${email} en la base de datos`,
      });

    const newUser = {
      id: users.length + 1,
      name,
      email,
      age,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error Interno de Servidor: ${error}` });
  }
});

app.put("/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email, age } = req.body;
    const fields = ["name", "email", "age"];
    const keys = Object.keys(req.body);

    const index = users.findIndex((u) => u.id === id);
    if (index === -1)
      return res.status(404).json({ error: "Usuario no Encontrado" });

    if (!name || !email || !age)
      return res.status(400).json({ message: "PUT require todos los campos" });

    for (const key of keys) {
      if (!fields.includes(key)) {
        return res
          .status(404)
          .json({ erro: `Campo ${key} no existe en la definicion de datos` });
      }
    }

    users[index] = { id, name, email, age };
    res.json(users[index]);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error Interno de Servidor: ${error}` });
  }
});

app.patch("/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const user = users.find((u) => u.id === id);
    const fields = ["name", "email", "age"];
    const keys = Object.keys(req.body);

    if (!user) {
      return res.status(404).json({ erro: "Usuario no encontrado" });
    }

    for (const key of keys) {
      if (!fields.includes(key)) {
        return res
          .status(404)
          .json({ erro: `Campo ${key} no existe en la definicion de datos` });
      }
    }

    if (req.body.name !== undefined) user.name = req.body.name;
    if (req.body.email !== undefined) user.email = req.body.email;
    if (req.body.age !== undefined) user.age = req.body.age;

    res.json(user);
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error Interno de Servidor: ${error}` });
  }
});

app.delete("/users/:id", (req, res) => {
  try {
    const id = Number(req.params.id);
    const index = users.findIndex((u) => u.id === id);

    if (index === -1)
      return res.status(404).json({ error: "Usuario no Encontrado" });

    const deleteUser = users.splice(index, 1);

    res.json({ message: "Usuario Elimiando", user: deleteUser[0] });
  } catch (error) {
    return res
      .status(500)
      .json({ message: `Error Interno de Servidor: ${error}` });
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
