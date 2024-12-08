import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    designation: {
      type: String,
      require: true,
    },
    experience: {
      type: String,
      require: true,
    },

    description: {
      type: String,
      require: true,
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);

export const TeamModel = mongoose.model("teams", dataSchema);
