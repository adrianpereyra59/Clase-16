import express from "express";
import ENVIRONMENT from "./config/environment.config.js";
import connectMongoDB from "./config/mongoDB.cinfig.js";
import workspaces_router from "./routes/workspace.route.js";
import auth_router from "./routes/auth.router.js";



const app = express();


app.use(express.json())

app.use('/api/workspaces', workspaces_router)
app.use('/api/auth', auth_router)





app.listen(
    8080,
    () => {    
    console.log('esto esta funcionando')
    }
)

