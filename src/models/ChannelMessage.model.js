import mongoose from "mongoose";

const channelMessageSchema = new mongoose.Schema (
    {
        fk_sender_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "memberWorkspaces",
            required: true
        },
        fk_id_channel: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "channels",
            required: true
        },
        
        content: {
            type: String,
            required: true
        },
        created_at: {
            type: Date,
            default: Date.now
        }
    }
)

const channelMessage = mongoose.model('channelMessage', channelMessageSchema);  

export default channelMessage   
        