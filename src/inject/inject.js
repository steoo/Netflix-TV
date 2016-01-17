var div = '<div class="lolomoRow lolomoRow_title_card"><h2 class="rowHeader"><a href="/browse/genre/1365" class="rowTitle">Channel 1</a></h2></div>';
chrome.extension.sendMessage({}, function(response) {
	var readyStateCheckInterval = setInterval(function() {
	if (document.readyState === "complete") {
		clearInterval(readyStateCheckInterval);

		// ----------------------------------------------------------
		// This part of the script triggers when page is done loading
		console.log("Hello. This message was sent from scripts/inject.js");
		// ----------------------------------------------------------
		appendChannels();
	}
	}, 10);
});


function appendChannels(){
	console.log(jQuery);
	$after = (".billboard-row");
	$div = $(div);
	$(div).insertAfter($after);
}