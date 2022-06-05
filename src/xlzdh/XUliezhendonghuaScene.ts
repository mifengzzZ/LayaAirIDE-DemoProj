export default class XuliezhendonghuaScene extends Laya.Script {

    private _roleAnim: Laya.Animation;

    constructor() {
        super();
        this._roleAnim = new Laya.Animation();
        this._roleAnim.loadAtlas('res/atlas/comp/xlzdh/role.atlas', Laya.Handler.create(this, this.onLoaded2));
    }

    onEnable(): void {
    }

    onDisable(): void {
    }

    /**
     * 适用于图集中只有一个动画
     */
    onLoaded() {
        Laya.stage.addChild(this._roleAnim);
        this._roleAnim.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        this._roleAnim.play();
    }

    /**
     * 利用createFrames指定播放图集中的动画
     */
    onLoaded2() {
        Laya.stage.addChild(this._roleAnim);
        this._roleAnim.pos(Laya.stage.width / 2, Laya.stage.height / 2);
        // 创建动画模板
        Laya.Animation.createFrames(this.animUtls('attack1_', 6), "attack1");
        // 循环播放动画
        this._roleAnim.play(0, true, "attack1");
    }

    private animUtls(animName: string, length: number): Array<string> {
        let urls: Array<string> = [];
        for (let index = 0; index < length; index++) {
            // 动画资源路径要和动画图集打包前的资源命名对应起来
            urls.push('comp/xlzdh/role/' + animName + index + '.png');
        }
        return urls;
    }

}