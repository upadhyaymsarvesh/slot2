import data from "../data";

export class Background extends PIXI.Container {

    private background: PIXI.Sprite;
    private resizeData: any;

    constructor(width, height) {
        super();
        this.background = PIXI.Sprite.fromImage("assets/basegameBG.jpg");
        this.background.width = width;
        this.background.anchor.set(0.5,0.5);
        this.background.height = height;
        this.addChildAt(this.background, 0);
        // window.addEventListener("resize", this.resize.bind(this));
    }
    private resize(): void {
        this.resizeData = {};
        var innerWidth = window.innerWidth;
        var innerHeight = window.innerHeight;        
		if(innerWidth >= innerHeight){
			this.resizeData.landscape = true;
		}else{
			this.resizeData.landscape = false;
		}
		this.resizeData.renderWidth = innerWidth * devicePixelRatio;
		this.resizeData.renderHeight = innerHeight * devicePixelRatio;
		this.resizeData.marginLeft = 0;
		this.resizeData.marginTop = 0;
		this.resizeData.width = innerWidth;
		this.resizeData.height = innerHeight;
        
        this.background.width = this.resizeData.width;
        this.background.height = this.resizeData.height;
        this.background.y = (this.background.height - data.gameHeight) / 2;
        // this.background.anchor.set(0.5,0.5);
        // this.background.position.set(data.gameWidth / 2, data.gameHeight / 2);
        console.log("AAAAAAAAAAAA", this.background);

        // const ratio: number = Math.min(window.innerWidth / Scene.width, window.innerHeight / Scene.height);
        // this.scale.set(ratio, ratio);
        // this.renderer.resize(Scene.width * ratio, Scene.height * ratio);
    }

    // canvasResize(): void {
    //     this.background.width = Scene.resizeData.width;
    //     this.renderer.view.style.height = Scene.resizeData.height + 'px';
    //     this.renderer.view.width = Scene.resizeData.renderWidth;
    //     this.renderer.view.height = Scene.resizeData.renderHeight;
    //     this.renderer.view.style.marginLeft = Scene.resizeData.marginLeft + "px";
    //     this.renderer.view.style.marginTop = Scene.resizeData.marginTop + "px";
    //     this.renderer.resize(window.innerWidth, window.innerHeight)
    // }

}