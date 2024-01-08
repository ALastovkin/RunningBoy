import { Player } from './player.js';
import { InputHandler } from './input.js';
import { Background } from './background.js';
import { Enemy } from './enemies.js';
import { UI } from './UI.js';
import { Synonyms, synonym, synonymOfSynonym } from './synonyms.js';
import { Controls } from './controls.js'; // 08.11.2023
import { Button } from './Button.js';
import { Health } from './Health.js';
import { RestartGame } from './RestartGame.js';
import { StartGame } from './StartGame.js';
import { getCookie } from './Cookie.js';

window.addEventListener('load', function(){
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = 1000;
    canvas.height = 500;
    ctx.fillStyle = 'blue';
    ctx.font = "bold 30px Arial";

 
    class Game {
        constructor(width, height, canvas, flag){
            this.canvas = canvas; // 08.11.2023
            this.width = width;
            this.height = height;
            this.groundMargin = 20;
            this.speed = 0;
            this.maxSpeed = 5;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.controls = new Controls(this); // 08.11.2023
            
            this.synonyms = new Synonyms(this);
            this.synonym = synonym;
            this.synonymOfSynonym = synonymOfSynonym;
            
            this.enemies = [];
            this.particles = [];
            this.enemyTimer = 0;
            this.enemyInterval = 5000;
            this.debug = false;
            this.score = 0;
            if (getCookie().Count == undefined){
                document.cookie = `Count=0;max-age=31536000`;
            }
            this.record = getCookie();
            
            this.UI = new UI(this);
            this.fontColor = 'black';
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter();
            
            
            this.healths = [];
                /*
                this.h1 = new Health(20, 85, 25, 25),
                this.h2 = new Health(45, 85, 25, 25),
                this.h3 = new Health(70, 85, 25, 25),
                this.h4 = new Health(95, 85, 25, 25),
                this.h5 = new Health(120, 85, 25, 25),
                /* 
                this.h6 = new Health(145, 60, 25, 25),
                this.h7 = new Health(170, 60, 25, 25),
                this.h8 = new Health(195, 60, 25, 25),
                this.h9 = new Health(220, 60, 25, 25),
                this.h10 = new Health(245, 60, 25, 25),
                
            ];
            */
            
            this.restartGame = new RestartGame(this);
            //this.startGame = new StartGame(this);
            if(window.innerWidth < 992){
                this.buttons = [
                    this.Up = new Button(this,0,50,50,document.getElementById('up'),'ArrowUp'),
                    this.Down = new Button(this,1,50,50,document.getElementById('down'),'ArrowDown'),
                    this.Left = new Button(this,2,50,50,document.getElementById('left'),'ArrowLeft'),
                    this.Right = new Button(this,3,50,50,document.getElementById('right'),'ArrowRight'),
                    this.Enter = new Button(this,4,50,50,document.getElementById('enter'),'Enter')
                ];
            }
            this.flag = flag; //25.12.23
        }
        update(deltaTime){
            this.background.update();
            this.player.update(this.input.keys, deltaTime);
            // handleEnemies
            if (this.enemyTimer > this.enemyInterval){
                this.addEnemy();
                this.enemyTimer = 0;
            } else {
                this.enemyTimer += deltaTime;
            }
            this.enemies.forEach(enemy => {
                enemy.update(deltaTime);
                if (enemy.markerForDeletion) this.enemies.splice(this.enemies.indexOf(enemy), 1);
            });
            // handle particles
            this.particles.forEach((particle, index) => {
                particle.update();
                if (particle.markerForDeletion) this.particles.splice(index, 1);
            });
            this.synonyms.update();
            //this.controls.update(); // 08.11.2023
        }
        draw(context){
            this.background.draw(context);
            this.player.draw(context);
            this.enemies.forEach(enemy => {
                enemy.draw(context);
            });
            this.particles.forEach(particle => {
                particle.draw(context);
            });
            this.UI.draw(context);
            this.synonyms.draw(context);
            this.controls.draw(context); // 08.11.2023
            if(window.innerWidth < 992){
                this.buttons.forEach(b => {
                    b.draw(context);
                });
            }
            
            if(this.healths.length != 0){
                this.healths.forEach(h =>{
                    h.draw(context);
                });
            }

            if (this.healths.length == 0 && this.flag == true) {
                console.log("Health 0", this.flag);
                this.restartGame.draw(context);
                if (this.score > this.record.Count){
                    document.cookie = `Count=${this.score};max-age=31536000`;
                }
            }
        }
        addEnemy(){
            let i = this.synonyms.randomIndex();
            this.enemies.push(new Enemy(this,this.synonyms.randomWordForEnemies(i),i));
        }

        startAgain(){
            this.speed = 0;
            this.maxSpeed = 5;
            this.background = new Background(this);
            this.player = new Player(this);
            this.input = new InputHandler(this);
            this.controls = new Controls(this); // 08.11.2023
            
            this.synonyms = new Synonyms(this);
            this.synonym = synonym;
            this.synonymOfSynonym = synonymOfSynonym;
            
            this.enemies = [];
            this.particles = [];
            this.enemyTimer = 0;
            this.enemyInterval = 5000;
            this.debug = false;
            this.score = 0;
            if (getCookie().Count == undefined){
                document.cookie = `Count=0;max-age=31536000`;
            }
            this.record = getCookie();
            this.UI = new UI(this);
            this.fontColor = 'black';
            this.player.currentState = this.player.states[0];
            this.player.currentState.enter();

            this.healths = [
                
                this.h1 = new Health(20, 85, 25, 25),
                this.h2 = new Health(45, 85, 25, 25),
                this.h3 = new Health(70, 85, 25, 25),
                this.h4 = new Health(95, 85, 25, 25),
                this.h5 = new Health(120, 85, 25, 25),
                /*85               this.h6 = new Health(145, 60, 25, 25),
                this.h7 = new Health(170, 60, 25, 25),
                this.h8 = new Health(195, 60, 25, 25),
                this.h9 = new Health(220, 60, 25, 25),
                this.h10 = new Health(245, 60, 25, 25)
                */
            ];

            this.restartGame = new RestartGame(this);
            if(window.innerWidth < 992){
                this.buttons = [
                    this.Up = new Button(this,0,50,50,document.getElementById('up'),'ArrowUp'),
                    this.Down = new Button(this,1,50,50,document.getElementById('down'),'ArrowDown'),
                    this.Left = new Button(this,2,50,50,document.getElementById('left'),'ArrowLeft'),
                    this.Right = new Button(this,3,50,50,document.getElementById('right'),'ArrowRight'),
                    this.Enter = new Button(this,4,50,50,document.getElementById('enter'),'Enter')
                ];
            }

            this.flag = true;
        }
    }

    const game = new Game(canvas.width, canvas.height, canvas, null); // 08.11.2023
    let lastTime = 0;
    const Start = new StartGame(game);

    canvas.style.display="block";

    function animate(timeStamp){
        const deltaTime = timeStamp - lastTime;
        lastTime = timeStamp;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        game.draw(ctx);
        if(game.healths.length == 0 && game.flag == null){
            Start.draw(ctx);
        }
        if (game.healths.length != 0){
            game.update(deltaTime);
        }
        requestAnimationFrame(animate);
    }
    animate(0);
   ///alert(123);
});