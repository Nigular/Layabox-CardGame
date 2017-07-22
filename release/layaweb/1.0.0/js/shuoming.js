var ShuoMing=(function(_super){
    function ShuoMing(){
        ShuoMing.super(this);   // 调用父类的构造函数

    }
    Laya.class(ShuoMing,"ShuoMing",_super);
    var _proto=ShuoMing.prototype;
    
    _proto.init=function(){
        this.btnClose.name=Dialog.CLOSE;
    }


    return ShuoMing;
})(ShuoMingUI)