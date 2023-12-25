export class UI{
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.fontFamily = 'Helvetica';

    }
    draw(context){
        context.font = this.fontSize + 'px' + this.fontFamily;
        context.textAlign = 'left';
        context.fillStyle = this.game.fontColor;
        // score
        context.fillText('Очки: ' + this.game.score, 20, 50);
        context.fillText('Рекорд: ' + this.game.record.Count, 20, 80);
    }
}