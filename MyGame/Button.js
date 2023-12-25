export class Button{
    constructor(game, Key, Width, Height, Image, key){
        this.game = game;
        let _game = this.game
        switch(Key){
            case 0:
                this.X = this.game.width*0.15;
                this.Y = this.game.height*0.4-50;
                break;
            case 1:
                this.X = this.game.width*0.15;
                this.Y = this.game.height*0.4;
                break;
            case 2:
                this.X = this.game.width*0.15-50;
                this.Y = this.game.height*0.4;
                break;
            case 3:
                this.X = this.game.width*0.15+50;
                this.Y = this.game.height*0.4;
                break;
            case 4:
                this.X = this.game.width*0.8;
                this.Y = this.game.height*0.4;
                break;
        }
        this.Width = Width;
        this.Height = Height;
        this.Image = Image;
        let canvas = this.game.canvas


        this.game.canvas.addEventListener('mousemove', function(event) {
            let xVal = event.offsetX;
            let yVal = event.offsetY;
            if ((canvas.getBoundingClientRect().width*0.15 < xVal) && (canvas.getBoundingClientRect().width*0.15 + 50 > xVal) &&  (canvas.getBoundingClientRect().height*0.4 > yVal) && (canvas.getBoundingClientRect().height*0.4-50 < yVal)) {
                _game.input.keys.push('ArrowUp');
            }
            else if ((canvas.getBoundingClientRect().width*0.15 < xVal) && (canvas.getBoundingClientRect().width*0.15 + 50 > xVal) &&  (canvas.getBoundingClientRect().height*0.4 + 50 > yVal) && (canvas.getBoundingClientRect().height*0.4 < yVal)) {
                _game.input.keys.push('ArrowDown');
            }
            else if ((canvas.getBoundingClientRect().width*0.15 - 50 < xVal) && (canvas.getBoundingClientRect().width*0.15 > xVal) &&  (canvas.getBoundingClientRect().height*0.4 + 50 > yVal) && (canvas.getBoundingClientRect().height*0.4 < yVal)) {
                _game.input.keys.push('ArrowLeft');
            }
            else if ((canvas.getBoundingClientRect().width*0.15+50 < xVal) && (canvas.getBoundingClientRect().width*0.15+50+50 > xVal) &&  (canvas.getBoundingClientRect().height*0.4 + 50 > yVal) && (canvas.getBoundingClientRect().height*0.4< yVal)) {
                _game.input.keys.push('ArrowRight');
            }
            else if ((canvas.getBoundingClientRect().width*0.8 < xVal) && (canvas.getBoundingClientRect().width*0.8 + 50 > xVal) &&  (canvas.getBoundingClientRect().height*0.4 + 50 > yVal) && (canvas.getBoundingClientRect().height*0.4 < yVal)) {
                _game.input.keys.push('Enter');
            }
            else{
                _game.input.keys.splice(_game.input.keys.indexOf('ArrowUp'), 1);
                _game.input.keys.splice(_game.input.keys.indexOf('ArrowDown'), 1);
                _game.input.keys.splice(_game.input.keys.indexOf('ArrowLeft'), 1);
                _game.input.keys.splice(_game.input.keys.indexOf('ArrowRight'), 1);
                _game.input.keys.splice(_game.input.keys.indexOf('Enter'), 1);
            }
         }, false);
    }

    draw(context){
        context.drawImage(this.Image, this.X, this.Y, this.Width, this.Height);
    }
}