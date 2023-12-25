export class Health{
    constructor(x, y, width, height){
        this.X = x;
        this.Y = y;
        this.Width = width;
        this.Height = height;
        this.Image = document.getElementById('health');
    }

    draw(context){
        context.drawImage(this.Image, this.X, this.Y, this.Width, this.Height);
    }
}