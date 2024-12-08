import dotenv from "dotenv";

dotenv.config();

const dev = {
  app: {
    PORT: process.env.PORT || 3030,
  },
  db: {
    url: process.env.DB_URL || "mongodb://localhost:27017/mernDB",
  },
};

export default dev;


