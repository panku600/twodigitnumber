/*  
    ----------***----------
    Author  : Ajithkumar Madhavankutty
    Company : Sterco Digitex Pvt Ltd
    Email   : ajith.kumar@stercodigitex.com
              ajithmadhav007@gmail.com
    Date    : 14/01/2020
    ----------***----------
*/
(function(window){"use strict";window.game=window.game||{};function AssetManager()
{this.initialize()}
var p=AssetManager.prototype=new createjs.EventDispatcher();p.EventDispatcher_initialize=p.initialize;p.ASSETS_PROGRESS='assets progress';p.ASSETS_COMPLETE='assets complete';p.loadManifest=null;p.queue=null;p.loadProgress=0;p.initialize=function()
{images=images||{};this.loadManifest=game.main.getAssets()}
p.preloadAssets=function()
{this.loadCSSFonts()}
p.loadCSSFonts=function()
{this.loadFonts({src:foo,type:"fontcss"});return!1}
p.loadFonts=function(config)
{var loader=new createjs.FontLoader(config,!0);loader.on("complete",this.handleFontLoaded,this);loader.load()}
p.handleFontLoaded=function(e)
{this.queue=new createjs.LoadQueue(!1);this.queue.on("fileload",this.assetsLoad,this);this.queue.on('complete',this.assetsLoaded,this);this.queue.on('progress',this.assetsProgress,this);this.queue.loadManifest(this.loadManifest)}
p.assetsLoad=function(e)
{if(e.item.type=="image"){images[e.item.id]=e.result}}
p.assetsProgress=function(e)
{this.loadProgress=e.progress;var event=new createjs.Event(this.ASSETS_PROGRESS);this.dispatchEvent(event)}
p.assetsLoaded=function(e)
{var event=new createjs.Event(this.ASSETS_COMPLETE);this.dispatchEvent(event)}
window.game.AssetManager=AssetManager}(window))