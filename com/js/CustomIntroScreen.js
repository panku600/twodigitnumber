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
function CustomIntroScreen(){this.initialize()}
var p=CustomIntroScreen.prototype=new createjs.Container();p.Container_initialize=p.initialize;p.menuScreen;p.clickedBtnId;p.initialize=function()
{this.Container_initialize();this.customScreen()}
p.customScreen=function()
{this.customMenuScreen()}
p.customMenuScreen=function()
{this.menuScreen=new lib.theme_selection();this.addChild(this.menuScreen);this.menuScreen.btn1=this.menuScreen.theme1.btn;this.menuScreen.btn2=this.menuScreen.theme2.btn;this.menuScreen.btn3=this.menuScreen.theme3.btn;this.menuScreen.btn1.hitArea=this.menuScreen.theme1.btn.b;this.menuScreen.btn2.hitArea=this.menuScreen.theme2.btn.b;this.menuScreen.btn3.hitArea=this.menuScreen.theme3.btn.b;this.menuScreen.btn1.id=1,this.menuScreen.btn2.id=2,this.menuScreen.btn3.id=3;this.timeoutId1=setTimeout(function()
{this.menuScreen.btn1.cursor=this.menuScreen.btn2.cursor=this.menuScreen.btn3.cursor='pointer';this.menuScreen.btn1.on("click",this.menuBtnClickEvent,this);this.menuScreen.btn2.on("click",this.menuBtnClickEvent,this);this.menuScreen.btn3.on("click",this.menuBtnClickEvent,this)}.bind(this),2000);this.timeoutId1=setTimeout(function()
{this.menuScreen.theme1.gotoAndPlay(1);this.menuScreen.theme1.btn.gotoAndStop(0);clearTimeout(this.timeoutId1)}.bind(this),200);this.timeoutId2=setTimeout(function()
{this.menuScreen.theme2.gotoAndPlay(1);this.menuScreen.theme2.btn.gotoAndStop(1);clearTimeout(this.timeoutId2)}.bind(this),400);this.timeoutId3=setTimeout(function()
{this.menuScreen.theme3.gotoAndPlay(1);this.menuScreen.theme3.btn.gotoAndStop(2);clearTimeout(this.timeoutId3)}.bind(this),600)}
p.menuBtnClickEvent=function(e)
{game.main.themeId=e.currentTarget.id;game.main.playAudio("click1");canvas.style.cursor='default';this.menuScreen.btn1.mouseEnabled=this.menuScreen.btn2.mouseEnabled=this.menuScreen.btn3.mouseEnabled=!1;createjs.Tween.get(this.menuScreen,{override:!0}).to({alpha:0},500,createjs.Ease.cubicOut).call(function()
{createjs.Tween.removeAllTweens();this.menuScreen.theme1.stop(),this.menuScreen.theme2.stop(),this.menuScreen.theme3.stop();this.removeAllChildren();game.main.showGameScreen()}.bind(this))}
window.game.CustomIntroScreen=CustomIntroScreen}(window))