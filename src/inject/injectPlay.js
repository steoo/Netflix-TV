
var string = doTheTrick.toString();
var elt = document.createElement("script");
elt.innerHTML = "(" + string + ")()";
document.head.appendChild(elt);

function doTheTrick(){
	var url = [window.location.host, "/watch/"];
	var videos = window.netflix.falkorCache.videos;
	var	keys = [];
	for(var key in videos){
		var id = +key;
		if(!isNaN(id))
			keys.push(id);
	}
	var length = keys.length;
	var random = Math.ceil(Math.random() * length);
	var rndmid = keys[random];
	url[2] = rndmid;
	url = url.join("");
	console.log(keys.length, rndmid);
	console.log("Picking random key..", random, url);
	window.history.pushState({id: rndmid}, "watch", "/watch/"+rndmid);
	setTimeout(function(){
		window.location.reload();
	}, 100);
}