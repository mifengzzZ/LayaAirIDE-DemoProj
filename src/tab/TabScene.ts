import { ui } from "../ui/layaMaxUI";

export default class TabScene extends ui.tabUI {

    constructor() { super(); }

    onEnable(): void {
        this.tabNode.selectHandler = Laya.Handler.create(this, this.onSelect, null, false);

        this.cutomTab.selectHandler = Laya.Handler.create(this, this.onSelect2, null, false);
    }

    onSelect(index: number): void {
        console.log("当前选择的标签页索引为 " + index);
    }

    onSelect2(index: number): void {
        console.log("onSelect2 当前选择的标签页索引为 " + index);
    }

    onDisable(): void {
    }
}