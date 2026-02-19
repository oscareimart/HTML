import Logger from "../models/Logger.js";

export async function getLogger(req, res, next) {
  try {
    const loggers = await Logger.find({});
    res.json(loggers);
  } catch (error) {
    next(error);
  }
}
