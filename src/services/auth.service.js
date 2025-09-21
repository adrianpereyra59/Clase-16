import transporter from "../config/mailer.config.js"
import UserRepository from "../repositories/user.repository.js"
import auth_router from "../routes/auth.router.js"
import { serverError } from "../utils/customError.utils.js"
import bcrypt from 'bcrypt'
class AuthService {
    static async register(username, email, password) {
        console.log(username, email, password)

        //Verificar que el usuario no este repetido
        //debemos crear .getByEmail en userRepository
        /*  const user_found = await UserRepository.getByEmail(email)
         if (user_found) {
             throw new serverError(
                 400,
                 'El email ya existe'
             )
         } */
        //Encriptar la contraseña
        //creamos un Hash(encriptacion de password) con bcrypt, las rondas determinan el costo de computo tiene q ser mayor a 10
        //const password_hashed = await bcrypt.hash(password, 12)


        //guardar en la DB
        //await UserRepository.createUser(username, email, password_hashed)


        //Enviar un mail de verificacion
        await transporter.sendMail({
            from: 'pruevasdeveloperweb@gmail.com',
            to: 'pruevasdeveloperweb@gmail.com',
            subject: 'Verificacion de cuenta',
            html: `
            <h1>Hola desde node.js</h1>
            <p>este es un correo de verificacion</p>
            `,
        })

    }
}


export default AuthService