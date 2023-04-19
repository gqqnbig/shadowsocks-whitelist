const __USERRULES__ = [
	'chat.openai.com',
];

let proxy;
if ('__PROXY__'.startsWith('PROXY ')) proxy = '__PROXY__';
else proxy = eval('__PROXY__');
const direct = 'DIRECT';

const userrules = __USERRULES__;

function FindProxyForURL(url, host) {
	for (let i = 0; i < userrules.length; i += 1) {
		if (host.endsWith(userrules[i])) return proxy;
	}

	return direct;
}
