var Success=(function(_super){
    function Success(){
        Success.super(this);
    }
    Laya.class(Success,"Success",_super);
    var _proto=Success.prototype;

    _proto.init=function(){
        this.okBtn.name=Dialog.CLOSE;
    }

    return Success;
})(SuccessUI)