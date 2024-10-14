/*  
    ----------***----------
    Author  : Ajithkumar Madhavankutty
    Company : Sterco Digitex Pvt Ltd
    Email   : ajith.kumar@stercodigitex.com
              ajithmadhav007@gmail.com
    Date    : 14/01/2020
    ----------***----------
*/
(function(){"use strict";window.ui=window.ui||{};var Preloader=function(){this.initialize()}
var p=Preloader.prototype=new createjs.Container();p.width=150;p.height=150;p.preloaderDiv;p.domElement;p.Container_initialize=p.initialize;p.initialize=function(){this.Container_initialize();this.preloaderDiv=document.getElementById("preload_div");this.domElement=new createjs.DOMElement(this.preloaderDiv);this.addChild(this.domElement);setTimeout(function(){this.preloaderDiv.style.display="block"}.bind(this),200)}
p.removePreloaderAseets=function()
{this.preloaderDiv.parentNode.removeChild(this.preloaderDiv)}
window.ui.Preloader=Preloader}())