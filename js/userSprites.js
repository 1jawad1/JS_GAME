// const _ = require('lodash');

let firstPlayerSprits = [
    {
        position: 
        {
            x: 300,
            y: 360
        },
        velocity:
        {
            x: 0,
            y: 10
        },
        size:
        {
            x: 50,
            y: 120
        },
        speed: {
            x: 7.5,
            y: 12
        },
        color: 'blue',
        health: 100,
        damage: 0.08,
        offsetX: 45,
        offsetY: 40,
        imageSrc : './img/samuraiMack/Idle.png',
        profileSrc : './img/samuraiMack/profil.png',
        framesMax: 8,
        scale: 2,
        offset: {
            x: -175,
            y: -123
        },
        framesHold: 10,
        sprites: {
            Idle: {
                imageSrc: './img/samuraiMack/Idle.png',
                framesMax: 8,
                framesHold: 7
            },
            Run: {
                imageSrc: './img/samuraiMack/Run.png',
                framesMax: 8,
                framesHold: 7
            },
            Jump: {
                imageSrc: './img/samuraiMack/Jump.png',
                framesMax: 2,
                framesHold: 2
            },
            Fall: {
                imageSrc: './img/samuraiMack/Fall.png',
                framesMax: 2,
                framesHold: 2
            },
            Attack1: {
                imageSrc: './img/samuraiMack/Attack1.png',
                framesMax: 6,
                framesHold: 4
            },
            takeHit: {
                imageSrc: './img/samuraiMack/Take Hit - white silhouette.png',
                framesMax: 4,
                framesHold: 5
            },
            Death: {
                imageSrc: './img/samuraiMack/Death.png',
                framesMax: 6,
                framesHold: 5
            }
        },
        groundPosition: 360,
        debug: false

    },
    {
        position: 
        {
            x: 300,
            y: 360
        },
        velocity:
        {
            x: 0,
            y: 10
        },
        size:
        {
            x: 50,
            y: 120
        },
        speed: {
            x: 7.5,
            y: 12
        },
        color: 'blue',
        health: 100,
        damage: 0.08,
        offsetX: 5,
        offsetY: 40,
        imageSrc : './img/Martial Hero 3/Idle.png',
        profileSrc : './img/Martial Hero 3/Preview.png',
        framesMax: 10,
        scale: 2,
        offset: {
            x: -105,
            y: -43
        },
        framesHold: 10,
        sprites: {
            Idle: {
                imageSrc: './img/Martial Hero 3/Idle.png',
                framesMax: 10,
                framesHold: 7
            },
            Run: {
                imageSrc: './img/Martial Hero 3/Run.png',
                framesMax: 8,
                framesHold: 7
            },
            Jump: {
                imageSrc: './img/Martial Hero 3/Going Up.png',
                framesMax: 3,
                framesHold: 2
            },
            Fall: {
                imageSrc: './img/Martial Hero 3/Going Down.png',
                framesMax: 3,
                framesHold: 2
            },
            Attack1: {
                imageSrc: './img/Martial Hero 3/Attack1.png',
                framesMax: 7,
                framesHold: 4
            },
            takeHit: {
                imageSrc: './img/Martial Hero 3/Take Hit.png',
                framesMax: 3,
                framesHold: 5
            },
            Death: {
                imageSrc: './img/Martial Hero 3/Death.png',
                framesMax: 11,
                framesHold: 5
            }
        },
        groundPosition: 360,
        debug: true

    },
    {
        position: 
        {
            x: 300,
            y: 360
        },
        velocity:
        {
            x: 0,
            y: 10
        },
        size:
        {
            x: 50,
            y: 120
        },
        speed: {
            x: 7.5,
            y: 12
        },
        color: 'blue',
        health: 100,
        damage: 0.08,
        offsetX: 45,
        offsetY: 40,
        imageSrc : './img/Fantasy Warrior/Idle.png',
        profileSrc : './img/Fantasy Warrior/preview.png',
        framesMax: 10,
        scale: 2,
        offset: {
            x: -175,
            y: -123
        },
        framesHold: 10,
        sprites: {
            Idle: {
                imageSrc: './img/Fantasy Warrior/Idle.png',
                framesMax: 10,
                framesHold: 7
            },
            Run: {
                imageSrc: './img/Fantasy Warrior/Run.png',
                framesMax: 8,
                framesHold: 7
            },
            Jump: {
                imageSrc: './img/Fantasy Warrior/Jump.png',
                framesMax: 3,
                framesHold: 2
            },
            Fall: {
                imageSrc: './img/Fantasy Warrior/Fall.png',
                framesMax: 3,
                framesHold: 2
            },
            Attack1: {
                imageSrc: './img/Fantasy Warrior/Attack1.png',
                framesMax: 7,
                framesHold: 4
            },
            takeHit: {
                imageSrc: './img/Fantasy Warrior/Take Hit.png',
                framesMax: 3,
                framesHold: 5
            },
            Death: {
                imageSrc: './img/Fantasy Warrior/Death.png',
                framesMax: 7,
                framesHold: 5
            }
        },
        groundPosition: 360,
        debug: true

    }
]



