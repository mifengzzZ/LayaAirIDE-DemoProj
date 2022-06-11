import { ui } from "../ui/layaMaxUI";

export default class TweenScene extends ui.tweenUI {
    
    private _textArr: Laya.Text[] = [this.l1, this.a0, this.y1, this.a1, this.b1, this.o1, this.x1];

    constructor() {
        super();
        
        this.startAction.clickHandler = Laya.Handler.create(this, this.onStart, null, false);
    }
    
    onEnable(): void {
    }

    onStart() {
        for (let index = 0; index < this._textArr.length; index++) {
            const text = this._textArr[index];
            // 从目标位置回到起始位置
            // Laya.Tween.from(text,{y:100}, 3000, Laya.Ease.elasticOut, null, index*1000, true);
            // 从起始位置运动到目标位置
            // Laya.Tween.to(text,{y:100}, 3000, Laya.Ease.elasticOut, null, index*1000, true);
            // 执行完回调
            Laya.Tween.to(text, {y: 100, update: Laya.Handler.create(this, this.onUpdateTextAction, [text], false)}, 3000, Laya.Ease.elasticOut, Laya.Handler.create(this, this.onRunActionComplete, [text], false), index*1000);
        }
    }

    /**
     * 执行动作时每帧都执行
     * @param txt 
     */
    onUpdateTextAction(txt: Laya.Text) {
        console.log('onUpdateTextAction : ', txt);
    }

    onRunActionComplete(txt: Laya.Text) {
        console.log('txt : ', txt);
    }

    onDisable(): void {
    }
}