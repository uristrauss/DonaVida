import { Router } from "express";
import express from "express";
import Recompensas from '../Models/recompensas.js'
import {getAll,Create,Update,deleteById,getById} from "../services/recompensas.js";
const router = Router();

router.get('/', async(req,res) =>{
    const todasRecompensas = await getAll ();
    return res.status(200).send(todasRecompensas);
})

router.post ('/',async(req,res)=>{ // por que ponemos router punto
    const RecompensasN = new Recompensas();
    RecompensasN.local = req.body.Local;
    RecompensasN.ubicacion = req.body.Ubicacion;
    RecompensasN.descuento = req.body.Descuento;
    RecompensasN.valor = req.body.Valor;
    const Crear = await Create(RecompensasN);
    return res.status(201).send(Crear); 
})

router.put('/:id', async (req, res) =>{
    const IdModificado = req.params.id;
    if (IdModificado != req.body.Id) {
       return res.status(400).send();
    }
    const RecompensasN = new Recompensas();
    RecompensasN.local = req.body.Local;
    RecompensasN.ubicacion = req.body.Ubicacion;
    RecompensasN.descuento = req.body.Descuento;
    RecompensasN.valor = req.body.Valor;
    const RecompensaModificada = await Update(IdModificado, RecompensasN);
    if (RecompensaModificada == 0) { 
       return res.status(404).send();
    }
    return res.status(200).send(RecompensaModificada);
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
    const RecompensaElegida = await getById(idElegido);
    if (idElegido<1) { 
        return res.status(400);
    }
    if (idElegido == null) {
        return res.status(404);
    }
    return res.status(200).send(RecompensaElegida);
})


export default router;
