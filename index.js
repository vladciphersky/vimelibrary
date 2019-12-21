const request = require('request-promise-native');
const hostname = "https://api.vime.world";
const { version } = require('./package');

const User = function (token) {
    if(!token) token = null;
	
	this.options = (uri, method = "GET") => {
		if (!uri) return console.error('[VimeLibrary] Ошибка в работе модуля | Не указан адрес метода.');
		
		return {
			method: method,
    			uri: hostname + uri,
    			qs: (token == null) ? {} : { token },
    			headers: { 'User-Agent': `VimeLibrary/${version} (${uri} | ${token})` },
    			json: true
  		};
    };
    
    this.get = (by, arg) => {
        if(!by) return console.error('[VimeLibrary] Не указан тип поиска игроков.');
		if(!arg) return console.error('[VimeLibrary] Не указан массив данных.');
    
        if(by == 'name') 
            return request(this.options(`/user/name/${arg}`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
        else if(by == 'id') 
            return request(this.options(`/user/${arg}`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
        else if(by == 'session') 
            return request(this.options(`/user/session/${arg}`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
        else return console.error('[VimeLibrary] Указан неверный тип поиска игроков.');
    };

    this.friends = (id) => {
		if(!id) return console.error('[VimeLibrary] Не указан ID игрока.');
    
        return request(this.options(`/user/${id}/friends`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };

    this.session = (id) => {
		if(!id) return console.error('[VimeLibrary] Не указан ID игрока.');
    
        return request(this.options(`/user/${id}/session`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };

    this.stats = (id) => {
		if(!id) return console.error('[VimeLibrary] Не указан ID игрока.');
    
        return request(this.options(`/user/${id}/stats`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };

    this.achievements = (id) => {
		if(!id) return console.error('[VimeLibrary] Не указан ID игрока.');
    
        return request(this.options(`/user/${id}/achievements`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };

    this.leaderboards = (id) => {
		if(!id) return console.error('[VimeLibrary] Не указан ID игрока.');
    
        return request(this.options(`/user/${id}/leaderboards`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };

    this.matches = (id) => {
		if(!id) return console.error('[VimeLibrary] Не указан ID игрока.');
    
        return request(this.options(`/user/${id}/matches`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };
};

const Guild = function (token) {
    if(!token) token = null;
	
	this.options = (uri, method = "GET") => {
		if (!uri) return console.error('[VimeLibrary] Ошибка в работе модуля | Не указан адрес метода.');
		
		return {
			method: method,
    			uri: hostname + uri,
    			qs: (token == null) ? {} : { token },
    			headers: { 'User-Agent': `VimeLibrary/${version} (${uri} | ${token})` },
    			json: true
  		};
    };
    
    this.get = (by, arg) => {
        if(!by) return console.error('[VimeLibrary] Не указан тип поиска гильдий.');
		if(!arg) return console.error('[VimeLibrary] Не указан аргумент для поиска.');
    
        if(by == 'name') 
            return request(this.options(`/guild/get?${by}=${arg}`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
        else if(by == 'id') 
            return request(this.options(`/guild/get?${by}=${arg}`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
        else if(by == 'tag') 
            return request(this.options(`/guild/get?${by}=${arg}`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
        else return console.error('[VimeLibrary] Указан неверный тип поиска игроков.');
    };

    this.search = (arg) => {
        if(!arg) return console.error('[VimeLibrary] Не указан аргумент для поиска.');
    
        return request(this.options(`/guild/search?query=${arg}`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };
};

const Online = function (token) {
    if(!token) token = null;
	
	this.options = (uri, method = "GET") => {
		if (!uri) return console.error('[VimeLibrary] Ошибка в работе модуля | Не указан адрес метода.');
		
		return {
			method: method,
    			uri: hostname + uri,
    			qs: (token == null) ? {} : { token },
    			headers: { 'User-Agent': `VimeLibrary/${version} (${uri} | ${token})` },
    			json: true
  		};
    };

    this.get = (arg) => {
        if(arg && arg == 'streams') 
            return request(this.options(`/online/streams`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
        else if(arg && arg == 'staff') 
            return request(this.options(`/online/staff`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
        else
            return request(this.options(`/online`))
                .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };
};

const Matches = function (token) {
    if(!token) token = null;
	
	this.options = (uri, method = "GET") => {
		if (!uri) return console.error('[VimeLibrary] Ошибка в работе модуля | Не указан адрес метода.');
		
		return {
			method: method,
    			uri: hostname + uri,
    			qs: (token == null) ? {} : { token },
    			headers: { 'User-Agent': `VimeLibrary/${version} (${uri} | ${token})` },
    			json: true
  		};
    };

    this.get = (id) => {
        if(!id) return console.error('[VimeLibrary] Не указан ID матча для поиска.');

        return request(this.options(`/match/${id}`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };

    this.latest = () => {
        return request(this.options(`/match/latest`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };

    this.list = (before, after) => {
        if(!before) return console.error('[VimeLibrary] Не указан аругмент для значения before.');
        if(!after) return console.error('[VimeLibrary] Не указан аругмент для значения after.');

        return request(this.options(`/match/list?before=${(Number(before) == true) ? before : NaN}&after=${(Number(after) == true) ? after : NaN}`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };
};

const Misc = function (token) {
    if(!token) token = null;
	
	this.options = (uri, method = "GET") => {
		if (!uri) return console.error('[VimeLibrary] Ошибка в работе модуля | Не указан адрес метода.');
		
		return {
			method: method,
    			uri: hostname + uri,
    			qs: (token == null) ? {} : { token },
    			headers: { 'User-Agent': `VimeLibrary/${version} (${uri} | ${token})` },
    			json: true
  		};
    };

    this.token = (tokenCheck) => {
        return request(this.options((tokenCheck) ? `/misc/token/${tokenCheck}` : `/misc/token/${token}`))
            .then((r) => r, (e) => console.error('[VimeLibrary] Ошибка в работе | ', e));
    };
};

module.exports = { User, Guild, Online, Matches, Misc };