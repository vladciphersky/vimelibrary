```js
// Получить матч
// Аргументы: id

// id - ID матча на сервере
matches.get('53411386641874944').then((data) => {
    console.log(data);
    /*
    {
        "version": 1,
        "game": "DUELS",
        "server": "DUELS_6",
        "start": 1559601297,
        "mapName": "Невермор",
        "mapId": "Nevermor",
        "kit": "UHC",
        "ranked": false,
        "winner": {
            "player": 4395550
        },
        "end": 1559601425,
        "players": [ ... ]
    }
    */
});




// Получить последние матчи на сервере
matches.latest().then((data) => {
    console.log(data);
    /*
    [
        {
            "id": "53411386641874944",
            "game": "DUELS",
            "map": {
                "id": "EHkron",
                "name": "Экрон",
                "teams": 2,
                "playersInTeam": 1
            },
            "date": 1559035066,
            "duration": 14,
            "players": 4
        },
        ...
    ]
    */
});




// Получить матчи на сервере
// Аргументы: before, after

// before - будут выведены все матчи, которые произошли до матча с этим ID
// after - будут выведены все матчи, которые произошли после матча с этим ID

// При выполнении запроса, обязательно нужно указать или before, или after, иначе сервер вернет ошибку
matches.list('55786868737835008', '58786868737835008').then((data) => {
    console.log(data);
    /*
    [
        {
            "id": "55786827805622272",
            "game": "DUELS",
            "map": {
                "id": "Rizaro",
                "name": "Ризаро",
                "teams": 2,
                "playersInTeam": 1
            },
            "date": 1559601416,
            "duration": 46,
            "players": 4
        },
        ...
    ]
    */
});
```