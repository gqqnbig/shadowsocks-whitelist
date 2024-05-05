const __USERRULES__ = [
'2021hkcharter.com',
'8964museum.com',
'8964tiananmen.com',
'auth.openai.com',
'auth0.openai.com',
'bard.google.com',
'blockedbyhk.com',
'cachedview.com',
'cdn.oaistatic.com',
'chat.openai.com',
'chatgpt.com',
'claude.ai',
'dpp.org.tw',
'gemini.google.com',
'goarmy.com',
'gov.taipei',
'hkchronicles.com',
'hkdc.us',
'hongkongwatch.org',
'ipfs.io',
'ipfs.tech',
'libgen.is',
'libgen.rs',
'libgen.st',
'library.lol',
'pct.org.tw',
'sci-hub.se',
'subvod.fr',
'surfshark.com',
'twtjcdb.nhrm.gov.tw',
'ump.edu.pl',
'ut.ee',
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
