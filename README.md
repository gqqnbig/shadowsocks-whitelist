# shadowsocks-whitelist

翻墙白名单由 https://ibug.io/project/pac-generator/ 生成。

用户规则的匹配方式是简单的字符串结尾匹配（endsWith）。

## 安装

把whitelist.pac重命名为pac.txt，放到[shadowsocks](https://github.com/shadowsocks/shadowsocks-windows)目录。shadowsocks选择PAC模式->使用本地PAC。

本PAC规则同时支持[v2rayN](https://github.com/2dust/v2rayN)。
