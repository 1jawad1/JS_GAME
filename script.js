const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;

const gravity = 0.5


const bg = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    imageSrc: './img/background.png',
    scale: 1
})

const shop = new Sprite({
    position: {
        x: 650,
        y: 160
    },
    imageSrc: './img/shop.png',
    scale: 2.5,
    framesMax: 6,
    framesHold: 5
})


const player = new Fighter(
    {
        position: 
        {
            x: 50,
            y: 0
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
        color: 'blue',
        health: 100,
        damage: 10,
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

    }
)

const enemy = new Fighter(
    {
        position: 
        {
            x: canvas.width/1.2,
            y: 0
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
        color: 'red',
        health: 100,
        damage: 10,
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


    }
)

const keys = {
    q: {
        pressed: false
    },
    d: {
        pressed: false
    },
    z: {
        pressed: false
    },
    ArrowRight:{
        pressed: false
    },
    ArrowLeft:{
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}

document.querySelector('#player').setAttribute('src', player.profileSrc) 
document.querySelector('#enemy').setAttribute('src', enemy.profileSrc)


let timer1 = document.querySelector("#timer");
winer = document.querySelector('.winer')

let timer = setInterval(()=>{
    timer1.innerHTML -= 1
    if(timer1.innerHTML <= 0) {
        clearInterval(timer)
            
        whoWon(player, enemy, winer)
        
    }
}, 1000)

function animate(){

    window.requestAnimationFrame(animate)

    c.clearRect(0, 0, canvas.width, canvas.height)

    bg.update()
    shop.update()

    c.fillStyle = 'rgba(255, 255, 255, 0.3)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    enemy.update()

    // -----------------------------PLAYER CODE-----------------------------------
    
    player.velocity.x = 0;

    if(!player.isDead){
        


        if(keys.q.pressed && player.lastKey === 'q'){

            player.velocity.x = -player.speed
            player.switchSprite('Run')

            
        }else if(keys.d.pressed && player.lastKey === 'd'){
            
            player.velocity.x = player.speed
            player.switchSprite('Run')

        }else{
            player.switchSprite('Idle')

        }

        if(keys.z.pressed ){
            if(player.position.y + player.size.y >= canvas.height- 97){
                player.velocity.y = -12
            }
        }

        
        if( player.velocity.y < 0 ){
            player.switchSprite('Jump')

        }else if(player.velocity.y > 0){
            player.switchSprite('Fall')

        }

        
        if(
            rectangularCollision({
                rectangle1: player,
                rectangle2: enemy
            }) && player.isAttaking && player.currentFrame == 4
        ){
            player.isAttaking = false
            if( player.health > 0 && enemy.health > 0 && timer1.innerHTML > 0 ){
                
                enemy.takeHits(player, false, '#enemyHealth')

            }
        }

        if(player.isAttaking && player.currentFrame == 4){
            player.isAttaking = false
        }
    }else{
        player.switchSprite('Death')
    }
 // -----------------------------ENEMY CODE-----------------------------------


    enemy.velocity.x = 0;

    if(!enemy.isDead){

        if(keys.ArrowLeft.pressed && enemy.lastKey === 'ArrowLeft'){
        
            enemy.velocity.x = -enemy.speed
            enemy.switchSprite('Run')
            
        }else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){

            enemy.velocity.x = enemy.speed
            enemy.switchSprite('Run')
        }else{
            enemy.switchSprite('Idle')

        }


        if(keys.ArrowUp.pressed ){
            if(enemy.position.y + enemy.size.y >= canvas.height- 97){
                enemy.velocity.y = -12
            }
        }

        if( enemy.velocity.y < 0 ){
            enemy.switchSprite('Jump')

        }else if(enemy.velocity.y > 0){
            enemy.switchSprite('Fall')
        }


        if(
            rectangularCollision({
                rectangle1: enemy,
                rectangle2: player
            }) && enemy.isAttaking && enemy.currentFrame == 2
        ){
            enemy.isAttaking = false
            if( player.health > 0 && enemy.health > 0 && timer1.innerHTML > 0 ){

                player.takeHits(enemy, true, '#playerHealth')


            }
        }

        if(enemy.isAttaking && enemy.currentFrame == 2){
            enemy.isAttaking = false
        }

    }else{
        enemy.switchSprite('Death')
    }



    if( player.health === 0 || enemy.health === 0 ){

        whoWon(player, enemy, winer)
        clearInterval(timer)

    }

}

window.addEventListener('keydown', (e)=>{
    switch(e.key){

        case 'd':
            if(!keys.d.pressed)
            keys.d.pressed = true
            player.lastKey = 'd'
            break
        case 'q':
            if(!keys.q.pressed)
            keys.q.pressed = true
            player.lastKey = 'q'
            break
        case 'z':
            if(!keys.z.pressed)
            keys.z.pressed = true

            break
        case ' ':
            if(!player.didAttaque){
                player.attaking()
                player.didAttaque = true
            }
            break

//-----------------plyer_2--------------------           
        case 'ArrowRight':
            if(!keys.ArrowRight.pressed)
            keys.ArrowRight.pressed = true
            enemy.lastKey = 'ArrowRight'
            break
        case 'ArrowLeft':
            if(!keys.ArrowLeft.pressed)
            keys.ArrowLeft.pressed = true
            enemy.lastKey = 'ArrowLeft'
            break
        case 'ArrowUp':
            if(!keys.ArrowUp.pressed)
            keys.ArrowUp.pressed = true
            break
        case 'ArrowDown':
            if(!enemy.didAttaque){
                enemy.attaking()
                enemy.didAttaque = true
            }
            break

    }

})

window.addEventListener('keyup', (e)=>{

    switch(e.key){

        case 'd':
            keys.d.pressed = false
            break
        case 'q':
            keys.q.pressed = false
            break
        case 'z':
            keys.z.pressed = false
            break
        case ' ':
            player.didAttaque = false
            break
//-----------------plyer_2--------------------           
        case 'ArrowRight':
            keys.ArrowRight.pressed = false
            break
        case 'ArrowLeft':
            keys.ArrowLeft.pressed = false
            break
        case 'ArrowUp':
            keys.ArrowUp.pressed = false
            break
            
        case 'ArrowDown':
            enemy.didAttaque = false
            break

    }

})



animate()