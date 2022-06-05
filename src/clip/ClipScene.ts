import { ui } from "../ui/layaMaxUI"


export default class ClipScene extends ui.clipUI {

    private _currFrame: number = 0;

    constructor() {
        super();
        this.numClip.autoPlay = true;
        // 设置切换时间ms
        this.numClip.interval = 1000;

        this.start.on('click', this, () => {
            if (this.numClip.isPlaying) {
                this.numClip.stop();
                this._currFrame = this.numClip.index;
                this.start.label = '播放';
            } else {
                this.numClip.play();
                this.numClip.index = this._currFrame;
                this.start.label = '暂停';
            }
        });
    }

    onEnable(): void {
    }

    onDisable(): void {
    }
}