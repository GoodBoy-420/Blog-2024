import mongoose from "mongoose";

const dataSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    owner: {
      type: String,
      require: true,
    },
    article: {
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

export const BlogModel = mongoose.model("blogs", dataSchema);
