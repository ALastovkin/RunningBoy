export class Enemy {
    constructor(game, text, index){
        this.frameX = 0;
        this.frameY  = 0;
        this.fps = 1000;
        this.frameInterval = 1000/this.fps;
        this.frameTimer = 0;
        this.markerForDeletion = false;

        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.image = document.getElementById('enemy');
        this.speedX = -3;
        this.speedY = 0;
        this.maxFrame = 16;

        this.text = text;
        this.index = index;
    }
    update(deltaTime){
        // movement
        this.x += this.speedX;
        this.y += this.speedY;
        if (this.frameTimer > this.frameInterval){
            this.frameTimer = 0;
            if (this.frameX < this.maxFrame) this.frameX++;
            else this.frameX = 0;
        } else {
            this.frameTimer += deltaTime;
        }
        // check in off screen
        if (this.x + this.width < 0) this.markerForDeletion = true;

        
        this.speedX = -3 - this.game.speed;
    }
    draw(context){
        if (this.game.debug) context.strokeRect(this.x, this.y, 
            this.width, this.height);
        context.drawImage(this.image, this.frameX * this.width, 0,
        this.width, this.height, this.x, this.y,
        this.width, this.height);
        context.measureText(this.text).width;
        //context.font = "bold 30px Arial";
        context.fillText(this.text,
        this.x + (100 - context.measureText(this.text).width)/2, this.y - 10)
    }
}

export class GroundEnemy extends Enemy {
    constructor(game){
        this.game = game;
        this.width = 100;
        this.height = 100;
        this.x = this.game.width;
        this.y = this.game.height - this.height - this.game.groundMargin;
        this.image = document.getElementById('enemy');
        this.speedX = -3;
        this.speedY = 0;
        this.maxFrame = 16;
    }
    update(deltaTime){
        super.update(deltaTime);
        this.speedX = -3 - this.game.speed;
    }
}