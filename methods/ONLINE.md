```js
// Получить онлайн
// Аргументы: arg

// arg - аргумент, который надо предоставить при запросе

// если аргумент ничему не равен = онлайн всего сервера MiniGames (только числа)
// если аргумент == 'staff' = онлайн из персонала
// если аргумент == 'streams' = стримы на сервере

online.get('staff').then((data) => {
    console.log(data);
    /*
    [
        {
            "id": 64165,
            "username": "kuclopoguk",
            "level": 37,
            "levelPercentage": 0.37101,
            "rank": "MODER",
            "playedSeconds": 5950354,
            "guild": {
                "id": 124,
                "name": "TheRebellAlliance",
                "tag": null,
                "color": "&f"
            },
            "online": {
                "value": true,
                "message": "Играет в SkyWars Solo",
                "game": "SW"
            }
        },
        ...
    ]
    */
});
```