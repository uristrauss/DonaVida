import { Router } from "express";
import express from "express";
import Beneficiario from '../Models/beneficiario.js'
import {getAll,Create,Update,deleteById,getById} from "../services/beneficiario.js";
const router = Router();

router.get('/', async(req,res) =>{
    const todosBeneficiario = await getAll ();
    return res.status(200).send(todosBeneficiario);
})

router.post ('/',async(req,res)=>{ // por que ponemos router punto
    const BeneficiarioN = new Beneficiario();
    BeneficiarioN.tipoSangre = req.body.TipoSangre;
    BeneficiarioN.nombre = req.body.Nombre;
    BeneficiarioN.apellido = req.body.Apellido;
    BeneficiarioN.cantDonacionesNecesitadas = req.body.CantDonacionesNecesitadas;
    BeneficiarioN.compatibilidad = req.body.Compatibilidad;
    BeneficiarioN.historia = req.body.Historia;
    const Crear = await Create(BeneficiarioN);
    return res.status(201).send(Crear); 
})


router.put('/:id', async (req, res) =>{
    const IdModificado = req.params.id;
    if (IdModificado != req.body.Id) {
       return res.status(400).send();
    }
    const BeneficiarioN = new Beneficiario();
    BeneficiarioN.tipoSangre = req.body.TipoSangre;
    BeneficiarioN.nombre = req.body.Nombre;
    BeneficiarioN.apellido = req.body.Apellido;
    BeneficiarioN.cantDonacionesNecesitadas = req.body.CantDonacionesNecesitadas;
    BeneficiarioN.compatibilidad = req.body.Compatibilidad;
    BeneficiarioN.historia = req.body.Historia;
    const BeneficiarioModificado = await Update(IdModificado, BeneficiarioN);
    if (BeneficiarioModificado == 0) { 
       return res.status(404).send();
    }
    return res.status(200).send(BeneficiarioModificado);
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
    const BeneficiarioElegido = await getById(idElegido);
    if (idElegido<1) { 
        return res.status(400);
    }
    if (idElegido == null) {
        return res.status(404);
    }
    return res.status(200).send(BeneficiarioElegido);
})


export default router;