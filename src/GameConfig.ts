/**This class is automatically generated by LayaAirIDE, please do not make any modifications. */
import AtlasAnimDemo from "./xlzdh/AtlasAnimDemo"
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
    static startScene:any="xlzdh.scene";
    static sceneRoot:string="";
    static debug:boolean=false;
    static stat:boolean=true;
    static physicsDebug:boolean=false;
    static exportSceneToJson:boolean=true;
    constructor(){}
    static init(){
        var reg: Function = Laya.ClassUtils.regClass;
        reg("xlzdh/AtlasAnimDemo.ts",AtlasAnimDemo);
    }
}
GameConfig.init();