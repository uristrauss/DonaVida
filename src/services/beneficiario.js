import Beneficiario from "../Models/beneficiario.js";
import sql from 'mssql';
import config from '../Models/db.js'

export const getAll = async () =>{
    const conn = await sql.connect(config);
    const result = conn.request().query('SELECT * FROM Beneficiario')
    return result;
}

export const Create = async (beneficiario) =>{
    const conn = await  sql.connect(config);// para conectar a la base de datos
    const results2 = await conn.request() // para guardar el resultado 
    .input ("pTipoSangre",sql.VarChar,beneficiario.tipoSangre)
    .input ("pNombre",sql.VarChar,beneficiario.nombre)
    .input ("pApellido",sql.VarChar,beneficiario.apellido)
    .input ("pCantDonacionesNecesitadas",sql.Int,beneficiario.cantDonacionesNecesitadas)
    .input ("pCompatibilidad",sql.VarChar,beneficiario.compatibilidad)
    .input ("pHistoria",sql.VarChar,beneficiario.historia)
    .query('INSERT INTO Beneficiario (TipoSangre,Nombre,Apellido,CantDonacionesNecesitadas,Compatibilidad,Historia) VALUES (@pTipoSangre, @pNombre, @pApellido, @pCantDonacionesNecesitadas, @pCompatibilidad,@pHistoria)');
    return results2;
}

export const Update = async(Id,beneficiario)=>{
    const conn = await sql.connect (config); // para conectar a la base de datos
    const results3 = await conn.request()
    .input ("pTipoSangre",sql.VarChar,beneficiario.tipoSangre)
    .input ("pNombre",sql.VarChar,beneficiario.nombre)
    .input ("pApellido",sql.VarChar,beneficiario.apellido)
    .input ("pCantDonacionesNecesitadas",sql.Int,beneficiario.cantDonacionesNecesitadas)
    .input ("pCompatibilidad",sql.VarChar,beneficiario.compatibilidad)
    .input ("pHistoria",sql.VarChar,beneficiario.historia)
    .query ('UPDATE Beneficiario SET TipoSangre = @pTipoSangre, Nombre = @pNombre, CantDonacionesNecesitadas = @pCantDonacionesNecesitadas, Compatibilidad = @pCompatibilidad, Historia = @pHistoria WHERE Id = @pId')
    return results3.rowsAffected;
}

export const deleteById = async (Id) => {
    const conn = await sql.connect(config);
    const results5 = await conn.request()
    .input("pId",sql.Int,Id).query('Delete from Beneficiario where Id = @pId')
    return results5.rowsAffected; 
}


export const getById = async (Id) => {
    const conn = await sql.connect(config);
    const results6 = await conn.request()
    .input("pId",sql.Int,Id)
    .query("SELECT *  FROM Beneficiario WHERE Id = @pId") 
    return results6.recordsets;  
}
