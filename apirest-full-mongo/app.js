import express from "express";
import { connectDB } from "./config/db.js";
import dotenv from "dotenv";
import userRoutes from "./routes/user.route.js";
import loggerRoutes from "./routes/logger.route.js";
import seedsRoutes from "./routes/seeds.route.js";
import errorHandler from "./middlewares/error.middleware.js";
import accessLogger from "./middlewares/access.middleware.js";

dotenv.config();

const app = express();
app.use(express.json());

await connectDB();

app.use(accessLogger);
app.use("/users", userRoutes);
app.use("/loggers", loggerRoutes);

app.use("/seeds", seedsRoutes);
app.use(errorHandler);

export default app;
