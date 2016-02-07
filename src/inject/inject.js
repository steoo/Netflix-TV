import model from "../classes/model.js";
import Controller from "../classes/controller.js";
import { ChannelsContainer } from "../classes/channel.js";

let channelsContainer = new ChannelsContainer(".billboard-row");
let controller = new Controller(channelsContainer, model);

chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            //appendChannels();
            console.log(model);
            channelsContainer.render();
            controller.renderChannels();
        }
    }, 10);
});



function appendChannels() {
    let div = '<div class="lolomoRow lolomoRow_title_card"><h2 class="rowHeader"><a href="/browse/genre/1365" class="rowTitle">Channel 1</a></h2></div>';
    let $after = (".billboard-row");

    $(div).insertAfter($after);
}