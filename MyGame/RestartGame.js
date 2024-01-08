export class RestartGame{
    constructor(game){
        this.game = game;
        let canvas = this.game.canvas;
        this.X = this.game.canvas.width/2-60;
        this.Y = this.game.canvas.height/2-25;
        this.width = 100;
        this.height = 100;
        let width = this.width
        let height = this.height
        let _game = this.game;

        this.game.canvas.addEventListener('click', function(event) {          
            let xVal = event.offsetX;
            let yVal = event.offsetY;
            if ((canvas.getBoundingClientRect().width/2 - 60 < xVal) && (canvas.getBoundingClientRect().width/2 - 60 + width > xVal) && 
            (canvas.getBoundingClientRect().height/2-25 < yVal) && (canvas.getBoundingClientRect().height/2 - 25 + height > yVal)) {
                _game.startAgain();
            }   
         }, false);
    }

    draw(context){
        context.font = 50+ 'px' + 'Helvetica';
        context.textAlign = 'left';
        context.fillStyle = this.fontColor;

        context.fillText('Ваш результат',
        this.game.width/2 + (100 - context.measureText('Ваш результат').width),
        this.game.height/2 - 60)

        context.fillText(this.game.score,
        this.game.width/2 + (200 - context.measureText('Ваш результат').width),
        this.game.height/2 - 10);

        context.drawImage(document.getElementById('play'),this.X,this.Y,this.width,this.height);
    }
}