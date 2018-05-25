var link=document.getElementById("nabblelink");
var Nabble = new Object();
Nabble.defaultHeight = 700;
Nabble.currentHeight = 0;
Nabble.counter = 0;
Nabble.title = document.title == ""? "" : document.title + " - ";
Nabble.resizeTimeoutID;
Nabble.context = 'http://hdmoviesbox.62767.n8.nabble.com';
Nabble.defaultUrl = 'http://hdmoviesbox.62767.n8.nabble.com/';

Nabble.get = function(id) { return document.getElementById(id); };

Nabble.resizeTimeout = function() {
	Nabble.resizeTimeoutID = setTimeout(Nabble.showMoreLink, 6000);
};

Nabble.cancelTimeout = function() {
	if (Nabble.resizeTimeoutID) {
		clearInterval(Nabble.resizeTimeoutID);
		Nabble.get('nabblemore').style.display = 'none';
		Nabble.resizeTimeoutID = null;
	}
};

Nabble.showMoreLink = function() {
	if (Nabble.resizeTimeoutID) {
		Nabble.get('nabblemore').style.display = 'block';
	}
};

        Nabble.showMore = function() {
	if (Nabble.currentHeight == 0)
		Nabble.currentHeight = Nabble.defaultHeight;
	Nabble.currentHeight += 300;
	Nabble.get('nabbleiframe').style.height = Nabble.currentHeight + 'px';
};

