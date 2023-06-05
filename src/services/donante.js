import Donante from "../Models/donante.js";
import sql from 'mssql';
import config from '../Models/db.js'

export const getAll = async () =>{
    const conn = await sql.connect(config);
    const result = conn.request().query('SELECT * FROM Donante')
    return result;
}

export const Create = async (donante) =>{
    const conn = await  sql.connect(config);// para conectar a la base de datos
    const results2 = await conn.request() // para guardar el resultado 
    .input ("pNombre",sql.VarChar,donante.nombre)
    .input ("pApellido",sql.VarChar,donante.apellido)
    .input ("pFechaDeNacimiento",sql.Date,donante.fechaDeNacimiento)
    .input ("pDNI",sql.Int,donante.dni)
    .input ("pEmail",sql.VarChar,donante.email)
    .input ("pContraseña",sql.VarChar,donante.contraseña)
    .input ("pPeso",sql.Int,donante.peso)
    .input ("pBuenaSalud",sql.Bit,donante.buenaSalud)
    .input ("pEmbarazo",sql.Bit,donante.embarazo)
    .input ("pSexo",sql.VarChar,donante.sexo)
    .input ("pFechaDonacion",sql.Date,donante.fechaDonacion)
    .input ("pMedicamentos",sql.Bit,donante.medicamentos)
    .input ("pHepatitisBC",sql.Bit,donante.hepatitisBC)
    .input ("pParto",sql.Date,donante.parto)
    .input ("pOperacion",sql.Date,donante.operacion)
    .input ("pAntitetanica",sql.Date,donante.antitetanica)
    .input ("pUltimoTatuaje",sql.Date,donante.ultimoTatuaje)
    .input ("pUltimoHierro",sql.Date,donante.ultimoHierro)
    .input ("pLactanciaMaterna",sql.Bit,donante.lactanciaMaterna)
    .input ("pFinMononucleosis",sql.Date,donante.finMononucleosis)
    .input ("pAntipaludicos",sql.Date,donante.antipaludicos)
    .input ("pITS",sql.Bit,donante.its)
    .input ("pPuntos",sql.Int,donante.puntos)
    .input ("pTipoSangre",sql.VarChar,donante.tipoSangre)
    
    .query('INSERT INTO Donante (Nombre,Apellido,FechaDeNacimiento,DNI,Email,Contraseña,Peso,BuenaSalud,Embarazo,Sexo,FechaDonacion,Medicamentos,HepatitisBC,Parto,Operacion,Antitetanica,UltimoTatuaje,UltimoHierro,LactanciaMaterna,FinMononucleosis,Antipaludicos,ITS,Puntos,TipoSangre) VALUES (@pNombre, @pApellido, @pFechaDeNacimiento, @pDNI, @pEmail,@pContraseña,@pPeso,@pBuenaSalud,@pEmbarazo,@pSexo,@pFechaDonacion,@pMedicamentos,@pHepatitisBC,@pParto,@pOperacion,@pAntitetanica,@pUltimoTatuaje,@pUltimoHierro,@pLactanciaMaterna,@pFinMononucleosis,@pAntipaludicos,@pITS,pPuntos,@pTipoSangre)')
    return results2;
}

export const Update = async(Id,donante)=>{
    const conn = await sql.connect (config); // para conectar a la base de datos
    const results3 = await conn.request()
    .input ("pId",sql.Int,Id)
    .input ("pNombre",sql.VarChar,donante.nombre)
    .input ("pApellido",sql.VarChar,donante.apellido)
    .input ("pFechaDeNacimiento",sql.Date,donante.fechaDeNacimiento)
    .input ("pDNI",sql.Int,donante.dni)
    .input ("pEmail",sql.VarChar,donante.email)
    .input ("pContraseña",sql.VarChar,donante.contraseña)
    .input ("pPeso",sql.Int,donante.peso)
    .input ("pBuenaSalud",sql.Bit,donante.buenaSalud)
    .input ("pEmbarazo",sql.Bit,donante.embarazo)
    .input ("pSexo",sql.VarChar,donante.sexo)
    .input ("pFechaDonacion",sql.Date,donante.fechaDonacion)
    .input ("pMedicamentos",sql.Bit,donante.medicamentos)
    .input ("pHepatitisBC",sql.Bit,donante.hepatitisBC)
    .input ("pParto",sql.Date,donante.parto)
    .input ("pOperacion",sql.Date,donante.operacion)
    .input ("pAntitetanica",sql.Date,donante.antitetanica)
    .input ("pUltimoTatuaje",sql.Date,donante.ultimoTatuaje)
    .input ("pUltimoHierro",sql.Date,donante.ultimoHierro)
    .input ("pLactanciaMaterna",sql.Bit,donante.lactanciaMaterna)
    .input ("pFinMononucleosis",sql.Date,donante.finMononucleosis)
    .input ("pAntipaludicos",sql.Date,donante.antipaludicos)
    .input ("pITS",sql.Bit,donante.its)
    .input ("pPuntos",sql.Int,donante.puntos)
    .input ("pTipoSangre",sql.VarChar,donante.tipoSangre)
    .query ('UPDATE Donante SET Nombre = @pNombre, Apellido = @pApellido, FechaDeNacimiento = @pFechaDeNacimiento, DNI = @pDNI, Email = @pEmail, Contraseña = @pContraseña, Peso = @pPeso, BuenaSalud = @pBuenaSalud, Embarazo = @pEmbarazo, Sexo = @pSexo, FechaDonacion = @pFechaDonacion, Medicamentos = @pMedicamentos, HepatitisBC = @pHepatitisBC, Parto = @pParto, Operacion = @pOperacion, Antitetanica = @pAntitetanica, UltimoTatuaje = @pUltimoTatuaje, UltimoHierro = @pUltimoHierro, LactanciaMaterna = @pLactanciaMaterna, FinMononucleosis = @pFinMononucleosis, Antipaludicos = @pAntipaludicos, ITS = @pITS, Puntos = @pPuntos, TipoSangre = @pTipoSangre WHERE Id = @pId')
    return results3.rowsAffected;
}

export const deleteById = async (Id) => {
    const conn = await sql.connect(config);
    const results5 = await conn.request()
    .input("pId",sql.Int,Id).query('Delete from Donante where Id = @pId')
    return results5.rowsAffected; 
}


export const getById = async (Id) => {
    const conn = await sql.connect(config);
    const results6 = await conn.request()
    .input("pId",sql.Int,Id)
    .query("SELECT *  FROM Donante WHERE Id = @pId") 
    return results6.recordsets;  
}
