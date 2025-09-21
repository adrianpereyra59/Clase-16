import channelMessage from "../models/ChannelMessage.model.js";

class ChannelMessageRepository {
    static async createChannelMessage(fk_sender_id, fk_id_channel, content){
        await channelMessage.insertOne({
            fk_sender_id: fk_sender_id,
            fk_id_channel: fk_id_channel,
            content: content
        })
        return true
    }
    static async getAll (){
        const channelMessage_list = await channelMessage.find() 
        return channelMessage_list
    }
    static async getById(channelMessage_id){
        const channelMessage_found = await channelMessage.findById(channelMessage_id)
        return channelMessage_found
    }   
    static async deleteById(channelMessage_id){
        await channelMessage.findByIdAndDelete(channelMessage_id)
        return true
    }
    static async updateById(channelMessage_id, new_values){
        const channelMessage_updated = await channelMessage.findByIdAndUpdate(channelMessage_id, new_values, {
            new: true 
        }) 
        return channelMessage_updated
    }
}

export default ChannelMessageRepository
