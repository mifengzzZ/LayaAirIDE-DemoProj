export default class CheckBox extends Laya.Script {

    private skin: string = 'res/atlas/comp/checkBox.alats';
    private skin1: string = 'checkbox_1.png';
    private skin2: string = 'checkbox_2.png';

    constructor() {
        super();

        Laya.loader.load([{ url: this.skin, type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoaded));
    }

    onLoaded() {
        let cb1: Laya.CheckBox = new Laya.CheckBox();
        cb1.skin = this.skin1;
        Laya.stage.addChild(cb1);
        cb1.pos(200, 200);
        cb1.label = '我是多选框1';
        cb1.labelSize = 24;
        cb1.selected = true;

        let cb2: Laya.CheckBox = new Laya.CheckBox();
        cb2.skin = this.skin2;
        Laya.stage.addChild(cb2);
        cb2.pos(200, 500);
        cb2.label = '我是多选框2';
        cb2.labelSize = 24;
    }

    onEnable(): void {
    }

    onDisable(): void {
    }
}