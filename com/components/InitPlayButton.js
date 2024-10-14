/*  
    ----------***----------
    Author  : Ajithkumar Madhavankutty
    Company : Sterco Digitex Pvt Ltd
    Email   : ajith.kumar@stercodigitex.com
              ajithmadhav007@gmail.com
    Date    : 14/01/2020
    ----------***----------
*/
(function(){"use strict";window.ui=window.ui||{};var InitPlayButton=function()
{this.initialize()}
var p=InitPlayButton.prototype=new createjs.Container();p.playBtn=null;p.playImg=null;p.Container_initialize=p.initialize;p.initialize=function()
{this.Container_initialize();this.alpha=0;this.playBtn=new createjs.Shape();this.playBtn.graphics.beginFill("#fff").drawRect(40,15,138,74);this.playBtn.cache(40,15,138,74);this.playImg=new createjs.Bitmap(images.initPlayBtn);this.playImg.hitArea=this.playBtn;this.playImg.x=-this.playImg.getBounds().width/2;this.playImg.y=-this.playImg.getBounds().height/2;this.playBtn.x=this.playImg.x,this.playBtn.y=this.playImg.y;this.playBtn.alpha=.01;this.addChild(this.playImg,this.playBtn);this.playBtn.cursor='pointer'}
p.clearAll=function()
{this.removeChild(this.playBtn,this.playImg)}
window.ui.InitPlayButton=InitPlayButton}())