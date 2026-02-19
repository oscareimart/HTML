import Logger from "../models/Logger.js";
import User from "../models/user.js";

export async function processSeeds(req, res, next) {
  try {
    const loggers = await Logger.deleteMany({});
    const users = await User.collection.drop();
    res.json({ mensaje: "Se han eliminado los registros", loggers, users });
  } catch (error) {
    next(error);
  }
}
