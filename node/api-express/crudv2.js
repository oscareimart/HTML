import express from "express";

const app = express();
const PORT = 3000;
app.use(express.json());

app.use((req, res, next) => {
  console.log(`${req.method} - ${req.url}`);
  next();
});

let users = [
  { id: 1, name: "Julio", email: "julio@gmail.com", age: 33 },
  { id: 2, name: "Maria", email: "maria@gmail.com", age: 23 },
];

function validateUserFields({ name, email, age }, requireAll = true) {
  if (requireAll) {
    if (!name || !email || age === undefined) {
      return "Todos los campos son obligatorios.";
    }
  }

  if (name != undefined && typeof name !== "string") {
    return "El nombre debe ser una string.";
  }
  if (email != undefined && !email.includes("@")) {
    return "Email Invalido";
  }
  if (age !== undefined && (typeof age !== "number" || age < 0)) {
    return "La Edad debe ser un número positivo.";
  }

  return null;
}

app.get("/users", (req, res, next) => {
  try {
    res.json(users);
  } catch (error) {
    next(error);
  }
});

app.get("/users/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }

    const user = users.find((u) => u.id === parseInt(id));
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.post("/users", (req, res, next) => {
  try {
    const errorMsg = validateUserFields(req.body, true);
    if (errorMsg) {
      return res.status(400).json({ error: errorMsg });
    }
    const { name, email, age } = req.body;
    const newUser = {
      id: users.length ? users[users.length - 1].id + 1 : 1,
      name,
      email,
      age,
    };
    users.push(newUser);
    res.status(201).json(newUser);
  } catch (error) {
    next(error);
  }
});

app.put("/users/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }

    const errorMsg = validateUserFields(req.body, true);
    if (errorMsg) {
      return res.status(400).json({ error: errorMsg });
    }
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }

    users[index] = { id, ...req.body };
    res.json(users[index]);
  } catch (error) {
    next(error);
  }
});

app.patch("/users/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }
    const errorMsg = validateUserFields(req.body, false);
    if (errorMsg) {
      return res.status(400).json({ error: errorMsg });
    }
    const user = users.find((u) => u.id === id);
    if (!user) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
    Object.assign(user, req.body);
    res.json(user);
  } catch (error) {
    next(error);
  }
});

app.delete("/users/:id", (req, res, next) => {
  try {
    const id = Number(req.params.id);
    if (isNaN(id)) {
      return res.status(400).json({ error: "ID inválido." });
    }
    const index = users.findIndex((u) => u.id === id);
    if (index === -1) {
      return res.status(404).json({ error: "Usuario no encontrado." });
    }
    const deletedUser = users.splice(index, 1)[0];
    res.json({ message: "Usuario eliminado.", user: deletedUser });
  } catch (error) {
    next(error);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
