import { ui } from "../ui/layaMaxUI";

export default class ListScene extends ui.listUI {

    private _data: Array<number> = [];
    
    constructor() { super(); }
    
    onEnable(): void {
        
        for (let index = 0; index < 100; index++) {
            this._data.push(index);
        }

        this.list.renderHandler = Laya.Handler.create(this, this.onRender, null, false);
        this.list.mouseHandler = Laya.Handler.create(this, this.onMouse, null, false);
        this.list.selectHandler = Laya.Handler.create(this, this.onSelect, null, false);
        // 必须设置vScrollBarSkin才会滚动
        this.list.vScrollBarSkin = "";
        this.list.dataSource = this._data;

        // 强制禁止滚动list滚动
        this.list.scrollBar.touchScrollEnable = false;

        this.btn.clickHandler = Laya.Handler.create(this, this.onClick, null, false);
        this.refresh.clickHandler = Laya.Handler.create(this, this.onFresh, null, false);
    }

    onDisable(): void {
    }

    /**
     * 当赋值属性selectedIndex时，该函数又会被激活，刷新所有Cell，注意：list的Cell属于复用
     * @param cell 
     * @param index 
     */
    onRender(cell: Laya.Label, index: number) {
        cell.text = "" + this._data[index];
        console.log('onRender : ', cell.text);
    }

    onClick() {
        // 当selectedIndex已经是2，onSelect不会被激活
        this.list.selectedIndex = 2;


        // 获取单元格数据
        // let cellData = this.list.getItem(0);
        // console.log('cellData : ', cellData);
    }

    onFresh() {
        this._data = [];
        for (let index = 200; index < 300; index++) {
            this._data.push(index);
        }
        // this.list.dataSource = this._data;
        // refresh(): void  刷新列表数据源。
        // updateArray(array: any[]): void  更新数据源，不刷新list，只增加滚动长度

        // 这种方式刷新,只是重新激活onRender被调用,实际单元格保存的datasource未刷新
        // this.list.refresh();
    }

    /**
     * 
     * @param e 四种状态：mouseover 鼠标悬浮在cell上时出发 | mousedown 鼠标按下时 | mouseup 鼠标抬起 | click 点击完成 | mouseout 鼠标离开cell区域时
     * @param index 
     */
    onMouse(e: Laya.Event, index: number) {
        console.log(e);
        console.log('onMouse index : ', index);
    }

    onSelect(index: number) {
        console.log('onSelect index : ', index);
    }
}