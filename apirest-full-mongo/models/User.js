import mongoose from "mongoose";
import Logger from "./Logger.js";
import { ACTIONS_LOGGER, LEVELS_LOGGER } from "../constants/const.js";

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    dateOfBirth: {
      required: true,
      formatted: { type: Date, format: "YYYY-MM-DD" },
      type: Date,
    },
    status: {
      type: Boolean,
      default: false,
    },
    password: {
      type: String,
      // required: true,
    },
    age: {
      type: Number,
      min: 0,
    },
  },
  { timestamps: true },
);

function calculateAge(dob) {
  const diffMs = Date.now() - dob.getTime();
  const ageDt = new Date(diffMs);
  return Math.abs(ageDt.getUTCFullYear() - 1970);
}

function createLoggerEntry(action, level, message) {
  const logEntry = new Logger({
    action,
    level,
    message,
  });
  logEntry.save().catch((err) => {
    console.error("Error al registrar log:", err);
  });
}

function createPassDefault() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

userSchema.post("save", function (doc, next) {
  console.log("isNew:", this.isNew);
  console.log("isModified:", this.isModified());
  console.log(doc);

  createLoggerEntry(
    doc.updatedAt === doc.createdAt
      ? ACTIONS_LOGGER.CREATE_USER
      : ACTIONS_LOGGER.UPDATE_USER,
    LEVELS_LOGGER.INFO,
    `Usuario ${doc.isNew ? "Creado" : "Actualizado"}: ${this.name}`,
  );

  this.age = calculateAge(this.dateOfBirth);
  this.password = this.password || createPassDefault();
  next();
});

export default mongoose.model("User", userSchema);
