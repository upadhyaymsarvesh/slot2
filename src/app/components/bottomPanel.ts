import Button from './../../framework/utils/button/Button';
import { EventEmitter } from 'eventemitter3';
import DelegatedEventTarget from './../../framework/utils/Event/DelegatedEvent';
import { EventDispatcher } from './../../framework/event/EventDispatcher';
import * as Phaser from 'phaser';
import { default as data } from "./../data";
// var em = require('events');

export class BottomPanel extends PIXI.Container {

    private textStyle = {
        font: 'bold italic 36px Arial',
        fill: '#F7EDCA',
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 440
    };

    private totalWinStyle = {
        font: 'bold italic 70px Arial',
        fill: '#F7EDCA',
        stroke: '#4a1850',
        strokeThickness: 5,
        dropShadow: true,
        dropShadowColor: '#000000',
        dropShadowAngle: Math.PI / 6,
        dropShadowDistance: 6,
        wordWrap: true,
        wordWrapWidth: 800
    };
    private isDown: boolean = false;
    private isOver: boolean = false;



    private spinButton;
    private infoButton;
    private betMinusButton;
    private betPlusButton;
    private maxBetButton;

    private totalBet;
    private totalWin;


    private spinButtonNormal;
    private spinButtonPressed;

    private infoButtonPressed;
    private infoButtonNormal;

    private betDecNormal;
    private betDecPressed;

    private betIncNormal;
    private betIncPressed;

    private maxBetNormal;
    private maxBetPressed;
    private currentBetIndex: number;

    private evtDispatcher: EventDispatcher;
    constructor() {
        super();
        const bottomPanelBG: PIXI.Sprite = PIXI.Sprite.fromImage("assets/bottomPanel/bottomPanelBase.png");
        this.addChild(bottomPanelBG);
        this.isDown = false;

        this.addSpinButton();
        this.addMaxBetButton();
        this.addInfoButton();
        this.currentBetIndex = 0;
        this.addBetButtons();
        this.addTotalBetTextField();
        this.addTotalWinField();

        window.addEventListener("ON_REELS_STOPPED", this.onReelsStopped.bind(this));
    }

    private addTotalBetTextField(): void {
        this.totalBet = new PIXI.Text('', this.textStyle);
        // this.totalBet.width = 300;
        this.totalBet.x = 280;
        this.totalBet.y = 70;
        this.totalBet.text = String(data.betConfig[this.currentBetIndex]);
        this.addChild(this.totalBet);

    }

    private addTotalWinField(): void {
        this.totalWin = new PIXI.Text('', this.totalWinStyle);
        this.totalWin.x = 800;
        this.totalWin.y = 50;

        this.addChild(this.totalWin);
    }

    private addSpinButton() {
        this.spinButtonNormal = PIXI.Texture.from('assets/bottomPanel/spinNormal.png');
        this.spinButtonPressed = PIXI.Texture.from('assets/bottomPanel/spinPressed.png');

        this.spinButton = new PIXI.Sprite(this.spinButtonNormal);
        this.spinButton.buttonMode = true;

        this.spinButton.anchor.set(0.5);
        this.spinButton.x = 1700;
        this.spinButton.y = 110;

        // make the button interactive...
        this.spinButton.interactive = true;
        this.spinButton.buttonMode = true;

        this.spinButton
            .on('pointerdown', this.onSpinDown.bind(this));

        this.addChild(this.spinButton);
    }

    private onReelsStopped(): void {
        this.spinButton.interactive = true;
    }

    private onSpinDown() {
        this.isDown = true;
        this.spinButton.interactive = false;
        let evt = new CustomEvent("SPIN_BTN_PRESSED", { detail: "Any Object Here" });
        window.dispatchEvent(evt);
    }

    private addMaxBetButton() {
        this.maxBetNormal = PIXI.Texture.from('assets/bottomPanel/maxBetNormal.png');
        this.maxBetPressed = PIXI.Texture.from('assets/bottomPanel/maxBetPressed.png');

        this.maxBetButton = new PIXI.Sprite(this.maxBetNormal);
        this.maxBetButton.buttonMode = true;

        this.maxBetButton.anchor.set(0.5);
        this.maxBetButton.x = 1410;
        this.maxBetButton.y = 110;

        // make the button interactive...
        this.maxBetButton.interactive = true;
        this.maxBetButton.buttonMode = true;

        this.maxBetButton
            .on('pointerdown', this.onMaxBetDown.bind(this));

        this.addChild(this.maxBetButton);
    }

