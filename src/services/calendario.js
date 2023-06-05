import Calendario from "../Models/calendario.js";
import sql from 'mssql';
import config from '../Models/db.js'

export const getAll = async () =>{
    const conn = await sql.connect(config);
    const result = await conn.request().query('SELECT * FROM Calendario')
    return result.recordsets;
}

export const Create = async (calendario) =>{
    const conn = await  sql.connect(config);// para conectar a la base de datos
    const results2 = await conn.request() // para guardar el resultado 
    .input ("pFechaDonacion",sql.Date,calendario.fechaDonacion)
    .input ("pFkCentro",sql.Int,calendario.fkCentro)
    .input ("pFkBeneficiario",sql.Int,calendario.fkBeneficiario)    
    .query('INSERT INTO Calendario (FechaDonacion,FkCentro,FkBeneficiario) VALUES (@pFechaDonacion, @pFkCentro, @pFkBeneficiario)');
    return results2;
}

export const Update = async(Id,calendario)=>{
    const conn = await sql.connect (config); // para conectar a la base de datos
    const results3 = await conn.request()
    .input ("pId",sql.Int,Id)
    .input ("pFechaDonacion",sql.Date,calendario.fechaDonacion)
    .input ("pFkCentro",sql.Int,calendario.fkCentro)
    .input ("pFkBeneficiario",sql.Int,calendario.fkBeneficiario)    
    .query ('UPDATE Calendario SET FechaDonacion = @pFechaDonacion, fkCentro = @pFkCentro, fkBeneficiario = @pFkBeneficiario WHERE Id = @pId')
    return results3.rowsAffected;
}


export const deleteById = async (Id) => {
    const conn = await sql.connect(config);
    const results5 = await conn.request()
    .input("pId",sql.Int,Id).query('Delete from Calendario where Id = @pId')
    return results5.rowsAffected; 
}

export const getById = async (Id) => {
    const conn = await sql.connect(config);
    const results6 = await conn.request()
    .input("pId",sql.Int,Id)
    .query("SELECT * FROM Calendario WHERE Id = @pId") 
    return results6.recordsets;  
}


