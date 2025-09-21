import dotenv from "dotenv";
//carga todas las variables de entorno dentro del process.env
dotenv.config();
//creamos una constante de facil acceso a mis variables de entorno
const ENVIRONMENT = {
    MONGO_DB_CONNECTION_STRING : process.env.MONGO_DB_CONNECTION_STRING,
    GMAIL_PASSWORD: process.env.GMAIL_PASSWORD
}

export default ENVIRONMENT