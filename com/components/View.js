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
function View()
{this.initialize()}
var p=View.prototype;p.preloader;p.userInputTxt;p.initialize=function()
{canvas=document.getElementById('canvas');stage=new createjs.Stage(canvas);screen_width=canvas.width;screen_height=canvas.height;createjs.Touch.enable(stage);stage.enableMouseOver();stage.mouseMoveOutside=!0;createjs.Ticker.framerate=25;createjs.Ticker.on("tick",this.onTick,this);this.userInputTxt=document.getElementById('input_text');canvas.addEventListener('contextmenu',this.preventMouseRightClick);game.assets=new game.AssetManager();this.preloadAssets()}
p.preloadAssets=function()
{this.preloader=new ui.Preloader();this.preloader.x=(canvas.width/2)-(this.preloader.width/2);this.preloader.y=(canvas.height/2)-(this.preloader.height/2);stage.addChild(this.preloader);game.assets.on(game.assets.ASSETS_COMPLETE,this.assetsReady,this);game.assets.preloadAssets()}
p.assetsReady=function(e)
{document.getElementById('game_bg').style.backgroundImage='linear-gradient(#C5E9FA, #87C349)';this.preloader.removePreloaderAseets();stage.removeChild(this.preloader);var queue=e.target.queue;var ssMetadata=lib.ssMetadata;for(var i=0;i<ssMetadata.length;i++){ss[ssMetadata[i].name]=new createjs.SpriteSheet({"images":[queue.getResult(ssMetadata[i].name)],"frames":ssMetadata[i].frames})}
gameRoot=new lib.Interface();stage.addChild(gameRoot);game.main.startGame();if(window.innerHeight>window.innerWidth)initialScreenHeight=window.innerWidth;else initialScreenHeight=window.innerHeight;document.addEventListener('mousedown',gotoFullScreenMode);stage.addEventListener('stagemousedown',gotoFullScreenMode);document.onkeydown=function(evt)
{var keyCode=evt?(evt.which?evt.which:evt.keyCode):event.keyCode;if(keyCode==13)
{$('input').blur();StageResize.updateStageSize()}}}
function gotoFullScreenMode()
{if(Utils.isMobile())
{screenfull.request();screen.orientation.lock("landscape-primary")}
$('input').blur()}
p.onTick=function(e)
{stage.update()}
p.preventMouseRightClick=function(e)
{e.preventDefault();return!1}
p.landscapeView=function()
{gameRoot.bgImg.visible=!1;if(window.orientation==90)document.getElementById('game_bg').style.backgroundImage="url(images/bg_landscape.png)";else document.getElementById('game_bg').style.backgroundImage="url(images/bg_portrait.png)"}
window.game.View=View}(window))