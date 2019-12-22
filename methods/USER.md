```js
// Получить игрока(-ов)
// Аргументы: by, arg

// by - тип поиска (name, id, session)
// arg - ID (или имена, если by == 'name') игроков через запятую. Можно указывать как один, так и несколько.
user.get('id', '134568').then((data) => {
    console.log(data);
    /*
    [
        {
            "id": 134568,
            "username": "xtrafrancyz",
            "level": 5,
            "levelPercentage": 0.894,
            "rank": "ADMIN",
            "playedSeconds": 3023813,
            "guild": {
                "id": 401,
                "name": "Okssi наш друг",
                "tag": null,
                "color": "&f"
            }
        }
    ]
    */
});




// Получить друзей игрока
// Аргументы: id

// id - ID игрока
user.friends('134568').then((data) => {
    console.log(data);
    /*
    [
        {
            "id": 105889,
            "username": "rsboe",
            "level": 8,
            "levelPercentage": 0.856,
            "rank": "MAPLEAD",
            "playedSeconds": 5508358,
            "guild": {
                "id": 1,
                "name": "Fantastic Five",
                "tag": null,
                "color": "&f"
            }
        },
        ...
    ]
    */
});




// Получить сессию игрока
// Аргументы: id

// id - ID игрока
user.session('134568').then((data) => {
    console.log(data);
    /*
    {
        "value": true,
        "message": "Находится в Лобби",
        "game": "LOBBY"
    }
    */
});




// Получить статистику игрока
// Аргументы: id

// id - ID игрока
user.stats('134568').then((data) => {
    console.log(data);
    /*
    {
        "BW": {
        "global": {
            "kills": 76,
            "deaths": 118,
            "games": 17,
            "wins": 2,
            "bedBreaked": 5
        },
        "season": {
            "monthly": {
            "kills": 0,
            "deaths": 0,
            "games": 0,
            "wins": 0,
            "bedBreaked": 0
            }
        }
        },
        ...
    }
    */
});




// Получить достижения игрока
// Аргументы: id

// id - ID игрока
user.achievements('134568').then((data) => {
    console.log(data);
    /*
    [
        {
            "id": 1,
            "time": 1454112020
        },
        {
            "id": 2,
            "time": 1454112020
        },
        ...
    ]
    */
});




// Получить место игрока в топе
// Аргументы: id

// id - ID игрока
user.leaderboards('134568').then((data) => {
    console.log(data);
    /*
    [
        {
            "type": "user",
            "sort": "level",
            "place": 1
        },
        ...
    ]
    */
});




// Получить последние матчи в которых играл игрок
// Аргументы: id

// id - ID игрока
user.matches('134568').then((data) => {
    console.log(data);
    /*
    [
        {
            "id": "53421537142767616",
            "game": "DUELS",
            "map": {
                "id": "Nevermor",
                "name": "Невермор",
                "teams": 2,
                "playersInTeam": 1
            },
            "date": 1559037486,
            "duration": 70,
            "players": 2,
            "win": true,
            "state": 1
        },
        ...
    ]
    */
});
```