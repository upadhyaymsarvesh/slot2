import * as PIXI from "pixi.js";
import { Main } from "../main";

export abstract class Scene extends PIXI.Container {

    public static readonly width: number = 1920;
    public static readonly height: number = 1400;
    public static resizeData: any;
    private renderer: any;

    constructor(renderer: PIXI.SystemRenderer) {
        super();
        this.renderer = renderer;
        this.resize();
        

        this.preload();
        // add on loader complete listener
        PIXI.loader.onComplete.add(() => this.create());

        // add resize listener
        window.addEventListener("resize", this.resize.bind(this));
    }

    public resize(): void {

        const ratio: number = Math.min(window.innerWidth / Scene.width, window.innerHeight / Scene.height);
        this.scale.set(ratio, ratio);
        this.renderer.resize(Scene.width * ratio, Scene.height * ratio);
    }

    public abstract update(delta: number): void;
    protected abstract preload(): void;
    protected abstract create(): void;
}
