function rectangularCollision({ rectangle1, rectangle2}){
    return (
        rectangle1.attaque.position.x + rectangle1.attaque.size.x >= rectangle2.position.x &&
        rectangle1.attaque.position.x <= rectangle2.position.x + rectangle2.size.x &&
        rectangle1.attaque.position.y + rectangle1.attaque.size.y >= rectangle2.position.y &&
        rectangle1.attaque.position.y <= rectangle2.position.y + rectangle2.size.y 
    )
}

function calculeDamage({rectangle1, rectangle2, reverse = false, damageFactor}){
    
    if(reverse){
        return(
            (rectangle2.position.x + rectangle2.size.x - rectangle1.attaque.position.x  )*damageFactor
        )
    }else{
        return(
            (rectangle1.attaque.position.x + rectangle1.attaque.size.x - rectangle2.position.x )*damageFactor
        )
    }

}

function whoWon(user1, user2, winer){
    if(runing){
        if(user1.health == user2.health){
            winer.innerHTML = 'No one has won. Tie !!'
        }else if( user1.health > user2.health){
            winer.innerHTML = 'The user 1 has won the game !!'
            user2.isDead = true
        }else if( user1.health < user2.health){
            winer.innerHTML = 'The user 2 has won the game !!'
            user1.isDead = true
        }

        // console.log('Restart')
        runing = false


        setTimeout(()=>{

            document.querySelector('#start').style.display = 'flex'
            document.querySelector('.winer').innerHTML = ''
            
            bg=
            shop=
            player=
            enemy=
            winer=
            timer1=
            timer = null
            
            document.querySelector('.mid-Container').style.display = 'none'
            clearcanvas()
            home()

        }, 3000)
    }

}


function clearcanvas(){
    c.clearRect(0, 0, canvas.width, canvas.height)
}



function Timer({ décompte }) {
    let index = décompte.innerHTML;
    let intervalId;  

    const timerObj = {
        start: function() {
            intervalId = setInterval(() => {
                décompte.innerHTML = index;
                // console.log(décompte.innerHTML);

                index--;

                if (index < 0) {
                    clearInterval(intervalId); 
                    whoWon(player,  enemy,  winer)
                }
            }, 1000);
        },
        stop: function() {
            clearInterval(intervalId); 
        }
    };

    timerObj.start(); 

    return timerObj;
}




