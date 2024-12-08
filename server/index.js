import app from "./app.js";
import config from "./configs/config.js"
import { connectDB } from "./configs/db.js";

connectDB();

const PORT = config.app.PORT;

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
