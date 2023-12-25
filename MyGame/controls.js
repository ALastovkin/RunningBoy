export class Controls {
    constructor(game){
        this.game = game;
        //console.log(this.game.canvas);
        let canvas = this.game.canvas;
        const BODY = document.getElementById('canvasWrapper');//document.querySelector('body')

        const toggleFullscreen = () => {
            if (document.fullscreenElement)
                document.exitFullscreen()
            else
                BODY.requestFullscreen()
            }

      
        const onChange = () => {
            //console.log('fullscreenchange on change');
            BODY.className = document.fullscreenElement ? 'fullscreen' : ''
        }
        document.addEventListener('fullscreenchange', onChange)

        this.game.canvas.addEventListener('click', function(event) {          
            let xVal = event.offsetX;
            let yVal = event.offsetY;
            if ((canvas.getBoundingClientRect().width - 60 < xVal) && (canvas.getBoundingClientRect().width - 20 > xVal) &&  (50 > yVal) && (20 < yVal)) {
                console.log('we are here',canvas.getBoundingClientRect().width, xVal, yVal);
                toggleFullscreen();
            }
         }, false);
    }


    update(){

    }


    draw(context){
        //context.fillRect(950, 450, 50, 50);
        //console.log('here')
        if(document.fullscreenElement){
            context.drawImage(document.getElementById("infullscreen"),950,20,30,30)
        }
        else{
            context.drawImage(document.getElementById("notinfullscreen"),950,20,30,30)

        }
    }

}