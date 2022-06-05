import { ui } from "../ui/layaMaxUI";

export default class HSliderScene extends ui.HSliderUI {

    constructor() { super(); }

    onEnable(): void {
        this.hsliderNode.changeHandler = Laya.Handler.create(this, this.onSliderChange, null, false);
    }

    onSliderChange(value: Number) {
        console.log('onSliderChange : ', value);
    }

    onDisable(): void {
    }
}