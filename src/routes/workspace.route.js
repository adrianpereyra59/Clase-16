import express, { request } from 'express';
import WorkspaceRepository from '../repositories/workspace.repository.js';
import { validarId } from '../utils/validations.utils.js';
import workspaces from '../models/Workspace.model.js';
import { serverError } from '../utils/customError.utils.js';
import WorkspaceController from '../controllers/worskpaces.controller.js';


//manejar consultas referidas a workspaces

//aca estamos creando un enrutqdor de express
const workspaces_router = express.Router();

// api/workspaces/test
workspaces_router.get('/', WorkspaceController.getAll)

// /api/workspaces/ se ejecutara esta funcion
workspaces_router.get('/:workspace_id', WorkspaceController.getById) 
/* workspaces_router.post('/', (request, response) => {
    response.send('Hello World post!')
    const name = request.body.name
    console.log('nombre recibido: ', name)
    console.log('body recibido: ', request.body)

    return response.send(name)
}) */


//este es el endpoint para crear workspaces
// ✅ ENDPOINT POST CORREGIDO
workspaces_router.post("/", WorkspaceController.post)


export default workspaces_router