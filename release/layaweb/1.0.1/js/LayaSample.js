
(function(){
    (function(){
        Laya.init(720, 1158,Laya.WebGL);
        Laya.stage.scaleMode = Laya.Stage.SCALE_SHOWALL;
        Laya.stage.alignH = Laya.Stage.ALIGN_CENTER;
        Laya.stage.alignV = Laya.Stage.ALIGN_MIDDLE;
        Laya.stage.screenMode = Laya.Stage.SCREEN_NONE; //不更改屏幕
        //设置stage颜色
        Laya.stage.bgColor = "#ffcccc";
        //Laya.loader.load("res/atlas/ui.json",Laya.Handler.create(this,onLoad),Laya.Handler.create(this, onLoading, null, false),Laya.Loader.ATLAS);
        Laya.loader.load("res/atlas/ui.json",Laya.Handler.create(this,onLoad),null,Laya.Loader.ATLAS);
    })();

    function onLoad(){
        var game=new Game();
        Laya.stage.addChild(game);
    }

    // 加载进度控制
    function onLoading(progress){
        console.log("加载进度: " + progress);
    }
})(window.LayaSample || (window.LayaSample = {}));
