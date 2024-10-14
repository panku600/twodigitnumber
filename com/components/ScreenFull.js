/*  
    ----------***----------
    Author  : Ajithkumar Madhavankutty
    Company : Sterco Digitex Pvt Ltd
    Email   : ajith.kumar@stercodigitex.com
              ajithmadhav007@gmail.com
    Date    : 14/01/2020
    ----------***----------
*/
(function(){'use strict';var document=typeof window!=='undefined'&&typeof window.document!=='undefined'?window.document:{};var isCommonjs=typeof module!=='undefined'&&module.exports;var fn=(function(){var val;var fnMap=[['requestFullscreen','exitFullscreen','fullscreenElement','fullscreenEnabled','fullscreenchange','fullscreenerror'],['webkitRequestFullscreen','webkitExitFullscreen','webkitFullscreenElement','webkitFullscreenEnabled','webkitfullscreenchange','webkitfullscreenerror'],['webkitRequestFullScreen','webkitCancelFullScreen','webkitCurrentFullScreenElement','webkitCancelFullScreen','webkitfullscreenchange','webkitfullscreenerror'],['mozRequestFullScreen','mozCancelFullScreen','mozFullScreenElement','mozFullScreenEnabled','mozfullscreenchange','mozfullscreenerror'],['msRequestFullscreen','msExitFullscreen','msFullscreenElement','msFullscreenEnabled','MSFullscreenChange','MSFullscreenError']];var i=0;var l=fnMap.length;var ret={};for(;i<l;i++){val=fnMap[i];if(val&&val[1]in document){for(i=0;i<val.length;i++){ret[fnMap[0][i]]=val[i]}
return ret}}
return!1})();var eventNameMap={change:fn.fullscreenchange,error:fn.fullscreenerror};var screenfull={request:function(element){return new Promise(function(resolve,reject){var onFullScreenEntered=function(){this.off('change',onFullScreenEntered);resolve()}.bind(this);this.on('change',onFullScreenEntered);element=element||document.documentElement;Promise.resolve(element[fn.requestFullscreen]()).catch(reject)}.bind(this))},exit:function(){return new Promise(function(resolve,reject){if(!this.isFullscreen){resolve();return}
var onFullScreenExit=function(){this.off('change',onFullScreenExit);resolve()}.bind(this);this.on('change',onFullScreenExit);Promise.resolve(document[fn.exitFullscreen]()).catch(reject)}.bind(this))},toggle:function(element){return this.isFullscreen?this.exit():this.request(element)},onchange:function(callback){this.on('change',callback)},onerror:function(callback){this.on('error',callback)},on:function(event,callback){var eventName=eventNameMap[event];if(eventName){document.addEventListener(eventName,callback,!1)}},off:function(event,callback){var eventName=eventNameMap[event];if(eventName){document.removeEventListener(eventName,callback,!1)}},raw:fn};if(!fn){if(isCommonjs){module.exports={isEnabled:!1}}else{window.screenfull={isEnabled:!1}}
return}
Object.defineProperties(screenfull,{isFullscreen:{get:function(){return Boolean(document[fn.fullscreenElement])}},element:{enumerable:!0,get:function(){return document[fn.fullscreenElement]}},isEnabled:{enumerable:!0,get:function(){return Boolean(document[fn.fullscreenEnabled])}}});if(isCommonjs){module.exports=screenfull}else{window.screenfull=screenfull}})()