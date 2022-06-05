// import MassLoader from "../MassLoader";

export default class TTFMedium extends Laya.Script {

    // public txt: Laya.Text = null;

    constructor() {
        super();
    }

    onAwake(): void {
        Laya.loader.load('comp/font/SourceHanSansCN_Medium.ttf', Laya.Handler.create(this, (res: Laya.TTFLoader) => {
            console.log('TTFMedium res : ', res);
            if (this.owner instanceof Laya.Label) {
                console.log('Label res.fontName : ', res.fontName);
                var a: Laya.Label = this.owner as Laya.Label;
                a.font = res.fontName;
                console.log('Label text : ', a.text);
                a.text = a.text;
            } else if (this.owner instanceof Laya.HTMLDivElement) {
                console.log('HTMLDivElement res.fontName : ', res.fontName);
                var a1: Laya.HTMLDivElement = this.owner as Laya.HTMLDivElement;
                a1.style.family = res.fontName;
                a1.style.font = res.fontName;
            } else {
                console.log('other res.fontName : ', res.fontName);
                this.owner["labelFont"] = res.fontName;
            }
        }), null, Laya.Loader.TTF, 0, true);

        // var res = MassLoader.getRes("SourceHanSansCN_Medium.ttf")
        // Laya.loader.load("SourceHanSansCN_Medium.ttf", Laya.Handler.create(this, (res: Laya.TTFLoader) => {
        // if (this.owner instanceof Laya.Label) {
        //     var a: Laya.Label = this.owner as Laya.Label;
        //     a.font = res.fontName;
        // } else if (this.owner instanceof Laya.HTMLDivElement) {
        //     var a1: Laya.HTMLDivElement = this.owner as Laya.HTMLDivElement;
        //     a1.style.family = res.fontName;
        //     a1.style.font = res.fontName;

        // } else {
        //     this.owner["labelFont"] = res.fontName;
        // }
        // this.txt.font=res.fontName;
        // }), null, Laya.Loader.TTF, 0, true);
    }

    onEnable(): void {
    }

    onDisable(): void {
    }
}