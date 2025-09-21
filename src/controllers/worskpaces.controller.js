import WorkspaceRepository from "../repositories/workspace.repository.js"
import { validarId } from "../utils/validations.utils.js"
import { serverError } from "../utils/customError.utils.js"
//Vamos a tener las funciones que se encargaran de manejar las respuestas de las consultas y las respuestas

class  WorkspaceController {
    static async post(request, response) {
    try {   //request.body es dondeesta la carga util enviada por el cliente
        //si aplicamos express.json() en nuestra app body siempre sera de tipo objeto
        const name = request.body.name
        //validar que name este y que sea valido(por ejemplo un string no VACIOde no mas de 30 caracteres)
        if (!name || typeof name !== 'string' || name.length > 30) {
            /* return response.status(400).json( */
            /*  {
                 ok: false,
                 status: 400,
                 message: "el campo 'name' debe ser un string de menos de 30 caracteres"
             } */
            throw new serverError(
                400,
                "el campo 'name' debe ser un string de menos de 30 caracteres"
            )
        }

        else {
            //creamos el workspace con el respository
            await WorkspaceRepository.workspaceCreate(name, '')


            //si todo salio bien respondemos con {pk:truse, message: 'workspace creado con exito'}
            response.status(201).json(
                new serverError(
                    201,
                    'workspace creado con exito'
                )
                /* {
                    ok: true,
                    status: 201,
                    message: 'workspace creado con exito'
                } */
            )
        }
        /*   console.log("nombre recibido: ", name)
          console.log("body recibido: ", request.body) */

        // ✅ SOLO UNA RESPUESTA
        /* response.send( "ok recibido ") */
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
static async getById(request, response)  {
    try {
    const workspace_id = request.params.workspace_id

    if (validarId(workspace_id)) {

        const workspace = await WorkspaceRepository.getById(workspace_id)

        if (!workspace) {
            return response.json(
                {
                    ok: false,
                    message: `workspace con id ${workspace_id} no existe`
                }
            )
        }
        return response.json(
            {
                ok: true,
                msessage: `Workspace con id ${workspace_id} obtenido`,
                data: {
                    workspace: workspace
                }
            }
        )
    }
    else {
        return response.json(
            {
                ok: false,
                message: 'El ID del workspace no es valido'
            }
        )
    }
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
static async getAll (request, response) {
    try {
    const workspaces = await WorkspaceRepository.getAll()
    response.json(
        {
            status: 'ok',
            message: 'lista de espacios de trabajos obtenida correctamente',
            workspaces: workspaces
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
                    message: 'Error interno del servidor'
                }
            )
        }
    }
}
}

export default WorkspaceController