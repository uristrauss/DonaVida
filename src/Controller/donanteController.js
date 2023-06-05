import { Router } from "express";
import express from "express";
import Donante from '../Models/donante.js'
import {getAll,Create,Update,deleteById,getById} from "../services/donante.js";
const router = Router();

router.get('/', async(req,res) =>{
    const todosDonantes = await getAll ();
    return res.status(200).send(todosDonantes);
})

router.post ('/',async(req,res)=>{ // por que ponemos router punto
    const DonanteN = new Donante();
    DonanteN.nombre = req.body.Nombre;
    DonanteN.apellido = req.body.Apellido;
    DonanteN.fechaDeNacimiento = req.body.FechaDeNacimiento;
    DonanteN.dni = req.body.DNI;
    DonanteN.email = req.body.Email;
    DonanteN.contraseña = req.body.Contraseña;
    DonanteN.peso = req.body.Peso;
    DonanteN.buenaSalud = req.body.BuenaSalud;
    DonanteN.embarazo = req.body.Embarazo;
    DonanteN.sexo = req.body.Sexo;
    DonanteN.fechaDonacion = req.body.FechaDonacion;
    DonanteN.medicamentos = req.body.Medicamentos;
    DonanteN.hepatitisBC = req.body.HepatitisBC;
    DonanteN.parto = req.body.Parto;
    DonanteN.operacion = req.body.Operacion;
    DonanteN.antitetanica = req.body.Antitetanica;
    DonanteN.ultimoTatuaje = req.body.UltimoTatuaje;
    DonanteN.ultimoHierro = req.body.UltimoHierro;
    DonanteN.lactanciaMaterna = req.body.LactanciaMaterna;
    DonanteN.finMononucleosis = req.body.FinMononucleosis;
    DonanteN.antipaludicos = req.body.Antipaludicos;
    DonanteN.its = req.body.ITS;
    DonanteN.puntos = req.body.Puntos;
    DonanteN.tipoSangre = req.body.TipoSangre;
    const Crear = await Create(DonanteN);
    return res.status(201).send(Crear); 
})

router.put('/:id', async (req, res) =>{
    const IdModificado = req.params.id;
    if (IdModificado != req.body.Id) {
       return res.status(400).send();
    }
    const DonanteN = new Donante();
    DonanteN.nombre = req.body.Nombre;
    DonanteN.apellido = req.body.Apellido;
    DonanteN.fechaDeNacimiento = req.body.FechaDeNacimiento;
    DonanteN.dni = req.body.DNI;
    DonanteN.email = req.body.Email;
    DonanteN.contraseña = req.body.Contraseña;
    DonanteN.peso = req.body.Peso;
    DonanteN.buenaSalud = req.body.BuenaSalud;
    DonanteN.embarazo = req.body.Embarazo;
    DonanteN.sexo = req.body.Sexo;
    DonanteN.fechaDonacion = req.body.FechaDonacion;
    DonanteN.medicamentos = req.body.Medicamentos;
    DonanteN.hepatitisBC = req.body.HepatitisBC;
    DonanteN.parto = req.body.Parto;
    DonanteN.operacion = req.body.Operacion;
    DonanteN.antitetanica = req.body.Antitetanica;
    DonanteN.ultimoTatuaje = req.body.UltimoTatuaje;
    DonanteN.ultimoHierro = req.body.UltimoHierro;
    DonanteN.lactanciaMaterna = req.body.LactanciaMaterna;
    DonanteN.finMononucleosis = req.body.FinMononucleosis;
    DonanteN.antipaludicos = req.body.Antipaludicos;
    DonanteN.its = req.body.ITS;
    DonanteN.puntos = req.body.Puntos;
    DonanteN.tipoSangre = req.body.TipoSangre;
    const DonanteModificado = await Update(IdModificado, DonanteN);
    if (DonanteModificado == 0) { 
       return res.status(404).send();
    }
    return res.status(200).send(DonanteModificado);
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
    const DonanteElegido = await getById(idElegido);
    if (idElegido<1) { 
        return res.status(400);
    }
    if (idElegido == null) {
        return res.status(404);
    }
    return res.status(200).send(DonanteElegido);
})


export default router;