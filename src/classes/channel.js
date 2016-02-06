class Channel {

    constructor(id, name){
        this.id = id;
        this.name = name;
    }

    render(){
        let name = this.name,
            id = this.id;
        return `<div class="lolomoRow lolomoRow_title_card"><h2 class="rowHeader">
                <a href="/browse/genre/#{id}" class="rowTitle">#{name}</a></h2></div>`;
    }
}


export default Channel;