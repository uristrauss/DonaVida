import { Router } from "express";
import express from "express";
import Alertas from '../Models/alertas.js'
import {getAll,Create,Update,deleteById,getById} from "../services/alertas.js";
const router = Router();

router.get('/', async(req,res) =>{
    const todasAlertas = await getAll ();
    return res.status(200).send(todasAlertas);
})

router.post ('/',async(req,res)=>{ // por que ponemos router punto
    const AlertasN = new Alertas();
    AlertasN.fecha = req.body.Fecha;
    const Crear = await Create(AlertasN);
    return res.status(201).send(Crear); 
})

router.put('/:id', async (req, res) =>{
    const IdModificado = req.params.id;
    if (IdModificado != req.body.Id) {
       return res.status(400).send();
    }
    const AlertasN = new Alertas();
    AlertasN.fecha = req.body.Fecha;
    const AlertasModificado = await Update(IdModificado, AlertasN);
    if (AlertasModificado == 0) {
       return res.status(404).send();
    }
    return res.status(200).send(AlertasModificado);
})

router.delete('/:id', async (req, res) =>{
    const idElegido = req.params.id;
    const rowsAffected = await deleteById(idElegido);
    
    if (idElegido<1) {
        return res.status(400).send();
    }
    if (rowsAffected[0] == 0) {
        return res.status(404).send();
    }

    return res.status(200).send();
})


router.get('/:id', async (req,res) =>{ 
    const idElegido = req.params.id;
    const AlertaElegido = await getById(idElegido);
    if (idElegido<1) { 
        return res.status(400);
    }
    if (idElegido == null) {
        return res.status(404);
    }
    return res.status(200).send(AlertaElegido);
})


export default router;