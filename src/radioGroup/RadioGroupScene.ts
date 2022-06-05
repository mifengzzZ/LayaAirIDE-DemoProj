import { ui } from "../ui/layaMaxUI";

export default class RadioGroupScene extends ui.RadioGroupUI {

    constructor() { super(); }

    onEnable(): void {
        this.radioGroupNode.selectHandler = Laya.Handler.create(this, this.onSelectChange, null, false);

        this.cutomRadioGroup.selectHandler = Laya.Handler.create(this, this.onCutomSelectChange, null, false);
    }

    onSelectChange(index: number): void {
        console.log("你选择了第 " + (index + 1) + " 项");
    }

    onCutomSelectChange(index: number): void {
        console.log("onCutomSelectChange 你选择了第 " + (index + 1) + " 项");
    }

    onDisable(): void {
    }
}