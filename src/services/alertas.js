import Alertas from "../Models/alertas.js";
import sql from 'mssql';
import config from '../Models/db.js'

export const getAll = async () =>{
    const conn = await sql.connect(config);
    const result = conn.request().query('SELECT * FROM Alertas')
    return result;
}

export const Create = async (alertas) =>{ // que es eso que le pasamos por parametro y porque en minuscula
    const conn = await  sql.connect(config);// para conectar a la base de datos
    const results2 = await conn.request() // para guardar el resultado 
    .input ("pFecha",sql.Date,alertas.fecha)
    .query('INSERT INTO Alertas (Fecha) VALUES (@pFecha)');
    return results2;
}

export const Update = async(Id,alertas)=>{
    const conn = await sql.connect (config); // para conectar a la base de datos
    const results3 = await conn.request()
    .input ("pId",sql.Int,Id)
    .input ("pFecha",sql.Date,alertas.fecha)
    .query ('UPDATE Alertas SET Fecha = @pFecha WHERE Id = @pId')
    return results3.rowsAffected; // porque usamos rows affected
}

export const deleteById = async (Id) => {
    const conn = await sql.connect(config);
    const results5 = await conn.request()
    .input("pId",sql.Int,Id).query('Delete from Alertas WHERE Id = @pId')
    return results5.rowsAffected; 
}

export const getById = async (Id) => {
    const conn = await sql.connect(config);
    const results6 = await conn.request()
    .input("pId",sql.Int,Id)
    .query("SELECT * FROM Alertas WHERE Id = @pId") 
    return results6.recordsets;  
}


