var CLASS$=Laya.class;
var STATICATTR$=Laya.static;
var View=laya.ui.View;
var Dialog=laya.ui.Dialog;
var GameUI=(function(_super){
		function GameUI(){
			
		    this.btn_start=null;
		    this.clock=null;
		    this.timeNumUi=null;
		    this.btn_sm=null;

			GameUI.__super.call(this);
		}

		CLASS$(GameUI,'ui.GameUI',_super);
		var __proto__=GameUI.prototype;
		__proto__.createChildren=function(){
		    			View.regComponent("Text",laya.display.Text);

			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(GameUI.uiView);
		}
		GameUI.uiView={"type":"View","props":{"width":720,"height":1158},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"skin":"ui/mbg.jpg","height":1158}},{"type":"Button","props":{"y":860,"x":259,"width":201,"var":"btn_start","stateNum":"2","skin":"ui/btn_start2.png","labelStroke":1,"labelSize":36,"height":196}},{"type":"Box","props":{"y":341,"x":89,"width":136,"name":"item0","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_01.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":341,"x":225,"width":136,"name":"item1","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_02.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":341,"x":361,"width":136,"name":"item2","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_03.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":341,"x":497,"width":136,"name":"item3","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_04.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":501,"x":89,"width":136,"name":"item4","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_06.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":501,"x":225,"width":136,"name":"item5","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_07.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":501,"x":361,"width":136,"name":"item6","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_08.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":501,"x":497,"width":136,"name":"item7","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_05.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":661,"x":89,"width":136,"name":"item8","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_09.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":661,"x":225,"width":136,"name":"item9","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_10.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":661,"x":361,"width":136,"name":"item10","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_11.png","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":661,"x":497,"width":136,"name":"item11","height":160},"child":[{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/face_1.jpg","pivotY":120,"pivotX":90,"name":"face","height":160}},{"type":"Image","props":{"y":120,"x":90,"width":136,"skin":"ui/back_12.jpg","pivotY":120,"pivotX":90,"name":"back","height":160}}]},{"type":"Box","props":{"y":877,"x":279,"visible":false,"var":"clock"},"child":[{"type":"Image","props":{"skin":"ui/clock.png"}},{"type":"Text","props":{"y":46,"x":48,"width":60,"var":"timeNumUi","text":"5","height":71,"fontSize":72,"font":"SimSun","color":"#190505","bold":true,"align":"center"}}]},{"type":"Image","props":{"y":1080,"x":272,"var":"btn_sm","skin":"ui/shuoming.png"}}]};
		return GameUI;
	})(View);
var ProductUI=(function(_super){
		function ProductUI(){
			
		    this.productImg=null;
		    this.shareBtn=null;

			ProductUI.__super.call(this);
		}

		CLASS$(ProductUI,'ui.ProductUI',_super);
		var __proto__=ProductUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ProductUI.uiView);
		}
		ProductUI.uiView={"type":"View","props":{"width":720,"height":1158},"child":[{"type":"Image","props":{"y":0,"x":0,"width":720,"var":"productImg","skin":"ui/empty.png","height":1158,"sizeGrid":"5,5,5,5"}},{"type":"Button","props":{"y":999,"x":216,"var":"shareBtn","stateNum":"2","skin":"ui/btn_share.png"}}]};
		return ProductUI;
	})(View);
var readyTipUI=(function(_super){
		function readyTipUI(){
			
		    this.readyBtn=null;

			readyTipUI.__super.call(this);
		}

		CLASS$(readyTipUI,'ui.readyTipUI',_super);
		var __proto__=readyTipUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(readyTipUI.uiView);
		}
		readyTipUI.uiView={"type":"Dialog","props":{"width":720,"height":1158},"child":[{"type":"Image","props":{"y":427,"x":40,"skin":"ui/tip_img.png"}},{"type":"Button","props":{"y":623,"x":247,"var":"readyBtn","stateNum":"1","skin":"ui/btn_ok.png"}}]};
		return readyTipUI;
	})(Dialog);
var shareTipUI=(function(_super){
		function shareTipUI(){
			
		    this.closeBtn=null;

			shareTipUI.__super.call(this);
		}

		CLASS$(shareTipUI,'ui.shareTipUI',_super);
		var __proto__=shareTipUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(shareTipUI.uiView);
		}
		shareTipUI.uiView={"type":"Dialog","props":{"width":720,"height":1158},"child":[{"type":"Image","props":{"y":0,"x":0,"skin":"ui/shareImg.png"}},{"type":"Button","props":{"y":306,"x":601,"var":"closeBtn","stateNum":"1","skin":"ui/close.png"}}]};
		return shareTipUI;
	})(Dialog);
var ShuoMingUI=(function(_super){
		function ShuoMingUI(){
			
		    this.btnClose=null;

			ShuoMingUI.__super.call(this);
		}

		CLASS$(ShuoMingUI,'ui.ShuoMingUI',_super);
		var __proto__=ShuoMingUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(ShuoMingUI.uiView);
		}
		ShuoMingUI.uiView={"type":"Dialog","props":{"width":720,"height":1158},"child":[{"type":"Image","props":{"y":36,"x":30,"skin":"ui/sm_img.png"}},{"type":"Button","props":{"y":123,"x":587,"width":65,"var":"btnClose","stateNum":"1","skin":"ui/close.png","height":65}}]};
		return ShuoMingUI;
	})(Dialog);
var SuccessUI=(function(_super){
		function SuccessUI(){
			
		    this.okBtn=null;
		    this.res_tip=null;

			SuccessUI.__super.call(this);
		}

		CLASS$(SuccessUI,'ui.SuccessUI',_super);
		var __proto__=SuccessUI.prototype;
		__proto__.createChildren=function(){
		    
			laya.ui.Component.prototype.createChildren.call(this);
			this.createView(SuccessUI.uiView);
		}
		SuccessUI.uiView={"type":"Dialog","props":{"width":720,"height":1158},"child":[{"type":"Image","props":{"y":394,"x":0,"skin":"ui/success_img.png"}},{"type":"Button","props":{"y":624,"x":237,"width":246,"var":"okBtn","stateNum":"1","skin":"ui/btn_ok.png","labelSize":32,"height":82}},{"type":"Image","props":{"y":554,"x":0,"width":720,"var":"res_tip","skin":"ui/empty.png","height":49,"sizeGrid":"5,5,5,5"}}]};
		return SuccessUI;
	})(Dialog);