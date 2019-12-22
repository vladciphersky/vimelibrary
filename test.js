const Lib = require('./');

const User = new Lib.User();
const Guild = new Lib.Guild();
const Online = new Lib.Online();
const Matches = new Lib.Matches();
const Misc = new Lib.Misc();

User.get('id', '134568').then(async (user) => await console.log(`Найденный игрок по ID ${user[0].id}: ${user[0].username}`));
User.get('session', '134568').then(async (user) => await console.log(`Статус найденного игрока: ${user[0].online.message}`));

Guild.get('tag', encodeURI('Котик')).then(async (guild) => await console.log(`Найденная гильдия по тэгу "${guild.tag}": ${guild.name}`));

Online.get('staff').then(async (data) => await console.log(`Модеров онлайн: ${data.length}`));
Online.get('streams').then(async (data) => await console.log(`Стримеров: ${data.length}`));

Matches.latest().then(async (data) => await console.log(`Последний матч на сервере: ${data[0].id}`));

Misc.token().then(async (data) => await console.log(`Проверка токена: ${((data.valid == true) ? data.token : "Токен не указан")}`));