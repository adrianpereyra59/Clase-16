import MemberWorkspaces from "../models/MemberWorkspaces.model.js";

class MemberWorkspacesRepository {
    static async createMember (id, fk_id_workspace, fk_id_user, role){
        await MemberWorkspaces.insertOne({
            id: id,
            fk_id_workspace: fk_id_workspace,
            fk_id_user: fk_id_user,
            role: role
        })
        return true
    }
    static async getAll (){
        const memberWorkspaces_list = await MemberWorkspaces.find() 
        return memberWorkspaces_list
    }
    static async getById(memberWorkspaces_id){
        const memberWorkspaces_found = await MemberWorkspaces.findById(memberWorkspaces_id)
        return memberWorkspaces_found
    }   
    static async deleteById(memberWorkspaces_id){
        await MemberWorkspaces.findByIdAndDelete(memberWorkspaces_id)
        return true
    }
    static async updateById(memberWorkspaces_id, new_values){
        const memberWorkspaces_updated = await MemberWorkspaces.findByIdAndUpdate(memberWorkspaces_id, new_values, {
            new: true 
        }) 
        return memberWorkspaces_updated
    }
} 

export default MemberWorkspacesRepository
