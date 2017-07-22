var readyTip=(function(_super){
    function readyTip(){
        readyTip.super(this);   // 调用父类的构造函数
    }

    Laya.class(readyTip,"readyTip",_super);
    var _proto=readyTip.prototype;
    
    _proto.init=function(){
        this.readyBtn.name=Dialog.CLOSE;
    }

    return readyTip;
})(readyTipUI)