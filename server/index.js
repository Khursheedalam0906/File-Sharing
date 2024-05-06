import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import router from "./routes/routes.js";
import DbConfig from "./database/DbConfig.js";

const app = express();

const PORT = 8000;
DbConfig();

app.use(cors());
app.use(bodyParser.json());

app.use("/", router);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
