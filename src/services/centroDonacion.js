import CentroDonacion from "../Models/centroDonacion.js";
import sql from 'mssql';
import config from '../Models/db.js'

export const getAll = async () =>{
    const conn = await sql.connect(config);
    const result = await conn.request().query('SELECT * FROM CentroDonacion')
    return result.recordsets;
}

export const Create = async (centroDonacion) =>{
    const conn = await  sql.connect(config);// para conectar a la base de datos
    const results2 = await conn.request() // para guardar el resultado 
    .input ("pNombre",sql.VarChar,centroDonacion.nombre)
    .input ("pDireccion",sql.VarChar,centroDonacion.direccion)
    .input ("pApertura",sql.Time,centroDonacion.apertura)
    .input ("pCierre",sql.Time,centroDonacion.cierre)
    .input("pEmail",sql.VarChar,centroDonacion.email)
    .input("pContraseña",sql.VarChar,centroDonacion.contraseña)
    .input("plongitud",sql.Int,centroDonacion.longitud)
    .input("platitud",sql.Int,centroDonacion.latitud)
    .query('INSERT INTO CentroDonacion (Nombre,Direccion,Apertura,Cierre,Email,Contraseña,Longitud,Latitud) VALUES (@pNombre, @pDireccion, @pApertura, @pCierre, @pEmail,@pContraseña,@pLongitud, @pLatitud)');
    return results2;
}

export const Update = async(IdCentroDonacion,centroDonacion)=>{
    const conn = await sql.connect (config); // para conectar a la base de datos
    const results3 = await conn.request()
    .input ("pIdCentroDonacion",sql.Int,IdCentroDonacion)
    .input ("pNombre",sql.VarChar,centroDonacion.nombre)
    .input ("pDireccion",sql.VarChar,centroDonacion.direccion)
    .input ("pApertura",sql.Time,centroDonacion.apertura)
    .input ("pCierre",sql.Time,centroDonacion.cierre)
    .input("pEmail",sql.VarChar,centroDonacion.email)
    .input("pContraseña",sql.VarChar,centroDonacion.contraseña)
    .input("plongitud",sql.Int,centroDonacion.longitud)
    .input("platitud",sql.Int,centroDonacion.latitud)
    .query ('UPDATE CentroDonacion SET Nombre = @pNombre, Direccion = @pDireccion, Apertura = @pApertura, Cierre = @pCierre, Email = @pEmail,Contraseña = @pcontraseña, longitud = @pLongitud, latitud = @pLatitud  WHERE IdCentroDonacion = @pIdCentroDonacion')
    return results3.rowsAffected;
}

export const deleteById = async (IdCentroDonacion) => {
    const conn = await sql.connect(config);
    const results5 = await conn.request()
    .input("pIdCentroDonacion",sql.Int,IdCentroDonacion).query('Delete from CentroDonacion where IdCentroDonacion = @pIdCentroDonacion')
    return results5.rowsAffected; 
}


export const getById = async (IdCentroDonacion) => {
    const conn = await sql.connect(config);
    const results6 = await conn.request()
    .input("pIdCentroDonacion",sql.Int,IdCentroDonacion)
    .query("SELECT CentroDonacion.IdCentroDonacion, CentroDonacion.Nombre, CentroDonacion.Direccion, CentroDonacion.Apertura, CentroDonacion.Cierre, CentroDonacion.Email, CentroDonacion.Contraseña, CentroDonacion.Longitud,CentroDonacion.Latitud FROM CentroDonacion WHERE IdCentroDonacion = @pIdCentroDonacion") 
    return results6.recordsets;  
}
