var ShareTip=(function(_super){
    function ShareTip(){
        ShareTip.super(this);
    }
    Laya.class(ShareTip,"ShareTip",_super);
    var _proto=ShareTip.prototype;

    _proto.init=function(){
        this.closeBtn.name=Dialog.CLOSE;
    }

    return ShareTip;
})(shareTipUI)