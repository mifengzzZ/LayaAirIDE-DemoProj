export default class TTFHeavy extends Laya.Script {

    constructor() { super(); }

    onAwake(): void {
        Laya.loader.load('comp/font/SourceHanSerifCN_Heavy_4.ttf', Laya.Handler.create(this, (res: Laya.TTFLoader) => {
            console.log('TTFHeavy res : ', res);
            if (this.owner instanceof Laya.Label) {
                var a: Laya.Label = this.owner as Laya.Label;
                a.font = res.fontName;
                console.log('Label text : ', a.text);
                a.text = a.text;
            } else if (this.owner instanceof Laya.Text) {
                var a1: Laya.Text = this.owner as Laya.Text;
                a1.font = res.fontName;
                console.log('Text text : ', a1.text);
                a1.text = a1.text;
            } else if (this.owner instanceof Laya.HTMLDivElement) {
                var a2: Laya.HTMLDivElement = this.owner as Laya.HTMLDivElement;
                a2.style.family = res.fontName;
                a2.style.font = res.fontName;
            } else if (this.owner instanceof Laya.Radio || this.owner instanceof Laya.Button) {
                this.owner["labelFont"] = res.fontName;
            } else {
                this.owner["labelFont"] = res.fontName;
            }
        }), null, Laya.Loader.TTF, 0, true);
    }

}