import mongoose from "mongoose"
import ENVIRONMENT from "./environment.config.js"



async function connectMongoDB(){
    try{
        await mongoose.connect(ENVIRONMENT.MONGO_DB_CONNECTION_STRING)
        console.log('la conexion con MongoDB fue exitosa')
    }
    catch(error){
        console.error('la conexion con MongoDB fallo')
        console.log(error)
    }
}
    connectMongoDB()

export default connectMongoDB



/* let key
//voy a comprobar si existe una clave, si no hay clave definida quierop que el programa falle
try {
    if (key){
        console.log('llave correctamente configurada')
        }
        else {
            console.log('no hay llave configurada, ABORTAR EJECUCION')
        }

} catch (error) {
    console.log(error)
    throw error //esto hace que nuetro programa crashee
} */