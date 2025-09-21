import mongoose from "mongoose";

export function validarId (id){
    //Devolvera verdadero en caso de que el id sea valido, sino devolvera false
    //isValidObjectId es un metodo de mongoose que valida si el id tiene el formato correcto de un ObjectId de MongoDB
    return mongoose.isValidObjectId(id)
}
