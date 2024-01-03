

class Sprite{

    constructor( { position, imageSrc, scale= 1, framesMax=1, framesHold, offset = {x: 0, y: 0}, debug = false } ){
        this.position = position
        this.image = new Image()
        this.image.src = imageSrc
        this.scale = scale
        this.framesMax = framesMax
        this.currentFrame = 0 
        this.framesElapsed = 0
        this.framesHold = framesHold
        this.offset = offset
        this.debug = debug
    }

    draw(){

            c.drawImage(
                this.image,
                this.currentFrame * (this.image.width/this.framesMax),
                0,
                this.image.width/this.framesMax,
                this.image.height,
                this.position.x + this.offset.x, 
                this.position.y + this.offset.y , 
                this.image.width/this.framesMax * this.scale, 
                this.image.height * this.scale
                
            )
            if(this.debug){
                c.strokeRect(this.position.x + this.offset.x, 
                    this.position.y + this.offset.y , 
                    this.image.width/this.framesMax * this.scale, 
                    this.image.height * this.scale)
            }
    }

    animateFrames(death){
        this.framesElapsed ++
        if(this.framesElapsed % this.framesHold == 0){
            if(this.currentFrame < this.framesMax-1 ){
                 this.currentFrame ++
            }
            else {
                if(this.image != death){
                    this.currentFrame = 0 ; 

                }

            }
        }
    }

    update(){
        this.draw()
        this.animateFrames()
    }



}

class Fighter extends Sprite{

    constructor( {

        position,
        velocity, 
        size, 
        color, 
        health, 
        damage, 
        offsetX=0, 
        offsetY=0, 
        imageSrc, 
        scale= 1, 
        framesMax=1, 
        framesHold=5,
        offset,
        sprites,
        groundPosition,
        debug,
        speed = 7.5,
        profileSrc

    } ){
        super({
            position,
            imageSrc,
            scale,
            framesMax,
            framesHold,
            offset,
            debug
        })
        this.velocity = velocity
        this.size = size
        this.lastKey;
        this.attaque = {

            position: {
                x: this.position.x ,
                y: this.position.y 
            },
            size: {
                 x: 150, 
                 y: 20 
                },
            offset: {
                x: offsetX,
                y: offsetY
            }
            }
        this.color = color
        this.isAttaking = false
        this.health =health
        this.damage = damage
        this.didAttaque = false
        this.currentFrame = 0 
        this.framesElapsed = 0
        this.sprites = sprites
        this.groundPosition = groundPosition
        this.speed = speed
        this.isDead = false
        this.profileSrc = profileSrc

        for( const sprite in this.sprites){
            sprites[sprite].image = new Image();
            sprites[sprite].image.src = sprites[sprite].imageSrc
        }
        console.log(sprites)
    }



    update(){


        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.attaque.position.x = this.position.x + this.attaque.offset.x,
        this.attaque.position.y = this.position.y + this.attaque.offset.y


        if(this.debug){
            c.fillStyle = this.color
            c.fillRect(this.position.x, this.position.y, this.size.x, this.size.y)
            c.fillRect(this.attaque.position.x, this.attaque.position.y, this.attaque.size.x, this.attaque.size.y)

        }

        this.draw()
        this.animateFrames(this.sprites.Death.image)


        if(this.position.y + this.size.y +this.velocity.y >= canvas.height-96){
            this.velocity.y = 0
            this.position.y = this.groundPosition
        }else{
            this.velocity.y += gravity ; 

        }

    }

    attaking(){
        this.isAttaking = true
        this.switchSprite('Attack1')
    }

    takeHits(hitGiver, reverse = false, id){
        this.health = this.health - calculeDamage({rectangle1: hitGiver, rectangle2: this, reverse: reverse}) >= 0 ? this.health - calculeDamage({rectangle1: hitGiver, rectangle2: this, reverse: reverse}) : 0;
        gsap.to(id,{
            width: this.health + '%'
        })
        this.switchSprite('takeHit')
    }

    switchSprite(sprite){
        if(!this.isDead){
            if(this.image === this.sprites.Attack1.image && this.currentFrame < this.sprites.Attack1.framesMax-1) return

            if(this.image === this.sprites.takeHit.image && this.currentFrame < this.sprites.takeHit.framesMax-1) return
        }
                switch(sprite){
                    case 'Idle':
                        if(this.image != this.sprites.Idle.image){
                            this.image = this.sprites.Idle.image
                            this.framesMax = this.sprites.Idle.framesMax
                            this.framesHold = this.sprites.Idle.framesHold
                            this.currentFrame = 0
                        }
                        break
                    case 'Run':
                        if(this.image != this.sprites.Run.image){
                            this.image = this.sprites.Run.image
                            this.framesMax = this.sprites.Run.framesMax
                            this.framesHold = this.sprites.Run.framesHold
                            this.currentFrame = 0
                        }
                        break
                    case 'Jump':
                        if(this.image != this.sprites.Jump.image){
                            this.image = this.sprites.Jump.image
                            this.framesMax = this.sprites.Jump.framesMax
                            this.framesHold = this.sprites.Jump.framesHold
                            this.currentFrame = 0
                        }
                        break
                    case 'Fall':
                        if(this.image != this.sprites.Fall.image){
                            this.image = this.sprites.Fall.image
                            this.framesMax = this.sprites.Fall.framesMax
                            this.framesHold = this.sprites.Fall.framesHold
                            this.currentFrame = 0
                        }
                        break
                    case 'Attack1':
                        if(this.image != this.sprites.Attack1.image){
                            this.image = this.sprites.Attack1.image
                            this.framesMax = this.sprites.Attack1.framesMax
                            this.framesHold = this.sprites.Attack1.framesHold
                            this.currentFrame = 0
                            
                            console.log('attaque')
                        }
                        break
                    case 'takeHit':
                        if(this.image != this.sprites.takeHit.image){
                            this.image = this.sprites.takeHit.image
                            this.framesMax = this.sprites.takeHit.framesMax
                            this.framesHold = this.sprites.takeHit.framesHold
                            this.currentFrame = 0
                            
                            console.log('attaque')
                        }
                        break
                    case 'Death':
                        if(this.image != this.sprites.Death.image){
                            this.image = this.sprites.Death.image
                            this.framesMax = this.sprites.Death.framesMax
                            this.framesHold = this.sprites.Death.framesHold
                            this.currentFrame = 0
                            
                            console.log('attaque')
                        }
                        break
                }
            }

}