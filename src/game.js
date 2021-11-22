export default class Game {
    constructor(w, h) {
        this.w = w;
        this.h = h;
    }

    draw(ctx) {
        ctx.fillStyle = '#000'
        ctx.fillRect(0, 0, this.w, this.h)
    }
}