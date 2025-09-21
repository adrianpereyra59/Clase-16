import AuthService from "../services/auth.service.js";
import { serverError } from "../utils/customError.utils.js";

class AuthController {
    static async register(request, response) {
        try {
            /* 
            recibiremos un username, email, pasword
            Vlidar los 3 campos
             */
            const {
                username,
                email,
                password
            } = request.body

            if (!username) {
                throw new serverError(
                    400,
                    'Debes enviar un nombre de usuario valido'
                )
            }

            // si no hay email o el email no es valido
            //toLowerCase() convierte todo a minusculas
            //match() evalua si el email cumple con la expresion regular
            else if (!email || !String(email).toLowerCase().match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)) {
                throw new serverError(
                    400,
                    'Debes enviar un email valido'
                )
            }
            else if (!password || password.length < 8) {
                throw new serverError(
                    400,
                    'Debes enviar una contraseña'
                )
            }
            else if (!password || password.length < 8) {
                throw new serverError(
                    400,
                    'Debes enviar una contraseña de 8 caracteres o mas'
                )
            }
            
            await AuthService.register(username, email, password)

            response.json(
                {
                    ok: true,
                    message: 'Usuario creado con exito'
                }
            )
        
        }

        catch (error) {
            //Evaluamos is es un error que nosotros definimos
            if (error.status) {
                return response.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                return response.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: 'Error interno del servidor controller'
                    }
                )
            }
        }
    }

    static async login(request, response) {
        try {
        }
        catch (error) {
            //Evaluamos is es un error que nosotros definimos
            if (error.status) {
                return response.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                return response.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: 'Error interno del servidor'
                    }
                )
            }
        }
    }
    static async verifyEmail(request, response) {
        try {
        }
        catch (error) {
            //Evaluamos is es un error que nosotros definimos
            if (error.status) {
                return response.status(error.status).json(
                    {
                        ok: false,
                        status: error.status,
                        message: error.message
                    }
                )
            }
            else {
                return response.status(500).json(
                    {
                        ok: false,
                        status: 500,
                        message: 'Error interno del servidor'
                    }
                )
            }
        }
    }
}

export default AuthController;