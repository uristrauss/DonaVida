import Donacion from "../Models/donacion.js";
import sql from 'mssql';
import config from '../Models/db.js'

export const getAll = async () =>{
    const conn = await sql.connect(config);
    const result = await conn.request().query('SELECT * FROM Donacion')
    return result.recordsets;
}

export const Create = async (donacion) =>{
    const conn = await  sql.connect(config);// para conectar a la base de datos
    const results2 = await conn.request() // para guardar el resultado 
    .input ("pFkDonante",sql.Int,donacion.fkDonante)
    .input ("pFkCentro",sql.Int,donacion.fkCentro)
    .input ("pFkBeneficiario",sql.Int,donacion.fkBeneficiario)
    .input ("pFechaDonacion",sql.Date,donacion.fechaDonacion)
    .input ("pYaDono",sql.Bit,donacion.yaDono)
    .query('INSERT INTO Donacion (FkDonante, FkCentro, FkBeneficiario, FechaDonacion, YaDono) VALUES (@pFkDonante, @pFkCentro, @pFkBeneficiario, @pFechaDonacion, @pYaDono)')
    return results2;
}

export const Update = async(Id,donacion)=>{
    const conn = await sql.connect (config); // para conectar a la base de datos
    const results3 = await conn.request()
    .input ("pId",sql.Int,Id)
    .input ("pFkDonante",sql.Int,donacion.fkDonante)
    .input ("pFkCentro",sql.Int,donacion.fkCentro)
    .input ("pFkBeneficiario",sql.Int,donacion.fkBeneficiario)
    .input ("pFechaDonacion",sql.Date,donacion.fechaDonacion)
    .input ("pYaDono",sql.Bit,donacion.yaDono)
    .query ('UPDATE Donacion SET FkDonante = @pFkDonante, FkCentro = @pFkCentro, FkBeneficiario = @pFkBeneficiario, FechaDonacion = @pFechaDonacion, YaDono = @pYaDono WHERE Id = @pId')
    return results3.rowsAffected;
}

export const deleteById = async (Id) => {
    const conn = await sql.connect(config);
    const results5 = await conn.request()
    .input("pId",sql.Int,Id).query('Delete from Donacion where Id = @pId')
    return results5.rowsAffected; 
}

export const getById = async (Id) => {
    const conn = await sql.connect(config);
    const results6 = await conn.request()
    .input("pId",sql.Int,Id)
    .query("SELECT * FROM Donacion WHERE Id = @pId") 
    return results6.recordsets;  
}