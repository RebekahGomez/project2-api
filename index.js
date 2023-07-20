import express from "express";
import connection from "./connection.js";
import router from "./artwork/router.js";

const app = express();
app.use(express.json());
app.use("/", router);

app.listen(3000, () => console.log("Listening on port 3000"))