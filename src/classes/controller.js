/**
 * Classic MVC controller for communication between channel view and its model
 * */
import { Channel, ChannelsContainer } from "../classes/channel.js";

class Controller {
    constructor(view, model){
        this.view = view;
        this.model = model;
    }

    renderChannels(){
        console.log(this.model.length, this.model.getCategory(1));
        for(let i = 0; i<this.model.length; i++){
            let channel = new Channel(this.model.getCategory(i));
            this.view.renderChannel(channel);
        }

    }
}

export default Controller;