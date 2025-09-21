import workspaces from "../models/Workspace.model.js";

class WorkspaceRepository {
    //getAll
    //getById
    //create
    //updateById
    //deleteById
    static async workspaceCreate(name, url_image){
        await workspaces.insertOne({
            name: name,
            url_image: url_image,   
     })
        return true
    }
    static async getAll (){
        const workspaces_list = await workspaces.find() 
        return workspaces_list
    }

    static async getById(workspace_id){
        const workspace_found = await workspaces.findById(workspace_id)
        return workspace_found
    }
    static async deleteById(workspace_id){
        await workspaces.findByIdAndDelete(workspace_id)
        return true
    }   
    static async updateById(workspace_id, new_values){
        const workspace_updated = await workspaces.findByIdAndUpdate(workspace_id, new_values, {
            new: true 
        }) 
        return workspace_updated
    }
}

export default WorkspaceRepository

