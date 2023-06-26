import Beneficiario from "../Models/beneficiario.js";
import sql from 'mssql';
import config from '../Models/db.js'

export const getAll = async () =>{
    const conn = await sql.connect(config);
    const result = await conn.request().query('SELECT * FROM Beneficiario')
    return result.recordsets[0];
}

export const Create = async (beneficiario) =>{
    const conn = await  sql.connect(config);// para conectar a la base de datos
    const results2 = await conn.request() // para guardar el resultado 
 
    .input ("pNombre",sql.VarChar,beneficiario.nombre)
    .input ("pApellido",sql.VarChar,beneficiario.apellido)
    .input ("pCantDonacionesNecesitadas",sql.Int,beneficiario.cantDonacionesNecesitadas)
    .input ("pCompatibilidad",sql.VarChar,beneficiario.compatibilidad)
    .input ("pHistoria",sql.VarChar,beneficiario.historia)
    .input ("pNecesitaSangre",sql.Bit,beneficiario.necesitaSangre)
    .input ("pGrupo",sql.VarChar,beneficiario.grupo)
    .input ("pFactor",sql.VarChar,beneficiario.factor)
    .input ("pFkCentro",sql.VarChar,beneficiario.fkCentro)
    .input ("pImagen",sql.VarChar,beneficiario.imagen)
    .query('INSERT INTO Beneficiario (Nombre,Apellido,CantDonacionesNecesitadas,Compatibilidad,Historia,Grupo,Factor,FkCentro, Imagen) VALUES (@pNombre, @pApellido, @pCantDonacionesNecesitadas, @pCompatibilidad,@pHistoria, @pGrupo, @pFactor, @pFkCentro, @pImagen)');
    return results2;
}

export const Update = async(Id,beneficiario)=>{
    const conn = await sql.connect (config); // para conectar a la base de datos
    const results3 = await conn.request()
    .input ("pId",sql.Int,Id)
    .input ("pNombre",sql.VarChar,beneficiario.nombre)
    .input ("pApellido",sql.VarChar,beneficiario.apellido)
    .input ("pCantDonacionesNecesitadas",sql.Int,beneficiario.cantDonacionesNecesitadas)
    .input ("pCompatibilidad",sql.VarChar,beneficiario.compatibilidad)
    .input ("pHistoria",sql.VarChar,beneficiario.historia)
    .input ("pNecesitaSangre",sql.Bit,beneficiario.necesitaSangre)
    .input ("pGrupo",sql.VarChar,beneficiario.grupo)
    .input ("pFactor",sql.VarChar,beneficiario.factor)
    .input ("pFkCentro",sql.VarChar,beneficiario.fkCentro)
    .input ("pImagen",sql.VarChar,beneficiario.imagen)
    .query ('UPDATE Beneficiario SET Nombre = @pNombre, Apellido = @pApellido, CantDonacionesNecesitadas = @pCantDonacionesNecesitadas, Compatibilidad = @pCompatibilidad, Historia = @pHistoria, NecesitaSangre = @pNecesitaSangre, Grupo = @pGrupo, Factor = @pFactor, FkCentro = @pFkCentro, Imagen = @pImagen WHERE Id = @pId')
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
    .query("SELECT * FROM Beneficiario INNER JOIN CentroDonacion ON CentroDonacion.IdCentroDonacion = Beneficiario.fkCentro WHERE Id = @pId") 
    return results6.recordsets;  
}
