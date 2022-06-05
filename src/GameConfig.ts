/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import ButtonScene from "./button/ButtonScene"
import CheckBoxScene from "./checkBox/CheckBoxScene"
import ClipScene from "./clip/ClipScene"
import ComboBoxScene from "./comboBox/ComboBoxScene"
import HSliderScene from "./hslider/HSliderScene"
import TTFHeavy from "./component/TTFHeavy"
import TTFMedium from "./component/TTFMedium"
import ProgressScene from "./progress/ProgressScene"
import RadioGroupScene from "./radioGroup/RadioGroupScene"
import TabScene from "./tab/TabScene"
import VSliderScene from "./vslider/VSliderScene"
import XuliezhendonghuaScene from "./xlzdh/XuliezhendonghuaScene"
/*
* 游戏初始化配置;
*/
export default class GameConfig{
    static width:number=1334;
    static height:number=750;
    static scaleMode:string="fixedwidth";
    static screenMode:string="horizontal";
    static alignV:string="middle";
    static alignH:string="center";
    static startScene:any="tab.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=true;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("button/ButtonScene.ts",ButtonScene);
        reg("checkBox/CheckBoxScene.ts",CheckBoxScene);
        reg("clip/ClipScene.ts",ClipScene);
        reg("comboBox/ComboBoxScene.ts",ComboBoxScene);
        reg("hslider/HSliderScene.ts",HSliderScene);
        reg("component/TTFHeavy.ts",TTFHeavy);
        reg("component/TTFMedium.ts",TTFMedium);
        reg("progress/ProgressScene.ts",ProgressScene);
        reg("radioGroup/RadioGroupScene.ts",RadioGroupScene);
        reg("tab/TabScene.ts",TabScene);
        reg("vslider/VSliderScene.ts",VSliderScene);
        reg("xlzdh/XuliezhendonghuaScene.ts",XuliezhendonghuaScene);
    }
}
GameConfig.init();