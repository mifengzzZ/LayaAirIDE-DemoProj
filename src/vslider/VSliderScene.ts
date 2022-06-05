import { ui } from "../ui/layaMaxUI";

export default class VSliderScene extends ui.VSliderUI {

    constructor() { super(); }

    onEnable(): void {
        this.vsliderNode.changeHandler = Laya.Handler.create(this, this.onSliderChange, null, false);
    }

    onSliderChange(value: number) {
        console.log('onSliderChange : ', value);
    }

    onDisable(): void {
    }
}