var Product=(function(_super){
    function Product(){
        Product.super(this);   // 调用父类的构造函数
        
    }
    Laya.class(Product,"Product",_super);
    var _proto=Product.prototype;
    
    _proto.init=function(){
        this.shareBtn.on(Laya.Event.CLICK,this,this.showShare);

        //分享弹窗
        this.ShareTip=new ShareTip;
    }

    _proto.showShare=function(){
        this.ShareTip.popup();
        this.ShareTip.init();
    }

    return Product;
})(ProductUI)