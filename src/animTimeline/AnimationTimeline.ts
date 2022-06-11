import { ui } from "../ui/layaMaxUI";

export default class AnimationTimeline extends ui.AnimUI {
    
    constructor() {
        super();
    }
    
    onEnable(): void {
        Laya.loader.load("res/atlas/comp/animTimeline.atlas", Laya.Handler.create(this, this.onLoaded));
    }

    onLoaded() {
        // 创建一个Animation实例
        let tl: Laya.Animation = new Laya.Animation();
        // 加载动画文件
        tl.loadAnimation("animTimeline/Timeline.ani");
        Laya.stage.addChild(tl);

        // 播放动画 默认播放第一个动画并且循环播放
        // tl.play();
        // 指定播放动画不循环
        tl.play(0, false, 'move');

        // 将制作好的Ani动画文件拖拽到界面中使用
        this.roleAnim.play(0, true, 'xuliezhen');

        // 在显示的UI界面上直接编辑节点动画
        this.move.play();
    }

    onDisable(): void {
    }
}