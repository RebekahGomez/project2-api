import express from "express";
import connection from "./connection.js"; // connected to mongodb
import router from "./artwork/router.js";

const PORT = process.env.PORT || 3000


const app = express();
app.use(express.json());
app.use("/", router);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

