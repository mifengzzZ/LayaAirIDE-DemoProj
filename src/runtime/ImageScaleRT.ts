import { ui } from "../ui/layaMaxUI";


export default class ImageScaleRT extends Laya.Image {

    public scaleTime: number = 100;

    constructor() {
        super();
        this.anchorX = this.anchorY = 0.5;
        this.on(Laya.Event.MOUSE_DOWN, this, this.onScaleSmall);
        this.on(Laya.Event.MOUSE_UP, this, this.onScaleBig);
        this.on(Laya.Event.MOUSE_OUT, this, this.onScaleBig);
    }

    private onScaleSmall(): void {
        Laya.Tween.to(this, { scaleX: 0.8, scaleY: 0.8 }, this.scaleTime);
    }

    private onScaleBig(): void {
        Laya.Tween.to(this, { scaleX: 1, scaleY: 1 }, this.scaleTime);
    }

    onAwake(): void {   
    }

    onEnable(): void {
    }

    onDisable(): void {
    }

}