var link=document.getElementById("nabblelink");
if (link != null) {
	link.style.display="none";
	document.write("<div id='nabbleforum' style='width:100%'><div style='height:700px'><img src='http://n8.nabble.com/images/loading.png' width='94' height='33' alt='Loading...'></div></div>");
	var e = document.createElement("script");
	e.src = 'http://n8.nabble.com/embed/JsEmbed.jtp?site=62767&node=1&url=' + encodeURIComponent(location.href);
            e.type="text/javascript";
	document.getElementsByTagName("head")[0].appendChild(e);
}