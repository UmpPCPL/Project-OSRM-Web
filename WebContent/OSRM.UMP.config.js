/*
This program is free software; you can redistribute it and/or modify
it under the terms of the GNU AFFERO General Public License as published by
the Free Software Foundation; either version 3 of the License, or
any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program; if not, write to the Free Software
Foundation, Inc., 59 Temple Place, Suite 330, Boston, MA  02111-1307  USA
or see http://www.gnu.org/licenses/agpl.txt.
*/

// OSRM config file
// [has to be loaded directly after OSRM.base]

OSRM.DEFAULTS = {
	ROUTING_ENGINES: [
		{	url: 'http://osrm1.ump.waw.pl/OSRMauto/viaroute',
			timestamp: 'http://osrm1.ump.waw.pl/OSRMauto/timestamp',
			metric: 0,
			label: 'ENGINE_1',
		},
		{	url: 'http://osrm1.ump.waw.pl/OSRMrower/viaroute',
			timestamp: 'http://osrm1.ump.waw.pl/OSRMrower/timestamp',
			metric: 0,
			label: 'ENGINE_2',
		},
		{	url: 'http://router.project-osrm.org/viaroute',
			timestamp: 'http://router.project-osrm.org/timestamp',
			metric: 0,
			label: 'ENGINE_0',
		},
		{	url: 'http://osrm1.ump.waw.pl/OSRMpieszy/viaroute',
			timestamp: 'http://osrm1.ump.waw.pl/OSRMpieszy/timestamp',
			metric: 0,
			label: 'ENGINE_3',
		}
	],
	
	WEBSITE_URL: document.URL.replace(/#*(\?.*|$)/i,""),					// truncates URL before first ?, and removes tailing #
	HOST_GEOCODER_URL: 'http://nominatim.ict.pwr.wroc.pl/search',
	HOST_REVERSE_GEOCODER_URL: 'http://nominatim.ict.pwr.wroc.pl/reverse',
	HOST_SHORTENER_URL: 'http://umapa.pl/yourls/yourls-api.php?',
	//HOST_SHORTENER_URL: 'http://api.bitly.com/v3/shorten?',
	
	//SHORTENER_PARAMETERS: 'login=umppcpl&apiKey=R_278cc70857c73f98c9b4ae4adaf94c99&format=json&callback=%jsonp&longUrl=%url',
	SHORTENER_PARAMETERS: 'signature=4dde575d35&action=shorturl&format=jsonp&callback=%jsonp&url=%url',
	SHORTENER_REPLY_PARAMETER: 'shorturl',
	SHORTENER_REP1: 'data',
	SHORTENER_REP2: 'url',	
	COOKIE_NAME: 'ump_trasy_cookie',
	COOKIE_HOST: 'ump.waw.pl',
	COOKIE_PATH: '/',
	
	ROUTING_ENGINE: 0,
	DISTANCE_FORMAT: 0,														// 0: km, 1: miles
	GEOCODER_BOUNDS: '',	
	ZOOM_LEVEL: 14,
	HIGHLIGHT_ZOOM_LEVEL: 16,
	JSONP_TIMEOUT: 10000,
	GEOLOCATION: 0,  			// 0 disable , 1 enable
	
	ONLOAD_ZOOM_LEVEL: 8,
	ONLOAD_LATITUDE: 52.18,
	ONLOAD_LONGITUDE: 21.10,
	ONLOAD_SOURCE: "",
	ONLOAD_TARGET: "",
	
	LANGUAGE: "pl",
	LANUGAGE_ONDEMAND_RELOADING: true,
	LANGUAGE_SUPPORTED: [ 
		{encoding:"en", name:"English"},
		{encoding:"bg", name:"Български"},
		{encoding:"cs", name:"Česky"},
		{encoding:"de", name:"Deutsch"},
		{encoding:"dk", name:"Dansk"},
		{encoding:"es", name:"Español"},
		{encoding:"fi", name:"Suomi"},
		{encoding:"fr", name:"Français"},
		{encoding:"it", name:"Italiano"},
		{encoding:"lv", name:"Latviešu"},
		{encoding:"pl", name:"Polski"},
		{encoding:"ru", name:"Русский"}
	],
		
	TILE_SERVERS: [
		{	display_name: 'UMP@mapnik',
			url:'http://{s}.tiles.ump.waw.pl/ump_tiles/{z}/{x}/{y}.png',
			attribution:'Map data &copy; 2012 UMP-pcPL, Imagery &copy; 2011 Mapnik',
			options:{maxZoom: 18}
		},
		{	display_name: 'osm.org',
			url:'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
			attribution:'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 Mapnik',
			options:{maxZoom: 18}
		},
		{	display_name: 'MapQuest',
			url:'http://otile{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
			attribution:'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 MapQuest',
			options:{maxZoom: 18, subdomains: '1234'}
		},
		{	display_name: 'CloudMade',
			url:'http://{s}.tile.cloudmade.com/BC9A493B41014CAABB98F0471D759707/997/256/{z}/{x}/{y}.png',
			attribution:'Map data &copy; 2011 OpenStreetMap contributors, Imagery &copy; 2011 CloudMade',
			options:{maxZoom: 18}
		},
		{	display_name: 'UMPdev@mapnik',
			url:'http://marcom.homeip.net:1080/osm_tiles2/{z}/{x}/{y}.png',
			attribution:'Map data &copy; 2012 UMP-pcPL, Imagery &copy; 2011 Mapnik',
			options:{maxZoom: 19}
		},
		{
			display_name: 'Bing Road',
			apikey:'AjCb2f6Azv_xt9c6pl_xok96bgAYrXQNctnG4o07sTj4iS9N68Za4B3pRJyeCjGr',	// please use your own apikey (http://msdn.microsoft.com/en-us/library/ff428642.aspx) 
			options:{type:"Road", minZoom: 1},
			bing:true,
		},
		{
			display_name: 'Bing Aerial',
			apikey:'AjCb2f6Azv_xt9c6pl_xok96bgAYrXQNctnG4o07sTj4iS9N68Za4B3pRJyeCjGr',	// please use your own apikey (http://msdn.microsoft.com/en-us/library/ff428642.aspx)
			options:{type:"Aerial", minZoom: 1},
			bing:true,
		}
	],

	NOTIFICATIONS: {
		LOCALIZATION:	1800000,	// 30min
		CLICKING: 		2200000,	// >30min
		DRAGGING: 		3100000,	// >40min 
		MAINTENANCE:	false
	},
	OVERRIDE_MAINTENANCE_NOTIFICATION_HEADER: undefined,
	OVERRIDE_MAINTENANCE_NOTIFICATION_BODY: undefined
};
