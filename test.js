const Lib = require('./');
const Vime = {
	User: new Lib.User(),
	Guild: new Lib.Guild(),
	Online: new Lib.Online(),
	Matches: new Lib.Matches(),
	Misc: new Lib.Misc(),
	Utils: new Lib.Utils()
};

Vime.User.get('id', '1').then((user) => console.log(user[0].username));
Vime.User.get('name', 'xtrafrancyz').then((user) => console.log(user[0].username));
Vime.User.get('session', '1').then((user) => console.log(user[0].session.value));
Vime.User.friends('1').then((user) => console.log(user.friends[0].username));

Vime.Guild.get('id', '1').then((guild) => console.log(guild.name));
Vime.Guild.get('tag', 'Котик').then((guild) => console.log(guild.name));
Vime.Guild.get('name', 'AquaLiquid').then((guild) => console.log(guild.name));

Vime.Online.get().then((data) => console.log(data.total));
Vime.Online.get('staff').then((data) => console.log(`Модеров онлайн: ${data.length}`));
Vime.Online.get('streams').then((data) => console.log(`Стримеров на сервере: ${data.length}`));

Vime.Matches.latest().then((data) => console.log(`Последний матч на сервере: ${data[0].id}`));

Vime.Misc.token().then((data) => console.log(data.token));