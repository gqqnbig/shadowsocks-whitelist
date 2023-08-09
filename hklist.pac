const __USERRULES__ = [
'2021hkcharter.com',
'8964museum.com',
'8964tiananmen.com',
'blockedbyhk.com',
'chat.openai.com',
'claude.ai',
'dpp.org.tw',
'goarmy.com',
'hkchronicles.com',
'hkdc.us',
'hongkongwatch.org',
'pct.org.tw',
'twtjcdb.nhrm.gov.tw',
'yewtu.be'
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
