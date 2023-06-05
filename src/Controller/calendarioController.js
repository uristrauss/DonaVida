import { Router } from "express";
import express from "express";
import Calendario from '../Models/calendario.js'
import {getAll,Create,Update,deleteById,getById} from "../services/calendario.js";
const router = Router();

router.get('/', async(req,res) =>{
    const todosCalendarios = await getAll ();
    return res.status(200).send(todosCalendarios);
})

router.post ('/',async(req,res)=>{ // por que ponemos router punto
    const CalendarioN = new Calendario();
    CalendarioN.fechaDonacion = req.body.FechaDonacion;
    CalendarioN.fkCentro = req.body.FkCentro;
    CalendarioN.fkBeneficiario = req.body.FkBeneficiario;
    CalendarioN.yaDono = req.body.YaDono;
    const Crear = await Create(CalendarioN);
    return res.status(201).send(Crear); 
})

router.put('/:id', async (req, res) =>{
    const IdModificado = req.params.id;
    if (IdModificado != req.body.Id) {
       return res.status(400).send();
    }
    const CalendarioN = new Calendario();
    CalendarioN.fechaDonacion = req.body.FechaDonacion;
    CalendarioN.fkCentro = req.body.FkCentro;
    CalendarioN.fkBeneficiario = req.body.FkBeneficiario;
    CalendarioN.yaDono = req.body.YaDono;
    const CalendarioModificado = await Update(IdModificado, CalendarioN);
    if (CalendarioModificado == 0) { 
       return res.status(404).send();
    }
    return res.status(200).send(CalendarioModificado);
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
    const CalendarioElegido = await getById(idElegido);
    if (idElegido<1) { 
        return res.status(400);
    }
    if (idElegido == null) {
        return res.status(404);
    }
    return res.status(200).send(CalendarioElegido);
})


export default router;