/**
 * 
 */
function paramsToString(params){
	var paramArray = [];
	for(var o in params) if (params[o] != undefined) {
		paramArray.push(encodeURIComponent(o)+'='+encodeURIComponent(params[o]));
	}
	return paramArray.join("&");
}


function stringToParams(str,params){
	params = params || {};
	if (str == undefined)
		return params;
	var arr = str.split("&");
	for (j=0; j<arr.length; j++) {
		var pair = arr[j].split("=");
		params[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	}
	return params;
}


function loadCookieOptions(cookie_name) {
	if (document.cookie=="") return {};
	var cookieArr = document.cookie.split("; ");
	var opts = {};
	for (i=0; i<cookieArr.length; i++) {
		var cookiePair = cookieArr[i].split("=");
		if (cookiePair[0] == encodeURIComponent(cookie_name)) {
			opts = stringToParams(decodeURIComponent(cookiePair[1]),opts);
		}
	}
	return opts;
} 

function saveCookieOptions(cookie_name, opts) {
	var expiry = new Date();
	expiry.setYear(expiry.getFullYear() + 10);
	var c = encodeURIComponent(cookie_name)+"="
	+ encodeURIComponent(paramsToString(opts)) + "; expires=" + expiry.toGMTString()
	+ "; path=" + OSRM.DEFAULTS.COOKIE_PATH
	+ "; domain=" + OSRM.DEFAULTS.COOKIE_HOST;
	document.cookie =c;
} 

function saveMapPosCookie(map) {
	var cookieOptions ={};
	var pos=map.getCenter();
        cookieOptions.lon = pos.lng.toFixed(5);
        cookieOptions.lat = pos.lat.toFixed(5);
        cookieOptions.zoom = map.getZoom();
	cookieOptions.tstamp = Date.now();
        saveCookieOptions(OSRM.DEFAULTS.COOKIE_NAME,cookieOptions);
}
