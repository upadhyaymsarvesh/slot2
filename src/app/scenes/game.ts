import * as PIXI from "pixi.js";
import { Machine } from "../components/machine";
import { Background } from "../components/background";
import { BottomPanel } from "../components/bottomPanel";
import { Scene } from "../engine/scene";

export class GameScene extends Scene {

    private readonly TEXT_STYLE: PIXI.TextStyle = new PIXI.TextStyle({
        fontSize: 36,
        fill: 0xffffff,
        stroke: 0x000000,
        strokeThickness: 5,
        align: "center",
    });

    private readonly NUMBER_FORMAT: Intl.NumberFormat = new Intl.NumberFormat("de-DE", {
        style: "currency",
        currency: "EUR",
    });

    private background: Background;
    private machine: Machine;
    private bottomPanel: BottomPanel;

    constructor(renderer: PIXI.SystemRenderer) {
        super(renderer);

        this.background = new Background(Scene.width, Scene.height);
        this.background.position.set(Scene.width / 2, Scene.height / 2);
        this.addChild(this.background);

        // adds machine
        this.machine = new Machine(1215, 609, 5);
        // this.machine.position.set((Scene.width - this.background.width) / 2, (Scene.height - 1080) / 2);
        this.addChild(this.machine);


        this.bottomPanel = new BottomPanel();
        this.bottomPanel.position.set(0, Scene.height - 182);
        this.addChild(this.bottomPanel);
    }

    public update(delta: number): void {
        if (this.machine) {
            this.machine.update(delta);
        }
    }

    protected preload(): void {

    }

    protected create(): void {

    }
}
