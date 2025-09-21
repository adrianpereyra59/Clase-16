import nodemailer from "nodemailer";
import ENVIRONMENT from "./environment.config.js";

console.log("GMAIL_PASSWORD:", !!ENVIRONMENT.GMAIL_PASSWORD)
//la configuracion para nuestro mailer
const transporter = nodemailer.createTransport(
    {
        service: 'gmail',
        auth: {
            user: 'pruevasdeveloperweb@gmail.com',
            pass: ENVIRONMENT.GMAIL_PASSWORD //cambia por la contraseña de tu GMAIL ACCOUNT.
        }

    }
)


export default transporter