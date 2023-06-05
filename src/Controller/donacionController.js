import { Router } from "express";
import express from "express";
import Donacion from '../Models/donacion.js'
import {getAll,Create,Update,deleteById,getById} from "../services/donacion.js";
const router = Router();

router.get('/', async(req,res) =>{
    const todosDonacion = await getAll ();
    return res.status(200).send(todosDonacion);
})

router.post ('/',async(req,res)=>{ // por que ponemos router punto
    const DonacionN = new Donacion();
    DonacionN.fkDonante = req.body.FkDonante;
    DonacionN.fkCentro = req.body.FkCentro;
    DonacionN.fkBeneficiario = req.body.FkBeneficiario;
    DonacionN.fechaDonacion = req.body.FechaDonacion;
    const Crear = await Create(DonacionN);
    return res.status(201).send(Crear); 
})

router.put('/:id', async (req, res) =>{
    const IdModificado = req.params.id;
    if (IdModificado != req.body.Id) {
       return res.status(400).send();
    }
    const DonacionN = new Donacion();
    DonacionN.fkDonante = req.body.FkDonante;
    DonacionN.fkCentro = req.body.FkCentro;
    DonacionN.fkBeneficiario = req.body.FkBeneficiario;
    DonacionN.fechaDonacion = req.body.FechaDonacion;
    const DonacionModificada = await Update(IdModificado, DonacionN);
    if (DonacionModificada == 0) { 
       return res.status(404).send();
    }
    return res.status(200).send(DonacionModificada);
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
    const DonacionElegida = await getById(idElegido);
    if (idElegido<1) { 
        return res.status(400);
    }
    if (idElegido == null) {
        return res.status(404);
    }
    return res.status(200).send(DonacionElegida);
})


export default router;