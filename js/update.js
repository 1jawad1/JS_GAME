// -------------<<< LAUNCHER >>>-----------------------


function animateHome(){


    animationId = requestAnimationFrame(animateHome)
    clearcanvas()

    bg.update()

    c.fillStyle = 'rgba(255, 255, 255, 0.2)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    enemy.update()


}



// ----------------------<<< GAME >>>-----------------------




function animate(){

    animationId = window.requestAnimationFrame(animate)

    clearcanvas()

    bg.update()
    // shop.update()

    c.fillStyle = 'rgba(255, 255, 255, 0.3)'
    c.fillRect(0, 0, canvas.width, canvas.height)

    player.update()
    enemy.update()

    // -----------------------------PLAYER CODE-----------------------------------
    
    player.velocity.x = 0;

    if(!player.isDead){
        


        if(keys.q.pressed && player.lastKey === 'q'){

            player.velocity.x = -player.speed.x
            player.switchSprite('Run')

            
        }else if(keys.d.pressed && player.lastKey === 'd'){
            
            player.velocity.x = player.speed.x
            player.switchSprite('Run')

        }else{
            player.switchSprite('Idle')

        }

        if(keys.z.pressed ){
            if(player.position.y + player.size.y >= canvas.height- 97){
                player.velocity.y = -player.speed.y
            }
        }

        
        if( player.velocity.y < 0 ){
            player.switchSprite('Jump')

        }else if(player.velocity.y > 0){
            player.switchSprite('Fall')

        }

        if(keys.espace.pressed && !keys.espace.attacked){
            keys.espace.attacked = true
            player.attaking()
            player.switchSprite('Attack1')
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
        
            enemy.velocity.x = -enemy.speed.x
            enemy.switchSprite('Run')
            
        }else if(keys.ArrowRight.pressed && enemy.lastKey === 'ArrowRight'){

            enemy.velocity.x = enemy.speed.x
            enemy.switchSprite('Run')
        }else{
            enemy.switchSprite('Idle')

        }


        if(keys.ArrowUp.pressed ){
            if(enemy.position.y + enemy.size.y >= canvas.height- 97){
                enemy.velocity.y = -enemy.speed.y
            }
        }

        if( enemy.velocity.y < 0 ){
            enemy.switchSprite('Jump')

        }else if(enemy.velocity.y > 0){
            enemy.switchSprite('Fall')
        }

        if(keys.ArrowDown.pressed && !keys.ArrowDown.attacked){
            keys.ArrowDown.attacked = true
            enemy.attaking()
            enemy.switchSprite('Attack1')
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

        timer.stop()
        whoWon(player, enemy, winer)
        // console.log('end Game')
    }

}




