import cors from "cors";
import express from "express";
import { initRoutes } from "./routes/routes.js";

import "./config/db.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

initRoutes(app);

app.use("/", express.static("./client/build"));

const port = 3050;
app.listen(port, () => {
  console.log(`Server started on: http://localhost:${port}/`);
});

export { app };
