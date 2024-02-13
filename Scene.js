class Scene {
    gameObjects = []
    constructor(backgroundColor) {
        this.backgroundColor = backgroundColor
    }
    update() {
                

        for(let gameObject of this.gameObjects){
            if(gameObject.update){
                gameObject.update();
            }
        }
    }
    draw(ctx) {
        //Clear the canvas
        ctx.fillStyle = this.backgroundColor
        ctx.beginPath()
        ctx.rect(0, 0, ctx.canvas.width, ctx.canvas.height)
        ctx.fill()


        for (let gameObject of this.gameObjects) {
            gameObject.draw(ctx);
        }

    }
}