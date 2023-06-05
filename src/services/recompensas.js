import Recompensas from "../Models/recompensas.js";
import sql from 'mssql';
import config from '../Models/db.js'

export const getAll = async () =>{
    const conn = await sql.connect(config);
    const result = conn.request().query('SELECT * FROM Recompensas')
    return result;
}

export const Create = async (recompensas) =>{
    const conn = await  sql.connect(config);// para conectar a la base de datos
    const results2 = await conn.request() // para guardar el resultado 
    .input ("pLocal",sql.VarChar,recompensas.local)
    .input ("pUbicacion",sql.VarChar,recompensas.ubicacion)
    .input ("pDescuento",sql.VarChar,recompensas.descuento)
    .input ("pValor",sql.Int,recompensas.valor)
    .query('INSERT INTO Recompensas (Local, Ubicacion, Descuento, Valor) VALUES (@pLocal, @pUbicacion, @pDescuento, @pValor)');
    return results2;
}

export const Update = async(Id,recompensas)=>{
    const conn = await sql.connect (config); // para conectar a la base de datos
    const results3 = await conn.request()
    .input ("pId",sql.Int,Id)
    .input ("pLocal",sql.VarChar,recompensas.local)
    .input ("pUbicacion",sql.VarChar,recompensas.ubicacion)
    .input ("pDescuento",sql.VarChar,recompensas.descuento)
    .input ("pValor",sql.Int,recompensas.valor)
    .query ('UPDATE Recompensas SET Local = @pLocal, Ubicacion = @pUbicacion, Descuento = @pDescuento, Valor = @pValor WHERE Id = @pId')
    return results3.rowsAffected;
}

export const deleteById = async (Id) => {
    const conn = await sql.connect(config);
    const results5 = await conn.request()
    .input("pId",sql.Int,Id).query('Delete from Recompensas where Id = @pId')
    return results5.rowsAffected; 
}

export const getById = async (Id) => {
    const conn = await sql.connect(config);
    const results6 = await conn.request()
    .input("pId",sql.Int,Id)
    .query("SELECT *  FROM Recompensas WHERE Id = @pId") 
    return results6.recordsets;  
}