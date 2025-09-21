import channels from "../models/channel.model.js";

class ChannelRepository {
    static async createChannel(name, workspaces, url_image){
        await channels.insertOne({
            name: name,
            workspaces: workspaces,
            url_image: url_image
        })
        return true
    }
    static async getAll (){
        const channel_list = await channels.find() 
        return channel_list
    }
    static async getById(channel_id){
        const channel_found = await channels.findById(channel_id)
        return channel_found
    }
    static async deleteById(channel_id){
        await channels.findByIdAndDelete(channel_id)
        return true
    }
    static async updateById(channel_id, new_values){
        const channel_updated = await channels.findByIdAndUpdate(channel_id, new_values, {
            new: true 
        }) 
        return channel_updated
    }
}

export default ChannelRepository