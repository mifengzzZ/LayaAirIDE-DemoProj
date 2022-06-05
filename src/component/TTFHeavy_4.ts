// import LangManager from "../../manager/LangManager";
// import MassLoader from "../MassLoader";

export enum TouyingType {
    NO,
    BLUE,
    YELLOW,
    RED
}

export default class TTFHeavy_4 extends Laya.Script {

    /** @prop {name:isRadioLabel, tips:"页签上面的文字", type:Bool, default:false}*/
    public isRadioLabel: boolean = false;
    /** @prop {name:touyingColor, tips:"投影颜色", type:string, default:}*/
    public touyingColor: string = "";
    /** @prop {name:btnTouyingType, tips:"按钮文字颜色和投影颜色类型, 0: 没投影， 1：蓝色  2.黄色 3.红色", type:Option, default:0,option:"0,1,2,3"}*/
    public btnTouyingType: number = 0;

    constructor() { super(); }

    tyColorArr: Array<string> = ["", "#2b81a0", "#ba7a36", "#872b4c"];   //蓝色  黄色  红色
    btnColorArr: Array<string> = ["", "#F1FFFF", "#fffff9", "#fff1f2"];  //蓝色  黄色  红色
    onAwake(): void {
        //@ts-ignore
        var res = MassLoader.getRes("SourceHanSerifCN_Heavy_4.ttf");
        if (this.owner instanceof Laya.Label) {
            var a: Laya.Label = this.owner as Laya.Label;
            a.font = res.fontName;
            //@ts-ignore
            a.text = LangManager.getLang(a.text);
            this.owner.y = this.owner.y + 2;
            if (this.touyingColor) {
                var filter: Laya.GlowFilter = new Laya.GlowFilter(this.touyingColor, 2, 0, 2);
                a.filters = [filter];
            } else {
                if (this.btnTouyingType != 0) {
                    var filter: Laya.GlowFilter = new Laya.GlowFilter(this.tyColorArr[this.btnTouyingType], 2, 0, 2);
                    a.filters = [filter];
                    a.color = this.btnColorArr[this.btnTouyingType];
                }
            }
        } else if (this.owner instanceof Laya.Text) {
            var a1: Laya.Text = this.owner as Laya.Text;
            a1.font = res.fontName;
            //@ts-ignore
            a1.text = LangManager.getLang(a1.text);
            this.owner.y = this.owner.y + 2;
            if (this.touyingColor) {
                var filter: Laya.GlowFilter = new Laya.GlowFilter(this.touyingColor, 2, 0, 2);
                a1.filters = [filter];
            } else {
                if (this.btnTouyingType != 0) {
                    var filter: Laya.GlowFilter = new Laya.GlowFilter(this.tyColorArr[this.btnTouyingType], 2, 0, 2);
                    a1.filters = [filter];
                    a1.color = this.btnColorArr[this.btnTouyingType];
                }
            }
        } else if (this.owner instanceof Laya.HTMLDivElement) {
            var a2: Laya.HTMLDivElement = this.owner as Laya.HTMLDivElement;
            a2.style.family = res.fontName;
            a2.style.font = res.fontName;
            //@ts-ignore
            a2.innerHTML = LangManager.getLang(a2["_innerHTML"]);
            if (this.touyingColor) {
                var filter: Laya.GlowFilter = new Laya.GlowFilter(this.touyingColor, 2, 0, 2);
                a2.filters = [filter];
            } else {
                if (this.btnTouyingType != 0) {
                    var filter: Laya.GlowFilter = new Laya.GlowFilter(this.tyColorArr[this.btnTouyingType], 2, 0, 2);
                    a2.filters = [filter];
                    a2.style.color = this.btnColorArr[this.btnTouyingType];
                }
            }
        } else if (this.owner instanceof Laya.Radio || this.owner instanceof Laya.Button) {
            this.owner["labelFont"] = res.fontName;
            if (this.owner["label"]) {
                //@ts-ignore
                this.owner["label"] = LangManager.getLang(this.owner["label"]);
            }
            if (this.touyingColor) {
                var filter: Laya.GlowFilter = new Laya.GlowFilter(this.touyingColor, 2, 0, 2);
                this.owner.text.filters = [filter];
            } else {
                if (this.btnTouyingType != 0) {
                    var filter: Laya.GlowFilter = new Laya.GlowFilter(this.tyColorArr[this.btnTouyingType], 2, 0, 2);
                    this.owner.text.filters = [filter];
                    this.owner["labelColors"] = this.btnColorArr[this.btnTouyingType];
                }
            }
            if (this.isRadioLabel) {      //页签文字
                this.owner["labelColors"] = "#ede8db,#fff9da";
                this.owner["strokeColors"] = "#2e303e,#644d2f";
                //按字数来调整位置
                if (this.owner["label"] && this.owner["label"].length == 1) {
                    this.owner["labelPadding"] = this.owner instanceof Laya.Radio ? "75,0,0,-66" : "31";
                } else if (this.owner["label"] && this.owner["label"].length == 2) {
                    this.owner["labelPadding"] = this.owner instanceof Laya.Radio ? "75,0,0,-78" : "31";
                } else if (this.owner["label"] && this.owner["label"].length == 3) {
                    this.owner["labelPadding"] = this.owner instanceof Laya.Radio ? "75,0,0,-90" : "31";
                } else if (this.owner["label"] && this.owner["label"].length == 4) {
                    this.owner["labelPadding"] = this.owner instanceof Laya.Radio ? "75,0,0,-102" : "31";
                }
                this.owner["labelSize"] = 24;
                this.owner["labelStroke"] = 2;
            } else {
                if (this.owner["labelPadding"] && this.owner["labelPadding"] == "") this.owner["labelPadding"] = "2";
            }
        } else {
            this.owner["labelFont"] = res.fontName;
            if (this.owner["labelPadding"] && this.owner["labelPadding"] == "") this.owner["labelPadding"] = "2";
            if (this.owner["label"]) {
                //@ts-ignore
                this.owner["label"] = LangManager.getLang(this.owner["label"]);
            }
        }
    }

    /**
     * 设置按钮文本投影
     * @param type 0: 没投影， 1：蓝色  2.黄色 3.红色
     */
    setTouyingType(type: number = 0) {
        if (this.owner instanceof Laya.Radio || this.owner instanceof Laya.Button) {
            this.btnTouyingType = type;
            if (this.btnTouyingType != 0) {
                var filter: Laya.GlowFilter = new Laya.GlowFilter(this.tyColorArr[this.btnTouyingType], 2, 0, 2);
                this.owner.text.filters = [filter];
                this.owner["labelColors"] = this.btnColorArr[this.btnTouyingType];
            } else {
                this.owner.text.filters = [];
            }
        }
    }
}