/*  
    ----------***----------
    Author  : Ajithkumar Madhavankutty
    Company : Sterco Digitex Pvt Ltd
    Email   : ajith.kumar@stercodigitex.com
              ajithmadhav007@gmail.com
    Date    : 14/01/2020
    ----------***----------
*/
(function(window)
{"use strict";window.game=window.game||{}
function Main(){}
var p=Main.prototype;p.introScreen;p.clickAudio1,p.clickAudio2;p.rightAudio,p.wrongAudio;p.playingAudio;p.themeId='';p.initialize=function()
{game.view=new game.View();this.loadAudios()}
p.getAssets=function()
{var assetsArr=[{src:"images/Interface_atlas_P_.png",id:"Interface_atlas_P_"}];return assetsArr}
p.startGame=function()
{}
p.showSelectionScreen=function()
{this.introScreen=new game.CustomIntroScreen();stage.addChild(this.introScreen);this.qtnTxt=Utils.setLabelText('',"DoctorSoos","34","#010a12","center");this.qtnTxt.x=222,this.qtnTxt.y=62;this.changeQuestionTxt('Select a theme of your choice');gameRoot.txt_con.addChild(this.qtnTxt)}
p.showGameScreen=function()
{createjs.Tween.removeAllTweens();stage.removeChild(this.introScreen);this.introScreen=null;this.gameScreen=new game.GameScreen();this.gameScreen.alpha=0;stage.addChild(this.gameScreen);this.changeQuestionTxt(!1);createjs.Tween.get(this.gameScreen,{override:!0}).to({alpha:1},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target)}.bind(this))}
p.customGameInstruction=function(e)
{this.playAudio("click2");this.gameInst=new lib.game_inst_screen();this.gameInst.bg.addEventListener("click",this.gameInst.clickEvent1=function(){}.bind(this));this.gameInst.close_btn.cursor='pointer';this.gameInst.close_btn.addEventListener("click",this.gameInst.clickEvent2=function()
{this.gameInst.close_btn.removeEventListener("click",this.gameInst.clickEvent2);this.gameInst.bg.removeEventListener("click",this.gameInst.clickEvent1);this.gameInst.clickEvent1=this.gameInst.clickEvent2=null;this.gameInst.removeAllChildren();canvas.style.cursor='default';stage.removeChild(this.gameInst);this.gameInst=null}.bind(this));this.gameInst.alpha=0;stage.addChild(this.gameInst);createjs.Tween.get(this.gameInst,{override:!0}).to({alpha:1},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target)}.bind(this))}
p.changeQuestionTxt=function(txt)
{if(!txt)
{createjs.Tween.get(this.qtnTxt,{override:!0}).to({alpha:0},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target)}.bind(this));return}
this.qtnTxt.uncache();this.qtnTxt.text=txt;this.txtBounds=this.qtnTxt.getBounds();this.qtnTxt.cache(this.txtBounds.x,this.txtBounds.y-10,this.txtBounds.width,this.txtBounds.height+20);createjs.Tween.get(this.qtnTxt,{override:!0}).to({alpha:1},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target)}.bind(this))}
p.loadAudios=function()
{this.clickAudio1=new Audio();this.clickAudio1.src="sounds/click1.mp3";this.clickAudio2=new Audio();this.clickAudio2.src="sounds/click2.mp3";this.clickAudio3=new Audio();this.clickAudio3.src="sounds/click3.mp3";this.rightAudio=new Audio();this.rightAudio.src="sounds/right.mp3";this.wrongAudio=new Audio();this.wrongAudio.src="sounds/wrong.mp3";this.welldoneAudo=new Audio();this.welldoneAudo.src="sounds/welldone.mp3";this.flipAudo=new Audio();this.flipAudo.src="sounds/flip.mp3"}
p.playAudio=function(mode)
{if(this.playingAudio)
{this.playingAudio.currentTime=0;this.playingAudio.pause()}
switch(mode)
{case "click1":this.playingAudio=this.clickAudio1;break;case "click2":this.playingAudio=this.clickAudio2;break;case "click3":this.playingAudio=this.clickAudio3;break;case "right":this.playingAudio=this.rightAudio;break;case "wrong":this.playingAudio=this.wrongAudio;break;case "welldone":this.playingAudio=this.welldoneAudo;break;case "flip":this.playingAudio=this.flipAudo;break}
this.playingAudio.play()}
p.preventDomOnlyNumber=function()
{$("input[type=text]").on("focus",function()
{$(this).on('wheel',function(e){e.preventDefault()})});$("input[type=text]").on("focus",function()
{$(this).on("keydown",function(e)
{e=e||window.event;var charCode=(typeof e.which=="undefined")?e.keyCode:e.which;var charStr=String.fromCharCode(charCode);if(e.keyCode>=96&&e.keyCode<=105||e.keyCode==8||e.keyCode==46||e.keyCode==9)return;if(!charStr.match(/^[0-9,]+$/)||e.which==38||e.which==40)e.preventDefault()})})}
window.game.Main=Main}(window))