// ---------------------------------------<<<<<<<<<<<<<------------------->>>>>>>>>>>>---------------------------------------------------------



let secondPlayerSprits = [

    {
        position: 
        {
            x: 725,
            y: 360
        },
        velocity:
        {
            x: 0,
            y: 10
        },
        size:
        {
            x: 50,
            y: 120
        },
        speed: {
            x: 7.5,
            y: 12
        },
        color: 'red',
        health: 100,
        damage: 0.1,
        offsetX: -135,
        offsetY: 50,
        imageSrc : './img/Kenji/Idle.png',
        profileSrc : './img/Kenji/profil.png',
        framesMax: 4,
        scale: 2,
        offset:{
            x: -175,
            y: -136,
        },
        framesHold: 10,
        sprites: {
            Idle: {
                imageSrc: './img/Kenji/Idle.png',
                framesMax: 4,
                framesHold: 10
            },
            Run: {
                imageSrc: './img/Kenji/Run.png',
                framesMax: 8,
                framesHold: 10
            },
            Jump: {
                imageSrc: './img/Kenji/Jump.png',
                framesMax: 2,
                framesHold: 10
            },
            Fall: {
                imageSrc: './img/Kenji/Fall.png',
                framesMax: 2,
                framesHold: 10
            },
            Attack1: {
                imageSrc: './img/Kenji/Attack1.png',
                framesMax: 4,
                framesHold: 10
            },
            takeHit: {
                imageSrc: './img/Kenji/Take hit.png',
                framesMax: 3,
                framesHold: 10
            },
            Death: {
                imageSrc: './img/Kenji/Death.png',
                framesMax: 7,
                framesHold: 10
            }
        },
        groundPosition: 360,
        debug: false


    },
    {
        position: 
        {
            x: 300,
            y: 360
        },
        velocity:
        {
            x: 0,
            y: 10
        },
        size:
        {
            x: 50,
            y: 120
        },
        speed: {
            x: 7.5,
            y: 12
        },
        color: 'blue',
        health: 100,
        damage: 0.08,
        offsetX: 45,
        offsetY: 40,
        imageSrc : './img/Fantasy Warrior/Idle.png',
        profileSrc : './img/Fantasy Warrior/preview.png',
        framesMax: 10,
        scale: 2,
        offset: {
            x: -175,
            y: -123
        },
        framesHold: 10,
        sprites: {
            Idle: {
                imageSrc: './img/Fantasy Warrior/Idle.png',
                framesMax: 10,
                framesHold: 7
            },
            Run: {
                imageSrc: './img/Fantasy Warrior/Run.png',
                framesMax: 8,
                framesHold: 7
            },
            Jump: {
                imageSrc: './img/Fantasy Warrior/Jump.png',
                framesMax: 3,
                framesHold: 2
            },
            Fall: {
                imageSrc: './img/Fantasy Warrior/Fall.png',
                framesMax: 3,
                framesHold: 2
            },
            Attack1: {
                imageSrc: './img/Fantasy Warrior/Attack1.png',
                framesMax: 7,
                framesHold: 4
            },
            takeHit: {
                imageSrc: './img/Fantasy Warrior/Take Hit.png',
                framesMax: 3,
                framesHold: 5
            },
            Death: {
                imageSrc: './img/Fantasy Warrior/Death.png',
                framesMax: 7,
                framesHold: 5
            }
        },
        groundPosition: 360,
        debug: true

    }


]
