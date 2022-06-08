export default class ButtonScene extends Laya.Script {

    private _skin: string = 'res/atlas/comp/button.png';

    constructor() {
        super();

        Laya.loader.load(this._skin, Laya.Handler.create(this, this.onLoaded));
    }

    private onLoaded() {
        let btn: Laya.Button = new Laya.Button(this._skin);
        Laya.stage.addChild(btn);
        btn.width = 32;
        btn.height = 32;
        btn.pos(100, 100);
        btn.label = '关闭';
        btn.clickHandler = Laya.Handler.create(this, this.onClick, null, false);
    }

    onClick() {
        
    }

    onEnable(): void {
    }

    onDisable(): void {
    }
}