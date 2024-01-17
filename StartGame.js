export class StartGame{
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
        this.flag = null;

        this.game.canvas.addEventListener('click', function(event) {          
            let xVal = event.offsetX;
            let yVal = event.offsetY;
            if ((canvas.getBoundingClientRect().width/2 - 60 < xVal) && (canvas.getBoundingClientRect().width/2 - 60 + width > xVal) && 
            (canvas.getBoundingClientRect().height/2-25 < yVal) && (canvas.getBoundingClientRect().height/2 - 25 + height > yVal)) {
                _game.startAgain();
                _game.flag = true;
            }   
         }, false);
    }

    draw(context){
        context.font = 50 + 'px' + 'Helvetica';
        context.textAlign = 'left';
        context.fillStyle = this.fontColor;

        context.fillText('Начать игру',
        this.game.width/2 + (100 - context.measureText('Начать игру ').width),
        this.game.height/2 - 60)

        context.drawImage(document.getElementById('play'),this.X,this.Y,this.width,this.height);
    }
}
