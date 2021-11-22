import InputHandler from './input';

export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
        new InputHandler(this);
    }

    draw(ctx) {
        ctx.font = '20px Consolas'
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, this.w, this.h);
    }
}