function rectangularCollision({ rectangle1, rectangle2}){
    return (
        rectangle1.attaque.position.x + rectangle1.attaque.size.x >= rectangle2.position.x &&
        rectangle1.attaque.position.x <= rectangle2.position.x + rectangle2.size.x &&
        rectangle1.attaque.position.y + rectangle1.attaque.size.y >= rectangle2.position.y &&
        rectangle1.attaque.position.y <= rectangle2.position.y + rectangle2.size.y 
    )
}

function calculeDamage({rectangle1, rectangle2, reverse = false}){
    
    if(reverse){
        return(
            (rectangle2.position.x + rectangle2.size.x - rectangle1.attaque.position.x  )*0.1
        )
    }else{
        return(
            (rectangle1.attaque.position.x + rectangle1.attaque.size.x - rectangle2.position.x )*0.1
        )
    }

}

function whoWon(user1, user2, winer){
    if(user1.health == user2.health){
        winer.innerHTML = 'No one has won. Tie !!'
    }else if( user1.health > user2.health){
        winer.innerHTML = 'The user 1 has won the game !!'
        user2.isDead = true
    }else if( user1.health < user2.health){
        winer.innerHTML = 'The user 2 has won the game !!'
        user1.isDead = true
}
}


