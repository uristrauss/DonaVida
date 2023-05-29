import express from "express";
import CentroRouter from "./Controller/centroDonacionController.js";

const app = express();
const port = 3000;


app.use(express.json());


app.use("/centro", CentroRouter);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) 
    });