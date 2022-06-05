import { ui } from "../ui/layaMaxUI";

export default class ProgressScene extends ui.progressUI {

    constructor() { super(); }

    onEnable(): void {
        this.progressNode.changeHandler = Laya.Handler.create(this, this.onProgress, null, false);

        Laya.timer.loop(100, this, this.changeValue);
    }

    changeValue() {
        if (this.progressNode.value >= 1) {
            this.progressNode.value = 0;
        }
        this.progressNode.value += 0.01;
    }

    onProgress(value: number) {
        console.log("进度：" + Math.floor(value * 100) + "%");
    }

    onDisable(): void {
    }
}