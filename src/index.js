import express from "express";
import CentroRouter from "./Controller/centroDonacionController.js";
import BeneficiarioRouter from "./Controller/beneficiarioController.js";
import AlertasRouter from "./Controller/alertasController.js";
import CalendarioRouter from "./Controller/calendarioController.js";
import DonacionRouter from "./Controller/donacionController.js";
import DonanteRouter from "./Controller/donanteController.js";
import RecompensaRouter from "./Controller/recompensasController.js";
import cors from "cors"



const app = express();
const port = 5000;


app.use(express.json());
app.use(cors());


app.use("/centro", CentroRouter);
app.use("/beneficiario", BeneficiarioRouter);
app.use("/alertas", AlertasRouter);
app.use("/calendario", CalendarioRouter);
app.use("/donacion", DonacionRouter);
app.use("/donante", DonanteRouter);
app.use("/recompensas", RecompensaRouter);


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`) 
    });