import mongoose from "mongoose"

const connectionString = process.env.DB_URL || "mongodb://localhost/artwork"

mongoose.connect(connectionString, { useNewUrlParser: true, useUnifiedTopology: true, dbName: "artwork" }).catch(() => {
  console.log("Error connecting to MongoDB");
});

mongoose.connection.on("connected", () => {
  console.log("Connected to MongoDB");
});

mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

mongoose.connection.on("error", () => {
  console.log("MongoDB connection error")
});

export default mongoose.connection;