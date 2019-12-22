```js
// Получить гильдию
// Аргументы: by, arg

// by - тип поиска (name, id, tag)
// arg - аргумент, который надо предоставить при запросе

// если тип == 'name' = пишем имя гильдии
// если тип == 'id' = пишем ID гильдии
// если тип == 'tag' = пишем тэг гильдии

guild.get('name', 'Fantastic Five').then((data) => {
    console.log(data);
    /*
    {
        "id": 1,
        "name": "Fantastic Five",
        "tag": null,
        "color": "&f",
        "created": 1508631234, // желательно умножить это значение на 1000, или же покажет некорректную дату
        "totalCoins": 55000,
        "level": 1,
        "levelPercentage": 0.81264,
        "members": [ ... ]
    }
    */
});




// Поиск гильдии
// Аргументы: arg

// arg - аргумент, по которому будет производиться поиск
// Максимум возвращается по 10 значений
// Индекс гильдий обновляется раз в 10 минут
guild.search('Fantastic Five').then((data) => {
    console.log(data);
    /*
    [
        {
            "id": 1,
            "name": "Fantastic Five",
            "tag": "F5", ...
        },
        {
            "id": 2495,
            "name": "-F5-",
            "tag": null, ...
        },
        ...
    ]
    */
});
```