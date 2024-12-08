import express from "express";
import cors from "cors";

import blogRouter from "./routes/blog.route.js";
import teamRouter from "./routes/team.route.js";
import serviceRouter from "./routes/service.route.js";
import userRouter from "./routes/user.route.js";

const app = express();

//Default Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

app.use("/api/v1", blogRouter);
app.use("/api/v1", teamRouter);
app.use("/api/v1", serviceRouter);
app.use("/api/v1", userRouter);

//Route error
app.use("*", (req, res, next) => {
  res.status(404).send({
    message: "Route does not found",
  });
});

// Server error
app.use("*", (err, req, res, next) => {
  res.status(500).send({
    message: "Server broken",
  });
});

export default app;
