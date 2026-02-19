import mongoose from "mongoose";

export async function connectDB() {
  try {
    console.log("\n🔌 Conectando a MongoDB... 🕔 Espere por favor...🔌");
    await mongoose.connect(process.env.MONGO_URI);
    console.log("\n🎉 MongoDB conectado exitosamente. 🎉\n");
  } catch (error) {
    console.error("\n❌ Error al conectar a MongoDB: ", error.message + "\n");
    process.exit(1);
  }
}
