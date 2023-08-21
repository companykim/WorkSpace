class Target {
	constructor(netImage, posX, posY, width, height) {
        this.netImage = netImage;
        this.posX = posX;
        this.posY = posY; 
        this.width = width; 
        this.height = height;
    }

    draw(ctx) {
        ctx.drawImage(this.netImage, this.posX, this.posY, this.width, this.height);
    }
    
    inXBound(ballX) {
        return (ballX >= this.posX) && (ballX <= this.posX - this.width);
    }
    inYBound(ballY) {
        return (ballY >= this.posY) && (ballY <= this.height);
    }
}