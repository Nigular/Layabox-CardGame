var Game = (function(_super){
    function Game(){
       Game.super(this); // 调用父类的构造函数.

       Laya.UIConfig.popupBgAlpha=0.8;//实例化弹出窗前，设置uiconfig改变弹窗透明度
       //游戏说明弹窗
       this.shuoming=new ShuoMing();
       this.shuoming.init();

        //准备开始弹窗
       this.starttip=new readyTip();
       this.starttip.init();

       this.cards=new Array;
       this.cardNum=12;     //共12张牌

       this.timeNum=5;  //倒计时时间

       this.btn_sm.on(Laya.Event.CLICK,this,this.showSM);   //点击游戏说明
       this.btn_start.on(Laya.Event.CLICK,this,this.readyGame); //点击开始游戏

       //游戏成功弹窗
       this.successTip=new Success();
       this.successTip.init();

       //产品弹窗
       this.ProductLay=new Product();
       this.ProductLay.init();

       //初始化牌局
       this.init();
       this.onPlayMusic();
    }
    Laya.class(Game,"Game",_super);
    var _proto = Game.prototype;

    _proto.init=function(){      
        this.baseArr=[1,1,1,1,2,2,2,2,3,3,3,3];
        this.newArr=this.shuffle(this.baseArr);
        this.hitCallBack = Laya.Handler.create(this,this.setScore,null,false);
        this.firstClick=true;   //记录是否首次点击
        this.firstClickType=0;   //记录第一次点击的类型
        this.openNum=0;  //记录翻开的牌数量
        this.cards=[];
        //初始化所有牌面
        for(var i=0;i<this.cardNum;i++){
            this.box=this.getChildByName("item"+i);
            this.card = new Card(this.box.getChildByName("back"),this.box.getChildByName("face"),this.newArr[i],this.hitCallBack);
            this.cards.push(this.card);
        }
    }

    //打乱数组的方法
    _proto.shuffle=function(array){
        var tmp, current, top =array.length;
        if(top) while(--top){
        current =Math.floor(Math.random() * (top + 1));
        tmp =array[current];
        array[current] =array[top];
        array[top] = tmp;
        }
        return array;
    }

    //显示游戏说明
    _proto.showSM=function(){  
        this.shuoming.popup();
    }

    //准备开始游戏
    _proto.readyGame=function(){
        this.starttip.popup();
        this.starttip.readyBtn.on(Laya.Event.CLICK,this,this.startGame);
    }

    //开始游戏
    _proto.startGame=function(){ 
        for(var i=0;i<this.cardNum;i++){
            this.cards[i].showCard();
            this.cards[i].init();
        }
        this.btn_start.off(Laya.Event.CLICK,this,this.startGame); //解绑开始游戏
        this.btn_start.visible=false;
        this.clock.visible=true;
        Laya.timer.loop(1000,this,this.countDown);  //开启5秒倒计时
    }  

    //5秒倒计时
    _proto.countDown=function(){
        this.timeNum--;
        this.timeNumUi.text=this.timeNum;
        if(this.timeNum<0){
            this.countDownEnd();
        }
    }

    //倒计时完毕
    _proto.countDownEnd=function(){
        Laya.timer.clear(this,this.countDown);
        //按钮改成再来一次
        this.btn_start.skin="ui/btn_start.png";
        this.btn_start.visible=true;
        this.clock.visible=false;
        this.btn_start.on(Laya.Event.CLICK,this,this.playagain); //事件改成从新开始游戏
        this.reSetGame();
    }

    //重新开始游戏（刷新页面）
    _proto.playagain=function(){
        location.reload();
    }
    //计算选中的牌
    _proto.setScore=function(type){
        
        if(this.firstClick){
            this.firstClick=false;
            this.firstClickType=type;
        }
        if(this.firstClickType==type){
            this.openNum++;
            if(this.openNum==4){
                console.log(this.firstClickType);
                this.successTip.res_tip.skin="ui/res_img"+this.firstClickType+".png";
                this.successTip.popup();
                this.successTip.okBtn.on(Laya.Event.CLICK,this,this.showProduct);
            }
        }else{
            this.reSetGame();
        }
    }

    //选了错误的牌，重新翻牌
    _proto.reSetGame=function(){
        this.firstClick=true;
        this.firstClickType=0; 
        this.openNum=0;
        for(var i=0;i<this.cardNum;i++){
            this.cards[i].hide();
        }
    }

    // 播放音频
    _proto.onPlayMusic=function(){
		//console.log("播放音乐");
		Laya.SoundManager.playMusic("res/sounds/1.mp3", 0);
	}

    //显示产品
    _proto.showProduct=function(){
        this.ProductLay.productImg.skin="ui/product_"+this.firstClickType+".jpg"
        Laya.stage.addChild(this.ProductLay);
    }

    return Game;
})(GameUI);