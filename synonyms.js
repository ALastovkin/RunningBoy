export const synonym = ['amazing','beautiful','cool','end','good'];
export const synonymOfSynonym = [['incredible','unbelievable','improbable','fabulous'],
['immoral','wicked','wrong','rank'],
['chilly','cold','frosty','icy'],
['stop','finish','close','halt'],
['fine','great','friendly','ample']];

export class Synonyms{
    constructor(game){
        this.game = game;
        this.fontSize = 30;
        this.length = synonym.length;
        this.lengthOfSynonym = synonymOfSynonym[0].length;
        this.fontFamaly = 'Helvetica';

        this.wordInGame = this.nextWord();
        this.indexOfWord = synonym.indexOf(this.wordInGame)
        this.flag = true;
    }
    update(){
        if(this.flag === false){
            this.wordInGame = this.nextWord();
            this.indexOfWord = synonym.indexOf(this.wordInGame)
            this.flag = true;
        }
    }
    draw(context){
        context.font = this.fontSize + 'px' + this.fontFamaly;
        context.textAling = 'center';
        context.fillStyle = this.game.fontColor;

        // Выводим слово
        context.fillText(this.wordInGame, this.game.width/2 +
        (50 - context.measureText(this.wordInGame).width), 50);
    }

    // Возвращаемследующий синоним для игры
    nextWord(){
        return synonym[Math.floor(Math.random() * this.length)];
    }
    // Рандомное слово для монстра
    randomIndex(){
        return Math.floor(Math.random() * this.length);
    }
    randomWordForEnemies(i){
        return synonymOfSynonym[i][Math.floor(Math.random() * this.lengthOfSynonym)];
    }
}