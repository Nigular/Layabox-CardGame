var Card = (function(){
    function Card(backStatus,faceStatus,skinType,hitCallBack){
        this.backStatus=backStatus;
        this.faceStatus=faceStatus;
        this.faceStatus.visible=false;  //一开始隐藏所有正面牌
        this.skinType=skinType;
        this.hitCallBack=hitCallBack;
    }
    var _proto=Card.prototype;

    // 开始游戏后才初始化，绑定翻牌事件
    _proto.init=function(){
         this.backStatus.off(Laya.Event.CLICK,this,this.openCard);
         this.backStatus.on(Laya.Event.CLICK,this,this.openCard);
    }

    // 首次显示正面
    _proto.showCard=function(){
        this.faceStatus.skin = "ui/face_"+this.skinType+".jpg";
        this.backStatus.visible=false; 
        this.faceStatus.visible=true;
    }

    //翻开正面
    _proto.openCard=function(){
        Laya.Tween.to(this.backStatus,{scaleX:0},300,Laya.Ease.quintIn,Laya.Handler.create(this,this.showColpe));
    }

    //旋转完成
    _proto.showColpe=function(){
         this.faceStatus.visible=true;
         this.backStatus.visible=false;
         this.backStatus.scaleX=1; 
         Laya.timer.once(500, this,function(){
            this.hitCallBack.runWith(this.skinType);    //把点击中的类型返回给游戏逻辑层
         });
    }

    //翻转反面
    _proto.hide=function(){
        this.backStatus.visible=true;
        this.faceStatus.visible=false;
    }


    return Card;
})()