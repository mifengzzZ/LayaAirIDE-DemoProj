(function () {
    'use strict';

    class ButtonScene extends Laya.Script {
        constructor() {
            super();
            this._skin = 'res/atlas/comp/button.png';
            Laya.loader.load(this._skin, Laya.Handler.create(this, this.onLoaded));
        }
        onLoaded() {
            let btn = new Laya.Button(this._skin);
            Laya.stage.addChild(btn);
            btn.width = 32;
            btn.height = 32;
            btn.pos(100, 100);
            btn.label = '关闭';
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class CheckBox extends Laya.Script {
        constructor() {
            super();
            this.skin = 'res/atlas/comp/checkBox.alats';
            this.skin1 = 'checkbox_1.png';
            this.skin2 = 'checkbox_2.png';
            Laya.loader.load([{ url: this.skin, type: Laya.Loader.ATLAS }], Laya.Handler.create(this, this.onLoaded));
        }
        onLoaded() {
            let cb1 = new Laya.CheckBox();
            cb1.skin = this.skin1;
            Laya.stage.addChild(cb1);
            cb1.pos(200, 200);
            cb1.label = '我是多选框1';
            cb1.labelSize = 24;
            cb1.selected = true;
            let cb2 = new Laya.CheckBox();
            cb2.skin = this.skin2;
            Laya.stage.addChild(cb2);
            cb2.pos(200, 500);
            cb2.label = '我是多选框2';
            cb2.labelSize = 24;
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    var Scene = Laya.Scene;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        class buttonUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("button");
            }
        }
        ui.buttonUI = buttonUI;
        REG("ui.buttonUI", buttonUI);
        class checkBoxUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("checkBox");
            }
        }
        ui.checkBoxUI = checkBoxUI;
        REG("ui.checkBoxUI", checkBoxUI);
        class clipUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("clip");
            }
        }
        ui.clipUI = clipUI;
        REG("ui.clipUI", clipUI);
        class comboBoxUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("comboBox");
            }
        }
        ui.comboBoxUI = comboBoxUI;
        REG("ui.comboBoxUI", comboBoxUI);
        class HSliderUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("HSlider");
            }
        }
        ui.HSliderUI = HSliderUI;
        REG("ui.HSliderUI", HSliderUI);
        class labelTxtUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("labelTxt");
            }
        }
        ui.labelTxtUI = labelTxtUI;
        REG("ui.labelTxtUI", labelTxtUI);
        class listUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("list");
            }
        }
        ui.listUI = listUI;
        REG("ui.listUI", listUI);
        class progressUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("progress");
            }
        }
        ui.progressUI = progressUI;
        REG("ui.progressUI", progressUI);
        class RadioGroupUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("RadioGroup");
            }
        }
        ui.RadioGroupUI = RadioGroupUI;
        REG("ui.RadioGroupUI", RadioGroupUI);
        class tabUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("tab");
            }
        }
        ui.tabUI = tabUI;
        REG("ui.tabUI", tabUI);
        class VSliderUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("VSlider");
            }
        }
        ui.VSliderUI = VSliderUI;
        REG("ui.VSliderUI", VSliderUI);
        class xlzdhUI extends Scene {
            constructor() { super(); }
            createChildren() {
                super.createChildren();
                this.loadScene("xlzdh");
            }
        }
        ui.xlzdhUI = xlzdhUI;
        REG("ui.xlzdhUI", xlzdhUI);
    })(ui || (ui = {}));

    class ClipScene extends ui.clipUI {
        constructor() {
            super();
            this._currFrame = 0;
            this.numClip.autoPlay = true;
            this.numClip.interval = 1000;
            this.start.on('click', this, () => {
                if (this.numClip.isPlaying) {
                    this.numClip.stop();
                    this._currFrame = this.numClip.index;
                    this.start.label = '播放';
                }
                else {
                    this.numClip.play();
                    this.numClip.index = this._currFrame;
                    this.start.label = '暂停';
                }
            });
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class ComboBoxScene extends ui.comboBoxUI {
        constructor() {
            super();
            this.comboBoxNode.selectHandler = Laya.Handler.create(this, this.onComboBoxSelect, [this.comboBoxNode], false);
        }
        onComboBoxSelect(cb) {
            console.log(cb.selectedLabel);
            console.log(cb.selectedIndex);
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class HSliderScene extends ui.HSliderUI {
        constructor() { super(); }
        onEnable() {
            this.hsliderNode.changeHandler = Laya.Handler.create(this, this.onSliderChange, null, false);
        }
        onSliderChange(value) {
            console.log('onSliderChange : ', value);
        }
        onDisable() {
        }
    }

    class TTFHeavy extends Laya.Script {
        constructor() { super(); }
        onAwake() {
            Laya.loader.load('comp/font/SourceHanSerifCN_Heavy_4.ttf', Laya.Handler.create(this, (res) => {
                console.log('TTFHeavy res : ', res);
                if (this.owner instanceof Laya.Label) {
                    var a = this.owner;
                    a.font = res.fontName;
                    console.log('Label text : ', a.text);
                    a.text = a.text;
                }
                else if (this.owner instanceof Laya.Text) {
                    var a1 = this.owner;
                    a1.font = res.fontName;
                    console.log('Text text : ', a1.text);
                    a1.text = a1.text;
                }
                else if (this.owner instanceof Laya.HTMLDivElement) {
                    var a2 = this.owner;
                    a2.style.family = res.fontName;
                    a2.style.font = res.fontName;
                }
                else if (this.owner instanceof Laya.Radio || this.owner instanceof Laya.Button) {
                    this.owner["labelFont"] = res.fontName;
                }
                else {
                    this.owner["labelFont"] = res.fontName;
                }
            }), null, Laya.Loader.TTF, 0, true);
        }
    }

    class TTFMedium extends Laya.Script {
        constructor() {
            super();
        }
        onAwake() {
            Laya.loader.load('comp/font/SourceHanSansCN_Medium.ttf', Laya.Handler.create(this, (res) => {
                console.log('TTFMedium res : ', res);
                if (this.owner instanceof Laya.Label) {
                    console.log('Label res.fontName : ', res.fontName);
                    var a = this.owner;
                    a.font = res.fontName;
                    console.log('Label text : ', a.text);
                    a.text = a.text;
                }
                else if (this.owner instanceof Laya.HTMLDivElement) {
                    console.log('HTMLDivElement res.fontName : ', res.fontName);
                    var a1 = this.owner;
                    a1.style.family = res.fontName;
                    a1.style.font = res.fontName;
                }
                else {
                    console.log('other res.fontName : ', res.fontName);
                    this.owner["labelFont"] = res.fontName;
                }
            }), null, Laya.Loader.TTF, 0, true);
        }
        onEnable() {
        }
        onDisable() {
        }
    }

    class ProgressScene extends ui.progressUI {
        constructor() { super(); }
        onEnable() {
            this.progressNode.changeHandler = Laya.Handler.create(this, this.onProgress, null, false);
            Laya.timer.loop(100, this, this.changeValue);
        }
        changeValue() {
            if (this.progressNode.value >= 1) {
                this.progressNode.value = 0;
            }
            this.progressNode.value += 0.01;
        }
        onProgress(value) {
            console.log("进度：" + Math.floor(value * 100) + "%");
        }
        onDisable() {
        }
    }

    class RadioGroupScene extends ui.RadioGroupUI {
        constructor() { super(); }
        onEnable() {
            this.radioGroupNode.selectHandler = Laya.Handler.create(this, this.onSelectChange, null, false);
            this.cutomRadioGroup.selectHandler = Laya.Handler.create(this, this.onCutomSelectChange, null, false);
        }
        onSelectChange(index) {
            console.log("你选择了第 " + (index + 1) + " 项");
        }
        onCutomSelectChange(index) {
            console.log("onCutomSelectChange 你选择了第 " + (index + 1) + " 项");
        }
        onDisable() {
        }
    }

    class TabScene extends ui.tabUI {
        constructor() { super(); }
        onEnable() {
            this.tabNode.selectHandler = Laya.Handler.create(this, this.onSelect, null, false);
            this.cutomTab.selectHandler = Laya.Handler.create(this, this.onSelect2, null, false);
        }
        onSelect(index) {
            console.log("当前选择的标签页索引为 " + index);
        }
        onSelect2(index) {
            console.log("onSelect2 当前选择的标签页索引为 " + index);
        }
        onDisable() {
        }
    }

    class VSliderScene extends ui.VSliderUI {
        constructor() { super(); }
        onEnable() {
            this.vsliderNode.changeHandler = Laya.Handler.create(this, this.onSliderChange, null, false);
        }
        onSliderChange(value) {
            console.log('onSliderChange : ', value);
        }
        onDisable() {
        }
    }

    class XuliezhendonghuaScene extends Laya.Script {
        constructor() {
            super();
            this._roleAnim = new Laya.Animation();
            this._roleAnim.loadAtlas('res/atlas/comp/xlzdh/role.atlas', Laya.Handler.create(this, this.onLoaded2));
        }
        onEnable() {
        }
        onDisable() {
        }
        onLoaded() {
            Laya.stage.addChild(this._roleAnim);
            this._roleAnim.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            this._roleAnim.play();
        }
        onLoaded2() {
            Laya.stage.addChild(this._roleAnim);
            this._roleAnim.pos(Laya.stage.width / 2, Laya.stage.height / 2);
            Laya.Animation.createFrames(this.animUtls('attack1_', 6), "attack1");
            this._roleAnim.play(0, true, "attack1");
        }
        animUtls(animName, length) {
            let urls = [];
            for (let index = 0; index < length; index++) {
                urls.push('comp/xlzdh/role/' + animName + index + '.png');
            }
            return urls;
        }
    }

    class GameConfig {
        constructor() { }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("button/ButtonScene.ts", ButtonScene);
            reg("checkBox/CheckBoxScene.ts", CheckBox);
            reg("clip/ClipScene.ts", ClipScene);
            reg("comboBox/ComboBoxScene.ts", ComboBoxScene);
            reg("hslider/HSliderScene.ts", HSliderScene);
            reg("component/TTFHeavy.ts", TTFHeavy);
            reg("component/TTFMedium.ts", TTFMedium);
            reg("progress/ProgressScene.ts", ProgressScene);
            reg("radioGroup/RadioGroupScene.ts", RadioGroupScene);
            reg("tab/TabScene.ts", TabScene);
            reg("vslider/VSliderScene.ts", VSliderScene);
            reg("xlzdh/XuliezhendonghuaScene.ts", XuliezhendonghuaScene);
        }
    }
    GameConfig.width = 1334;
    GameConfig.height = 750;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "middle";
    GameConfig.alignH = "center";
    GameConfig.startScene = "tab.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = true;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class Main {
        constructor() {
            if (window["Laya3D"])
                Laya3D.init(GameConfig.width, GameConfig.height);
            else
                Laya.init(GameConfig.width, GameConfig.height, Laya["WebGL"]);
            Laya["Physics"] && Laya["Physics"].enable();
            Laya["DebugPanel"] && Laya["DebugPanel"].enable();
            Laya.stage.scaleMode = GameConfig.scaleMode;
            Laya.stage.screenMode = GameConfig.screenMode;
            Laya.stage.alignV = GameConfig.alignV;
            Laya.stage.alignH = GameConfig.alignH;
            Laya.URL.exportSceneToJson = GameConfig.exportSceneToJson;
            if (GameConfig.debug || Laya.Utils.getQueryString("debug") == "true")
                Laya.enableDebugPanel();
            if (GameConfig.physicsDebug && Laya["PhysicsDebugDraw"])
                Laya["PhysicsDebugDraw"].enable();
            if (GameConfig.stat)
                Laya.Stat.show();
            Laya.alertGlobalError(true);
            Laya.ResourceVersion.enable("version.json", Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable("fileconfig.json", Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            GameConfig.startScene && Laya.Scene.open(GameConfig.startScene);
        }
    }
    new Main();

}());
