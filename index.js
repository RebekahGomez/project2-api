import express from "express";
import connection from "./connection.js";
import router from "./artwork/router.js";
import cors from "cors";

const PORT = process.env.PORT || 3000


const app = express();
app.use(express.json());
app.use(cors());
app.use("/", router);


app.listen(PORT, () => console.log(`Listening on port ${PORT}`))

export default app