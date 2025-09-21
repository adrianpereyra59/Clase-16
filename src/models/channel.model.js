import mongoose from "mongoose";
import workspaces from "./Workspace.model.js";

const channelSchema = new mongoose.Schema (
    {
        name :{
            type: String,
            required: true
        },
        workspaces: {
            type: mongoose.Schema.Types.ObjectId,
            ref: workspaces,
            required: true
        },
        private: {
            type: Boolean,
            default: false
        },
        active : {
            type: Boolean,
            default: true
        },
        url_image: {
            type: String
        },
        created_at: {
            type: Date,
            default: Date.now
        },
        modified_at: {
            type: Date,
            default: Date.now
        },
        
    }
)

const channels = mongoose.model('channel', channelSchema);   
export default channels