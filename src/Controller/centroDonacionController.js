import { Router } from "express";
import express from "express";
import CentroDonacion from '../Models/centroDonacion.js'
import {getAll,Create,Update,deleteById,getById} from "../services/centroDonacion.js";
const router = Router();

router.get('/', async(req,res) =>{
    const todosCentrosDonaciones = await getAll ();
    return res.status(200).send(todosCentrosDonaciones);
})

router.post ('/',async(req,res)=>{ // por que ponemos router punto
    const CentroDonacionN = new CentroDonacion();
    CentroDonacionN.nombre = req.body.Nombre;
    CentroDonacionN.direccion = req.body.Direccion;
    CentroDonacionN.apertura = req.body.Apertura;
    CentroDonacionN.cierre = req.body.Cierre;
    CentroDonacionN.email = req.body.Email;
    CentroDonacionN.contraseña = req.body.Contraseña;
    CentroDonacionN.fkBeneficiarios = req.body.FkBeneficiarios;
    const Crear = await Create(CentroDonacionN);
    return res.status(201).send(Crear); // por que lo ponemos como fuino a una calse?
    
})

router.put('/:id', async (req, res) =>{
    const IdModificado = req.params.id;
    if (IdModificado != req.body.IdCentroDonacion) {
       return res.status(400).send();
    }
    const CentroDonacionN = new CentroDonacion();
    CentroDonacionN.nombre = req.body.Nombre;
    CentroDonacionN.direccion = req.body.Direccion;
    CentroDonacionN.apertura = req.body.Apertura;
    CentroDonacionN.cierre = req.body.Cierre;
    CentroDonacionN.email = req.body.Email;
    CentroDonacionN.contraseña = req.body.Contraseña;
    CentroDonacionN.fkBeneficiarios = req.body.FkBeneficiarios;
    const CentroModificado = await Update(IdModificado, CentroDonacionN);
    if (CentroModificado == 0) {
       return res.status(404).send();
    }
    return res.status(200).send(CentroModificado);
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
    const CentroDonacionElegido = await getById(idElegido);
    if (idElegido<1) { 
        return res.status(400);
    }
    if (idElegido == null) {
        return res.status(404);
    }
    return res.status(200).send(CentroDonacionElegido);
})


export default router;