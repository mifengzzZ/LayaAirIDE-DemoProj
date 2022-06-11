import { ui } from "../ui/layaMaxUI";

export default class AllStringScene extends ui.AllStringUI {
    
    constructor() { super(); }
    
    onEnable(): void {
        // 输入组件TextInput的光标是否显示(在不点击输入的前提下) 默认值：false
        this.textinput.focus = false;

        //----------------------------------------------------------------------------------------------------------------
        // HTMLDivElement

        // 当内容超过最大宽度会自动换行
        // this.htmlStr.innerHTML = "<div style='width:500px;height:300px;align:left;italic:true;color:#00ff5b;bold:true'><span color='#e3d26a'>文本的最外层，可以通过style设置HTML文本的宽高</span>我是外面的div我是外面的div我是外面的div我是外面的div我是外面的div我是外面的div</div>";

        // this.htmlStr.innerHTML = "<div style='width:500px;height:300px;color:#00ff5b;'><span>我是我是我是我是span</span><span>我我是我是我是是span2</span><span>我我是我是我是是span3</span><span>我我是我是我是我是我是我是我是是span4</span><span>我是我是我是我是我是span5</span></div>"

        // this.htmlStr.innerHTML = "<h> <div style='width:500px;height:300px;color:#00ff5b;'>我是div66</div> h1最大</h1>";

        // this.htmlStr.innerHTML = "<div style='width:500px;height:300px;color:#00ff5b;'><h1 style='color:#e3d26a;'>一级标题</h1><div><h2 style='color:#e3d26a;'>二级标题</h2></div></div>";

        // this.htmlStr.innerHTML = "<div style='width:880px;height:600px;color:#ff0000;font-size:50px;font-family:SimSun;vertical-align:bottom;line-height:100px;border-color:#ff0000;'>"
        //     + "<span color='#e3d26a' style='font-weight:bold;'>使</span>用<br/>"
        //     + "<span style='color:#FFFFFF;font-size:70px;stroke:2px;italic:true;'>HTMLDivElement</span>&nbsp;&nbsp;组件"
        //     + "<span color='#6ad2e3'>创建的</span><br/>"
        //     + "<img src='res/laya.png' width='50' height='50'></img><span color='#d26ae3'>HTML文本</span>"
        //     + "<p style='height:350px; bold:true;letter-spacing:20px;'>P标签，不需要br也会自动换新一行</p>"
        // + "</div>";

        // 官方

        // 1.如何在同一个文本中设置Bold、Font、FontSize、Color、下划线？
        // 【注意：目前不支持斜体、描边、span标签内嵌的方式】
        // this.htmlStr.innerHTML = "<span style='font-weight:bold;" +
        //     "font:24px Arial' " +
        //     "color='red' " +
        //     "href='https://ask.layabox.com/www.baidu.com'>" +
        //     "LayaBox</span><span>欢迎你的加入</span>"

        // 2.如何获取html文本的实际内容？获取html文本的实际宽高（contextWidth、contextHeight）?
        
        // 3.超链接
        // this.htmlStr.innerHTML="<span href='http://ask.layabox.com/'>LayaBox欢迎你的加入！</span>";
        // this.htmlStr.on(Event.LINK,this,onLink);
        // Laya.stage.addChild(div);
        // private function onLink(data:*):void
        // {
        //     // TODO Auto Generated method stub
        //     Browser.window.location.href=data;
        // }

        // 4.实现html页面跳转
        // var iHtml:HTMLIframeElement=new HTMLIframeElement();
        // Laya.stage.addChild(iHtml);
        // iHtml.href="res/html/test.html";
    }

    onDisable(): void {
    }
}