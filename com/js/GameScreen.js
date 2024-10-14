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
function GameScreen(){this.initialize()}
var p=GameScreen.prototype=new createjs.Container();p.Container_initialize=p.initialize;p.timeoutId;p.qtnCon;p.qtnArr=[];p.maxQtns=5;p.count=1;p.initialize=function()
{this.Container_initialize();this.customScreen()}
p.customScreen=function(e)
{if(game.main.themeId==1)document.getElementById('game_bg').style.backgroundImage='linear-gradient(#072845, #021426)';else if(game.main.themeId==2)document.getElementById('game_bg').style.backgroundImage='linear-gradient(#AAC335, #B9D347)';else document.getElementById('game_bg').style.backgroundImage='linear-gradient(#5E8ACC, #539333)';this.actScreen=new lib.theme_screen;gameRoot.con.addChild(this.actScreen);this.actScreen.alpha=0;this.actScreen.gotoAndStop(game.main.themeId-1);createjs.Tween.get(this.actScreen,{override:!0}).to({alpha:1},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target);this.loadQuestionOBO(!0);this.loadActElement();this.showNavigationBar()}.bind(this))}
p.showNavigationBar=function()
{this.navBar=new lib.bottom_bar;this.navBar.x=176,this.navBar.y=550;this.navBar.toY=this.navBar.y;this.navBar.y+=20;this.navBar.alpha=0;this.actScreen.addChild(this.navBar);createjs.Tween.get(this.navBar,{override:!0}).to({alpha:1,y:this.navBar.toY},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target)}.bind(this));this.firstNumTxt=Utils.setLabelText(this.secondNum.toString(),"PoppinsBold","40","#000","center");this.txtBounds=this.firstNumTxt.getBounds();this.firstNumTxt.cache(this.txtBounds.x,this.txtBounds.y,this.txtBounds.width,this.txtBounds.height);this.firstNumTxt.x=130,this.firstNumTxt.y=62;this.secondNumTxt=Utils.setLabelText('0',"PoppinsBold","40","#000","center");this.txtBounds=this.secondNumTxt.getBounds();this.secondNumTxt.cache(this.txtBounds.x,this.txtBounds.y,this.txtBounds.width,this.txtBounds.height);this.secondNumTxt.x=327,this.secondNumTxt.y=this.firstNumTxt.y;this.inputTxt=Utils.createInputDomText(document.getElementById('canvas_area'),"number","input-txt","input-tt1","2");this.inputTxt.addEventListener("input",this.inputTxtEvent=function(e){this.enabledCheckButton(e)}.bind(this));this.inputTxt.style.display='none';this.domTxt=new createjs.DOMElement(this.inputTxt);this.domTxt.x=460,this.domTxt.y=47;this.navBar.con.addChild(this.firstNumTxt,this.secondNumTxt,this.domTxt);this.homeBtn=this.navBar.home_btn;this.homeBtn.hitArea=this.homeBtn.btn;this.homeBtn.on("click",function(){window.location.reload()},this);this.instBtn=this.navBar.help_btn;this.instBtn.hitArea=this.instBtn.btn;this.instBtn.on("click",function(){game.main.customGameInstruction()},this);this.homeBtn.cursor=this.instBtn.cursor='pointer';this.checkBtn=this.navBar.check_btn;this.checkBtn.hitArea=this.checkBtn.btn;this.checkBtn.cursor='pointer';this.checkBtn.on("click",this.checkBtnClickEvent,this);this.checkBtn.mouseEnabled=!1,this.checkBtn.alpha=0.5}
p.loadQuestionOBO=function(b)
{if(!b)
{createjs.Tween.get(this.navBar.con,{override:!0}).to({alpha:0},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target)}.bind(this));return}
this.secondNum=Math.round(2+Math.random()*18);this.firstNum=Math.round(1+Math.random()*(this.secondNum-1));this.ans=this.secondNum-this.firstNum;game.main.changeQuestionTxt('Subtract '+this.firstNum+' from '+this.secondNum+'.')}
p.loadActElement=function()
{var i,objRef,sX=0,sY=240,gap,rawObjCount=10;if(game.main.themeId==1||game.main.themeId==2||game.main.themeId==3){if(this.secondNum<=10)sY+=60}
if(game.main.themeId==2)gap=30;if(game.main.themeId==3)gap=20;else gap=14;this.clickCount=0,this.clickObjArr=[];for(i=0;i<this.secondNum;i++)
{objRef=lib['theme'+game.main.themeId+'_obj'];this.clickObj=new objRef;if(i==0)
{if(this.secondNum>rawObjCount)this.propWidth=(Math.round(this.clickObj.nominalBounds.width)*rawObjCount)+((gap-1)*rawObjCount);else this.propWidth=(Math.round(this.clickObj.nominalBounds.width)*this.secondNum)+((gap-1)*this.secondNum);sX=Math.round(propertyWidth/2-this.propWidth/2)}
if(i!=0&&i%rawObjCount==0)
{if(Math.abs(this.secondNum-i)>rawObjCount)this.propWidth=(Math.round(this.clickObj.nominalBounds.width)*rawObjCount)+((gap-1)*rawObjCount);else this.propWidth=(Math.round(this.clickObj.nominalBounds.width)*Math.abs(this.secondNum-i))+((gap-1)*Math.abs(this.secondNum-i));sX=Math.round(propertyWidth/2-this.propWidth/2);sY=sY+Math.round(this.clickObj.nominalBounds.height)+gap}
this.clickObj.x=sX,this.clickObj.y=sY;sX=sX+Math.round(this.clickObj.nominalBounds.width)+gap;this.actScreen.con.addChild(this.clickObj);this.clickObjArr.push(this.clickObj);this.clickObj.hitArea=this.clickObj.btn;this.clickObj.cursor='pointer';this.clickObj.on("click",this.objClickEvent,this);this.clickObj.obj.line.bg.gotoAndStop(game.main.themeId-1)}
this.showActElementCon(!0)}
p.showActElementCon=function(b)
{if(b)
{this.actScreen.con.alpha=0;createjs.Tween.get(this.actScreen.con,{override:!0}).to({alpha:1},1000,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target)}.bind(this))}
else{createjs.Tween.get(this.actScreen.con,{override:!0}).to({alpha:0},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target);this.actScreen.con.removeAllChildren()}.bind(this))}}
p.objClickEvent=function(e)
{if(!e.currentTarget.flag)
{game.main.playAudio("flip");e.currentTarget.obj.line.play();e.currentTarget.flag=!0;this.clickCount++}
else{game.main.playAudio("click3");e.currentTarget.flag=!1;e.currentTarget.obj.line.gotoAndStop(0);if(this.clickCount>0)this.clickCount--}
this.updateSecondNumTxt()}
p.updateSecondNumTxt=function()
{this.secondNumTxt.uncache();this.secondNumTxt.text=this.clickCount.toString();this.txtBounds=this.secondNumTxt.getBounds();this.secondNumTxt.cache(this.txtBounds.x,this.txtBounds.y,this.txtBounds.width,this.txtBounds.height);if(this.clickCount>0)this.inputTxt.style.display='block';else this.inputTxt.style.display='none'}
p.enabledCheckButton=function(e)
{if(this.inputTxt.value!="")
{this.checkBtn.mouseEnabled=!0;this.checkBtn.alpha=1}
else{this.checkBtn.mouseEnabled=!1;this.checkBtn.alpha=0.5}}
p.checkBtnClickEvent=function(e)
{e.currentTarget.mouseEnabled=!1;e.currentTarget.alpha=0.5;if(e.currentTarget.currentFrame==0)this.checkAnswer();else if(e.currentTarget.currentFrame==1)this.tryAgain();else this.resetAll()}
p.checkAnswer=function()
{this.actScreen.con.mouseEnabled=!1;this.navBar.sign.visible=!0;this.navBar.sign.alpha=1;this.inputTxt.readOnly=!0;if(Number(this.inputTxt.value)==this.ans&&this.secondNumTxt.text==this.firstNum.toString())
{game.main.playAudio("right");this.navBar.sign.gotoAndStop(0);this.timeoutId=setTimeout(function()
{clearTimeout(this.timeoutId);if(this.count!=this.maxQtns)
{this.checkBtn.gotoAndStop(2);this.checkBtn.alpha=1;this.checkBtn.mouseEnabled=!0}
else{this.showGameCompleteScreen()}}.bind(this),2000)}
else{game.main.playAudio("wrong");this.navBar.sign.gotoAndStop(1);this.timeoutId=setTimeout(function()
{clearTimeout(this.timeoutId);this.checkBtn.gotoAndStop(1);this.checkBtn.alpha=1;this.checkBtn.mouseEnabled=!0}.bind(this),2500)}}
p.tryAgain=function()
{canvas.style.cursor='default';game.main.playAudio("click2");this.checkBtn.gotoAndStop(0);this.clickCount=0;this.updateSecondNumTxt();this.inputTxt.value='';this.inputTxt.readOnly=!1;this.navBar.sign.visible=!1;this.actScreen.con.mouseEnabled=!0;for(var i=0;i<this.secondNum;i++)
{this.clickObjArr[i].obj.line.gotoAndStop(0);this.clickObjArr[i].flag=!1}}
p.resetAll=function()
{canvas.style.cursor='default';game.main.playAudio("click2");this.checkBtn.gotoAndStop(0);this.loadQuestionOBO(!1);this.showActElementCon(!1);game.main.changeQuestionTxt(!1);this.count++;createjs.Tween.get(this.navBar.sign,{override:!0}).to({alpha:0},500,createjs.Ease.cubicOut).call(function(e)
{this.inputTxt.value='';this.inputTxt.readOnly=!1;this.clickCount=0;this.updateSecondNumTxt();this.actScreen.con.mouseEnabled=!0;createjs.Tween.removeTweens(e.target);this.loadQuestionOBO(!0);this.loadActElement();this.firstNumTxt.uncache();this.firstNumTxt.text=this.secondNum.toString();this.txtBounds=this.firstNumTxt.getBounds();this.firstNumTxt.cache(this.txtBounds.x,this.txtBounds.y,this.txtBounds.width,this.txtBounds.height);createjs.Tween.get(this.navBar.con,{override:!0}).to({alpha:1},500,createjs.Ease.cubicOut).call(function(e)
{createjs.Tween.removeTweens(e.target)}.bind(this))}.bind(this))}
p.showGameCompleteScreen=function()
{this.finalScreen=new lib.act_completed;this.addChild(this.finalScreen);this.timeoutId=setTimeout(function(){clearTimeout(this.timeoutId);game.main.playAudio("welldone")}.bind(this),1500)}
p.gotoHome=function()
{this.inputTxt1.removeEventListener("input",this.inputTxtEvent1);this.inputTxt2.removeEventListener("input",this.inputTxtEvent2);game.main.playAudio("click2");canvas.style.cursor='default';createjs.Tween.removeAllTweens();this.checkBtn.visible=!1;this.removeAllChildren();$('#input-tt1').remove();$('#input-tt2').remove()}
window.game.GameScreen=GameScreen}(window))