Nabble.escape = function(value) {
	if (typeof value == 'string') {
		var hasSpace = value.indexOf(' ') >= 0;
		var hasQuote = value.indexOf('"') >= 0;

		value = value.replace(/\;/g, '%3B');
		value = value.replace(/"/g, '\\"');

		if (hasSpace || hasQuote)
			value = '"' + value + '"';
	}
	return value;
};

Nabble.unescape = function(value) {
	if (value.charAt(0) == '"' && value.charAt(value.length-1) == '"')
		value = value.substring(1, value.length-1);

	value = value.replace(/\\"/g, '"');
	value = value.replace(/%3B/g, ';');
	return value;
};

        Nabble.setCookie = function(name, value) {
	name = name+'62767';
	document.cookie = name + "=" + Nabble.escape(value) + "; path=/";
};

Nabble.getCookie = function(name) {
	name = name+'62767';
	var dc = document.cookie;
	var prefix = name + "=";
	var begin = dc.indexOf("; " + prefix);
	if (begin == -1) {
		begin = dc.indexOf(prefix);
		if (begin != 0) return null;
	} else
		begin += 2;
	var end = document.cookie.indexOf(";", begin);
	if (end == -1)
		end = dc.length;
	return Nabble.unescape(dc.substring(begin + prefix.length, end));
};

Nabble.setPersistentCookie = function(name, value) {
	name = name+'62767';
	var expires = new Date();
	expires.setFullYear(expires.getFullYear()+10);
	var curCookie = name + "=" + Nabble.escape(value) + "; expires=" + expires.toGMTString() + "; path=/";
	document.cookie = curCookie;
};

        Nabble.deleteCookie = function(name) {
	name = name+'62767';
	document.cookie = name + "=" +
	"; path=/"  +
	"; expires=Thu, 01-Jan-1970 00:00:01 GMT";
};

Nabble.noHash = function(url) {
	var pos = url.indexOf('#');
	return (pos>-1)?url.substring(0, pos):url;
};

Nabble.debug = function(s) {
	if (Nabble.debugElement == 0)
		return;
	if (!Nabble.debugElement) {
		Nabble.debugElement = Nabble.get('debug');
		if (!Nabble.debugElement) {
			Nabble.debugElement = 0;
			return;
		}
	}
	Nabble.debugElement.innerHTML = Nabble.debugElement.innerHTML+s+'<br/>';
};

Nabble.loadScript = function(url) {
	Nabble.debug('Loading script: ' + url);
	var e = document.createElement("script");
	e.src = url;
	e.type="text/javascript";
	document.getElementsByTagName("head")[0].appendChild(e);
};

Nabble.getJs = function(keys) {
	if (!window.clientID)
		return;
	var p = '';
	for (var i=0;i<keys.length;i++) {
		p += '&key=' + keys[i];
	}
	var url = Nabble.context+"/util/SessionService.jtp?action=get" + p + "&cid=" + window.clientID + "&_=" + new Date().getTime();
	Nabble.loadScript(url);
};

Nabble.scroll = function(y) {
	Nabble.debug('[scroll] y=' + y);
	if (y == 1 && window.nabble_scroll_top) {
		scrollTo(0, 0);
	} else if (y > 0 && !window.nabble_ignore_scroll) {
		var obj = Nabble.get('nabbleiframe');
		do {
			y += obj.offsetTop;
		} while (obj = obj.offsetParent);
		scrollTo(0, y);
	}
};

Nabble.resizeFrames = function(height,title,validHeight) {
	if (document.title != title && !window.nabble_ignore_title)
		document.title = title;
	Nabble.debug('[resizeFrames] Counter = ' + (Nabble.counter++) + ' Height = ' + height + ' Title=[' + title + '] History=' + history.length + ' -- cid=' + window.clientID);

	if (height != Nabble.currentHeight) {
		Nabble.currentHeight = height;
       			var f = Nabble.get('nabbleiframe');
		if (f) {
			f.scrolling = validHeight? 'no' : 'auto';
			Nabble.debug('Scrolling=' + f.scrolling);
			f.style.height = height + 'px';
			Nabble.cancelTimeout();
		}
	}
};

Nabble.getCurrentUrl = function() {
	var currentUrl = Nabble.defaultUrl;
	if (Nabble.hash.indexOf('#nabble+') == 0) {
		var path = Nabble.hash.substring(8);
		path = decodeURIComponent(path);
		path = path
			.replace(/</g,'%3C')
			.replace(/>/g,'%3E')
			.replace(/"/g,'%22')
			.replace(/'/g,'%27');
		currentUrl = Nabble.context+"/" + path;
	}
	currentUrl += Nabble.realHash == ''? '' : '#' + Nabble.realHash;
	return currentUrl;
};

Nabble.getClientID = function() {
	var clientID = Nabble.getCookie('clientID');
	if (!clientID) {
            	clientID = new Date().getTime() + '-' + Math.ceil(Math.random() * 1000);
		Nabble.setCookie('clientID', clientID);
	}
	return clientID;
};

Nabble.restart = function(nodeId, baseUrl) {
	Nabble.debug('Restart -- baseUrl=' + baseUrl);
	Nabble.context = baseUrl;
	Nabble.defaultUrl = baseUrl+'/';
	Nabble.start();
};

Nabble.getConf = function() {
	return window.nabble_ignore_scroll? 'noscroll;':'';
};

Nabble.start = function() {
	Nabble.infoLoaded = false;
	window.clientID = Nabble.getClientID();

	
	var hash = location.hash;
	var pipe = hash.indexOf('|');
	var realHash = '';
	if (pipe > 0) {
		
		realHash = hash.substring(pipe);
		hash = hash.replace(realHash, '');
		realHash = realHash.substring(1);
	}
	
	Nabble.hash = hash;
	Nabble.realHash = realHash;
	Nabble.infoUrl = Nabble.context+"/embed/EmbedInfo.jtp?node=1&cid=" + window.clientID + "&hash=" + realHash + '&conf=' + Nabble.getConf() + "&_=" + new Date().getTime() + "#" + Nabble.noHash(location.href);
	var emptyUrl = Nabble.context+"/util/Empty.jtp";
	var html = "<div id='nabblemain'><div style='height:700px'><img src='http://n8.nabble.com/images/loading.png' width=94 height=33 alt='Loading...'></div></div>";
	html += "<div id='nabblemore' style='display:none'><a href=\"javascript: void Nabble.showMore()\">view more</a></div>";
	html += "<iframe name='nabbleinfo' id='nabbleinfo' width='1' height='1' style='display:none' src=''></iframe>";
	html += "<iframe name='nabbleresize' onload='Nabble.getJs([\"resizejs\", \"scrolljs\", \"others\"])' width='1' height='1' style='display:none' src='" + emptyUrl + "'></iframe>";
	html += "<iframe name='nabbleready' onload='Nabble.loadMain()' width='1' height='1' style='display:none' src='" + emptyUrl + "'></iframe>";
	var div = Nabble.get('nabbleforum');
	div.innerHTML = html;
};


Nabble.loadMain = function() {
	Nabble.debug('Loading main page...infoLoaded='+Nabble.infoLoaded);
	if (!Nabble.infoLoaded) {
		Nabble.debug('InfoUrl='+Nabble.infoUrl);
		Nabble.get('nabbleinfo').setAttribute('src',Nabble.infoUrl);
		Nabble.infoLoaded = true;
		return;
	}
	var width = window.nabble_width? window.nabble_width : '100%';
	var currentUrl = Nabble.getCurrentUrl();
	Nabble.debug('CurrentUrl='+currentUrl);
	var m = '<iframe name="nabbleiframe" id="nabbleiframe" src="' + currentUrl + '" width="' + width + '" height="' + Nabble.defaultHeight + '" frameBorder="0" scrolling="no" allowtransparency="true"></iframe>';
	Nabble.get('nabblemain').innerHTML = m;
	Nabble.resizeTimeout();
}

Nabble.start();
