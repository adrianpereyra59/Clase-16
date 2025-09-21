import Users from "../models/User.model.js"

class UserRepository {
    static async createUser(name, email, password){
        //logica de interaccoin con la DB para crear el usuario
        await Users.insertOne({ //await para que termine la operacion y no siga ejecutandose el codigo
            name: name,
            email: email,   
            password: password,
     })
        return true
    }    

    static async getAll (){
        //.find es un metodo para hacer filtro en una coleccion
        const users = await Users.find() //devuelve todos los usuarios
        return users
    }
    static async getById(user_id){
        const user_found = await Users.findById(user_id)
        return user_found
    }
    static async deleteById(id){
        await Users.findByIdAndDelete(user_id)
        return true
    }
    static async updateById(user_id, new_values){
        const user_updated = await Users.findByIdAndUpdate(user_id, new_values, {
            new: true //new:true para que me devuelva el objeto actualizado
        }) 
        return user_updated
    }
    static async getByEmail(email){
        const user = await Users.findOne({email: email})
        return user
    }
}

export default UserRepository

//un metodo o pripiedad estatica puede ser llamado desde la clase. sin necesidad de instanciar dicha clase
//por que usar estaticos? para no tener mas de una instancia del userRespository

/*
Este el el metodo con que lo haciamos antes... ahora vamos a usar estaticos
const userRespository = new UserRepository()
UserRepository.createUser()  */