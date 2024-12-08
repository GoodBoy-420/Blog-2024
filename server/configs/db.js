import mongoose from "mongoose";

import config from "./config.js";

export const connectDB = async () => {
  try {
    await mongoose.connect(config.db.url);
    console.log("DB connection successful");
  } catch (error) {
    console.log("DB connection error-" + error.toString());
    process.exit(1);
  }
};
