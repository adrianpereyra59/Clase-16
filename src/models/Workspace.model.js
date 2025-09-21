import mongoose from "mongoose";

//En base a lo aprendido en User.model.js ahora crear un Workspace.model.js
//name, url_image, modified_at, created_at, active

const WorkspaceSchema = new mongoose.Schema (
    {
        name :{
            type: String,
            required: true
        },
        url_image: {
            type: String
        },
        modified_at: {
            type: Date,
            default: Date.now
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        active : {
            type: Boolean,
            default: true
        },
    }
)



const workspaces = mongoose.model('workspace', WorkspaceSchema);
export default workspaces