import { ui } from "../ui/layaMaxUI";

export default class SpineScene extends ui.spineUI {

    // 从LayaAir IDE 2.12.2版本起，取消了SpineTempletBinary类，不管是.json还是.skel 都用SpineTemplet类
    private templet: Laya.SpineTemplet = null;
    private spineSkeleton: Laya.SpineSkeleton = null;
    private index: number = -1;

    constructor() { super(); }
    
    onEnable(): void {
        // this.onLoaded();
        // this.shipeiSpine();
        this.skillEvent();
    }

    /**
     * 内置版
     */
    onLoaded() {
        var skeleton = new Laya.Skeleton();
        Laya.stage.addChild(skeleton);
        skeleton.pos(Laya.Browser.width / 2, Laya.Browser.height / 2 - 200);
        skeleton.load("res/spine/1_Black.sk");
    }

    /**
     * 适配版
     */
    shipeiSpine() {
        this.templet = new Laya.SpineTemplet(Laya.SpineVersion.v3_8);
        this.templet.loadAni("res/spine/shipeibanben/205008.skel");
        this.templet.on(Laya.Event.COMPLETE, this, this.parseComplete);
        this.templet.on(Laya.Event.ERROR, this, this.onError);
    }

    private parseComplete() {
        console.log('解析完成');
        // 创建动画，与内置版Spine动画播放模式不同的地方在于内置版我们需要传一个参数来确认使用哪种模式（三种模式中，0:不支持换装,1,2支持换装），
                // 而在适配版中我们使用的是Spine官方的适配方式，所以可以不用传参数了
        this.spineSkeleton = this.templet.buildArmature();
        Laya.stage.addChild(this.spineSkeleton);
        this.spineSkeleton.pos(Laya.Browser.width / 2, Laya.Browser.height / 2 + 100);
        this.spineSkeleton.scale(0.5, 0.5);
        this.spineSkeleton.on(Laya.Event.STOPPED, this, this.play)
        console.log('this.spineSkeleton : ', this.spineSkeleton);
        this.play();
    }

    private onError() {
        console.log("Parse error");
    }

    private play(): void {
        console.log("1111111111");
        if(++this.index >= this.spineSkeleton.getAnimNum()) {
            this.index = 0
        }
        this.spineSkeleton.play(this.index, false, true)
    }

    /**
     * 适配版事件监听
     */
    skillEvent() {
        this.templet = new Laya.SpineTemplet(Laya.SpineVersion.v3_8);
        this.templet.on(Laya.Event.COMPLETE, this, this.parseCompleteSkill);
        this.templet.on(Laya.Event.ERROR, this, this.onError);
        this.templet.loadAni("res/spine/shipeibanben/205012.skel");
        // this.templet.loadAni("res/spine/shipeibanben/801005.skel");
        // this.templet.loadAni("res/spine/shipeibanben/801102.skel");
    }
    parseCompleteSkill() {
        this.spineSkeleton = this.templet.buildArmature();
        Laya.stage.addChild(this.spineSkeleton);
        this.spineSkeleton.pos(Laya.Browser.width / 2, Laya.Browser.height / 2);
        this.spineSkeleton.on(Laya.Event.LABEL, this, this.onEvent);
        this.spineSkeleton.on(Laya.Event.STOPPED, this, this.onKillEnd);
        
        console.log('this.skeleton : ', this.spineSkeleton);
        console.log('this.spineSkeleton.getSkeleton()[data] : ', this.spineSkeleton.getSkeleton()["data"]);
        //@ts-ignore
        console.log('this.spineSkeleton.getSkeleton().data; : ', this.spineSkeleton.getSkeleton().data);

        let animationEndTime = 0;

        var _event = [];
        let _animations = this.spineSkeleton.getSkeleton()["data"].animations;
        for (var i = 0; i < _animations.length; i++) {
            if (_animations[i].name == "skill2") {
                console.log('this.spineSkeleton.getSkeleton().data; : ', _animations[i].duration);
                animationEndTime = _animations[i].duration;
                var _len = _animations[i].timelines.length;
                console.log('_len : ', _len);
                // 所有在动画中添加的帧事件都会保存在timelines数组的最后一个元素中Events
                var _eventTime: any = _animations[i].timelines[_len - 1];
                if (_eventTime) {
                    if (_eventTime.events) {
                        // 有事件名和从一开始执行动画到该帧事件的时间
                        for (var j = 0; j < _eventTime.events.length; j++) {
                            _event.push({ time: _eventTime.events[j].time, name: _eventTime.events[j].data.name });
                        }
                    }
                }
                break;
            }
        }
        console.log('_event : ', _event);
        this.spineSkeleton.play("skill2", false);
        Laya.timer.once(animationEndTime * 1000, this, this.onPlayEnd);
    }
    private onEvent(e): void {
        var tEventData: Laya.EventData = e as Laya.EventData;
        console.log("tEventData.name : ", tEventData.name);
    }
    private onKillEnd() {
        console.log('播放完成');
    }
    private onPlayEnd() {
        console.log('播放完成2');
    }

    onDisable(): void {
    }
}