import { Scene } from "phaser";
import * as PIXI from "pixi.js";
import { default as data } from "./../data";
import { Paylines } from "./paylines";
import { Reel } from "./reel";

export class Machine extends PIXI.Container {

    private reels: Reel[];
    private pos: Array<number> = [5, 6, 3, 2, 1];
    private visibleTiles: Array<number> = [4, 5, 5, 5, 4];
    private reelsYposition: Array<number> = [421, 320, 320, 320, 421];
    private maskHeight: Array<number> = [406, 609, 609, 609, 406];
    private currentReel: number;

    constructor(width: number, height: number, numberOfReels: number = 5) {
        super();

        this.reels = [];
        window.addEventListener("SPIN_BTN_PRESSED", this.spinReels.bind(this));
        const background: PIXI.Sprite = PIXI.Sprite.fromImage("assets/reel.png");
        this.addChild(background);
        const slicedWidth: number = width / numberOfReels;
        for (let i: number = 0; i < numberOfReels; i++) {
            const reel: Reel = new Reel(slicedWidth, this.maskHeight[i], i, this.visibleTiles[i]);
            reel.position.set(354 + slicedWidth * i, this.reelsYposition[i]);
            this.addChild(reel);
            this.reels.push(reel);
            reel.on("spincomplete", this.onReelSpinComplete.bind(this));
        }

        const paylines: Paylines = new Paylines();
        paylines.y = 26;
        this.addChild(paylines);
        this.x = 0;

    }

    public spinReels(): void {
        this.currentReel = 0;
        let timeout: number = 0;
        for (const reel of this.reels) {
            setTimeout(reel.spin.bind(reel), timeout);
            timeout += 300;
        }
        setTimeout(this.stopReels.bind(this), 1500);
    }

    public stopReels(): void {
        this.reels[0].stop(this.pos[0]);
    }

    public update(delta: number): void {
        for (const reel of this.reels) {
            reel.update(delta);
        }
    }

    private onReelSpinComplete(event: Event): void {
        this.currentReel++;
        if (this.currentReel < this.reels.length) {
            // stop the next
            this.reels[this.currentReel].stop(this.pos[this.currentReel]);
        } else {
            let evt = new CustomEvent("ON_REELS_STOPPED", { detail: "Any Object Here" });
            window.dispatchEvent(evt);
            // all reels are stopped
            this.analyseResult();
        }
    }

    private analyseResult(): void {
        // for (const line of Paylines.lines) {
        //     let sum: number = 0;
        //     for (let i: number = 0; i < line.length - 1; i++) {
        //         const a: number = this.reels[i].tiles[line[i]].id;
        //         const b: number = this.reels[i + 1].tiles[line[i + 1]].id;
        //         if (a === b) {
        //             sum++;
        //         } else {
        //             break;
        //         }
        //     }
        //     const first: number = this.reels[0].tiles[line[0]].id;
        //     const value: number = data.symbols[first].paytable[sum];
        //     if (value > 0) {
        //         // TODO: player won something
        //     }
        // }
    }
}
