
let runing = false


const canvas = document.getElementById('myCanvas');
const c = canvas.getContext('2d');
canvas.width = 1024;
canvas.height = 576;
document.querySelector('.mid-Container').style.display = 'none'


const gravity = 0.5

let bg;

let shop;

let player;

let enemy;

let animationId;

let winer;

let timer1;

let timer;

let playerOne;

let playerTow;


let currentSpriteOne = [0]

let currentSpriteThow = [0]

function switchPlayer( buttun, number, spriteList, reverse = false ){
    document.querySelector(buttun).addEventListener('click',()=>{
        
        if ( reverse ) {
            if(number[0] > 0){
                number[0] -= 1
            }else{
                number[0] = spriteList.length-1
            }
        }
        else {
            if(number[0] < spriteList.length - 1){
                number[0] += 1
            }else{
                number[0] = 0
            }
        }

        home()
        console.log(number)
        
    })
}

switchPlayer('.g_1', currentSpriteOne, firstPlayerSprits, true)
switchPlayer('.d_1', currentSpriteOne, firstPlayerSprits)
switchPlayer('.g_2', currentSpriteThow, secondPlayerSprits, true)
switchPlayer('.d_2', currentSpriteThow, secondPlayerSprits)


function home(){

    console.log('luncher start')

    document.querySelector('.homeContainer').style.display = 'grid';
    bg = new Sprite(
        {
        position: {
            x: 0,
            y: 0
            },
        imageSrc: './img/bg_home.png',
        scale: 1.15,
        offset: {
            x: 0,
            y: -115
        }
        }
    )


    player = new Fighter(
        JSON.parse(JSON.stringify(firstPlayerSprits[currentSpriteOne[0]]))
    )
    enemy = new Fighter(

        JSON.parse(JSON.stringify(secondPlayerSprits[currentSpriteThow[0]]))
    )

    cancelAnimationFrame(animationId)

    animateHome()

}




home()


document.querySelector('#start').addEventListener("click",()=>{ 

    document.querySelector('.homeContainer').style.display = 'none';

    runing = true

    bg = new Sprite({
        position: {
            x: 0,
            y: 0
        },
        imageSrc: './img/bg_2.jpg',
        scale: 2,
        offset: {
            x: -10,
            y: -100
        }
    })
    
    // shop = new Sprite({
    //     position: {
    //         x: 650,
    //         y: 160
    //     },
    //     imageSrc: './img/shop.png',
    //     scale: 2.5,
    //     framesMax: 6,
    //     framesHold: 5
    // })

    player.spawn()
    enemy.spawn()
    
    


    timer1 = document.querySelector("#timer");
    timer1.innerHTML = 60

        
    winer = document.querySelector('.winer')


    timer = Timer({décompte: timer1 })

    document.querySelector('#playerHealth').style.width = `${player.health}%`
    document.querySelector('#enemyHealth').style.width = `${enemy.health}%`
    cancelAnimationFrame(animationId)
            
    document.querySelector('.mid-Container').style.display = 'flex'
    document.querySelector('#start').style.display = 'none'
    keyListen()
    animate()

})



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
    espace: {
        pressed: false,
        attacked: false
    },
    ArrowRight:{
        pressed: false
    },
    ArrowLeft:{
        pressed: false
    },
    ArrowUp: {
        pressed: false
    },
    ArrowDown: {
        pressed: false,
        attacked: false
    }
}
 

function keyListen(){


    document.querySelector('#player').setAttribute('src', player.profileSrc) 
    document.querySelector('#enemy').setAttribute('src', enemy.profileSrc)

    window.addEventListener('keydown', (e)=>{
        
        if(!player.isDead ){
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
                if(!keys.espace.pressed)
                keys.espace.pressed = true
                // if(!player.didAttaque){
                //     player.attaking()
                //     player.didAttaque = true
                // }
                break
            }
        }

    //-----------------plyer_2--------------------           
    if(!enemy.isDead ){       
        switch(e.key){    
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
                if(!keys.ArrowDown.pressed)
                keys.ArrowDown.pressed = true
                // if(!enemy.didAttaque){
                //     enemy.attaking()
                //     enemy.didAttaque = true
                // }

                break

        }
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
                keys.espace.pressed = false
                keys.espace.attacked = false

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
                keys.ArrowDown.pressed = false
                keys.ArrowDown.attacked = false

                break
            }

        
    })

}



