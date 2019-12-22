<p align="center">
    <img src="../assets/using.png"/>
    <h3 align="center">
	Методы для использования библиотеки
	</h3>
</p>

Прежде всего, вызывают саму библиотеку.
```js
const Vime = require('vimelibrary');
```

Затем, вы должны определиться, какие вам методы нужны: для работы с пользователями/гильдиями, либо с просмотром информации о матчах на сервере. Либо с просмотром онлайна. ¯\\\_(ツ)\_/¯
```js
// Кстати, вы должны указать API ключ
new Vime.<Class>(apiKey);
// Либо можно использовать 60 запросов в минуту.
new Vime.<Class>();
```
VimeLibrary также имеет свои, так скажем, утилиты, или же класс "Utils"

Данный класс нужен для определения цвета тэга гильдии, либо для конвертации ранга пользователя
```js
const Utils = Vime.Utils;
Utils.userRanks['MODER'].rank // вернёт "Модератор"
Utils.tagColors['&7'] // вернёт "AAAAAA"
```
Все доступные классы представлены ниже.
```js
const user = new Vime.User();
const guild = new Vime.Guild();
const online = new Vime.Online();
const matches = new Vime.Matches();
const misc = new Vime.Misc();
```
## Выберите подходящий для вас класс выше, над этим всем.. добром. :D