    private onMaxBetDown() {
        this.isDown = true;
        this.currentBetIndex = data.betConfig.length - 1;
        this.totalBet.text = String(data.betConfig[this.currentBetIndex]);
        let evt = new CustomEvent("SPIN_BTN_PRESSED", { detail: "Any Object Here" });
        window.dispatchEvent(evt);
        // this.spinButton.texture = this.spinButtonDown;
        // this.spinButton.alpha = 1;
        // em = new EventEmitter();
        // em.emit("START_SPINNING");
    }

    private addInfoButton() {
        this.infoButtonNormal = PIXI.Texture.from('assets/bottomPanel/infoNormal.png');
        this.infoButtonPressed = PIXI.Texture.from('assets/bottomPanel/infoPressed.png');

        this.infoButton = new PIXI.Sprite(this.infoButtonNormal);
        this.infoButton.buttonMode = true;

        this.infoButton.anchor.set(0.5);
        this.infoButton.x = 75;
        this.infoButton.y = 110;

        // make the button interactive...
        this.infoButton.interactive = true;
        this.infoButton.buttonMode = true;

        this.infoButton
            .on('pointerdown', this.onInfoDown);

        this.addChild(this.infoButton);
    }

    private onInfoDown() {
        this.isDown = true;
        // this.spinButton.texture = this.spinButtonDown;
        // this.spinButton.alpha = 1;
        // em = new EventEmitter();
        // em.emit("START_SPINNING");
    }

    private addBetButtons() {
        this.betDecNormal = PIXI.Texture.from('assets/bottomPanel/minusNormal.png');
        this.betDecPressed = PIXI.Texture.from('assets/bottomPanel/minusPressed.png');

        this.betIncNormal = PIXI.Texture.from('assets/bottomPanel/plusNormal.png');
        this.betIncPressed = PIXI.Texture.from('assets/bottomPanel/plusPressed.png');

        this.betMinusButton = new PIXI.Sprite(this.betDecNormal);
        this.betMinusButton.buttonMode = true;

        this.betMinusButton.anchor.set(0.5);
        this.betMinusButton.x = 200;
        this.betMinusButton.y = 110;

        // make the button interactive...
        this.betMinusButton.interactive = true;
        this.betMinusButton.buttonMode = true;

        this.betMinusButton
            .on('pointerdown', this.onBetDecrease.bind(this));

        this.addChild(this.betMinusButton);

        this.betPlusButton = new PIXI.Sprite(this.betIncNormal);
        this.betPlusButton.buttonMode = true;

        this.betPlusButton.anchor.set(0.5);
        this.betPlusButton.x = 548;
        this.betPlusButton.y = 110;

        // make the button interactive...
        this.betPlusButton.interactive = true;
        this.betPlusButton.buttonMode = true;

        this.betPlusButton
            .on('pointerdown', this.onBetIncrease.bind(this));

        this.addChild(this.betPlusButton);

    }

    private onBetIncrease() {
        this.isDown = true;
        if (this.currentBetIndex === 0) {
            this.betMinusButton.interactive = true;
        }
        if (this.currentBetIndex < data.betConfig.length - 1) {
            this.currentBetIndex++;
            this.totalBet.text = String(data.betConfig[this.currentBetIndex]);
        }
        if (this.currentBetIndex === data.betConfig.length) {
            this.betPlusButton.interactive = false;
        }
        // this.spinButton.texture = this.spinButtonDown;
        // this.spinButton.alpha = 1;
        // em = new EventEmitter();
        // em.emit("START_SPINNING");
    }

    private onBetDecrease() {
        this.isDown = true;
        if (this.currentBetIndex === data.betConfig.length - 1) {
            this.betPlusButton.interactive = true;
        }
        if (this.currentBetIndex > 0) {
            this.currentBetIndex--;
            this.totalBet.text = String(data.betConfig[this.currentBetIndex]);
        }
        if (this.currentBetIndex === 0) {
            this.betMinusButton.interactive = false;
        }
        // this.spinButton.texture = this.spinButtonDown;
        // this.spinButton.alpha = 1;
        // em = new EventEmitter();
        // em.emit("START_SPINNING");
    }
}