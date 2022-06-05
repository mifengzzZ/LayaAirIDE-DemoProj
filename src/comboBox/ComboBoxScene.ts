import { ui } from "../ui/layaMaxUI";

export default class ComboBoxScene extends ui.comboBoxUI {

    constructor() {
        super();

        this.comboBoxNode.selectHandler = Laya.Handler.create(this, this.onComboBoxSelect, [this.comboBoxNode], false);

    }

    onComboBoxSelect(cb: Laya.ComboBox) {
        console.log(cb.selectedLabel);
        console.log(cb.selectedIndex);
    }

    onEnable(): void {
    }

    onDisable(): void {
    }
}