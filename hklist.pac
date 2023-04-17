var __USERRULES__ = [
'chat.openai.com',
];


var proxy;
if ("__PROXY__".startsWith("PROXY ")) proxy = "__PROXY__";
else proxy = eval('__PROXY__');
var direct = "DIRECT";

var userrules = __USERRULES__;

function FindProxyForURL(url, host) {
	for (var i = 0; i < userrules.length; i+=1) {
		if (host.endsWith(userrules[i]))
			return proxy;
	}

	return direct;
}
