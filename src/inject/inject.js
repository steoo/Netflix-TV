import categories from "../data/categories.js";
import channel from "../classes/channel.js";

console.log("Availables:", categories);

chrome.extension.sendMessage({}, function (response) {
    var readyStateCheckInterval = setInterval(function () {
        if (document.readyState === "complete") {
            clearInterval(readyStateCheckInterval);

            appendChannels();
        }
    }, 10);
});



function appendChannels() {
    let div = '<div class="lolomoRow lolomoRow_title_card"><h2 class="rowHeader"><a href="/browse/genre/1365" class="rowTitle">Channel 1</a></h2></div>';
    let $after = (".billboard-row");

    $(div).insertAfter($after);
}