<p align="center">
  <img src="assets/info.png"/>
		<h3 align="center">
		Что такое VimeLibrary?
		</h3>
		VimeLibrary — библиотека для лёгкого использования <a href="https://api.vime.world/web/index">VimeWorld API</a>.
		Данная библиотека была полностью переписана, прошлый код был слишком ужасным.
		Документация: <a href="https://vladciphersky.github.io/vimelibrary/docs">клик</a>
</p>

<p align="center">
<img src="assets/install.png"/>
		<h3 align="center">
		Как установить?
		</h3>
		Для установки библиотеки нужно прописать следующую команду:
</p>

```sh
$ npm install --save github:vladciphersky/vimelibrary
```

<p align="center">
<img src="assets/using.png"/>
		<h3 align="center">
		Как использовать?
		</h3>
    Как пример, можно получить последние матчи на сервере.
</p>

```sh
const Vime = require('vimelibrary');
const matches = new Vime.Matches();
matches.latest()
	.then(console.log);
```
