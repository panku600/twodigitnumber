/*  
    ----------***----------
    Author  : Ajithkumar Madhavankutty
    Company : Sterco Digitex Pvt Ltd
    Email   : ajith.kumar@stercodigitex.com
              ajithmadhav007@gmail.com
    Date    : 14/01/2020
    ----------***----------
*/
(function(){var Utils={}
Utils.shuffleItems=function(arr){var newMcOrder=[];var end=!1;while(!end){var myRandom=Math.floor(Math.random()*arr.length);var _selected=arr[myRandom];arr.splice(myRandom,1);newMcOrder.push(_selected);if(arr.length==0){end=!0}}
return newMcOrder}
Utils.setLabelText=function(label,font,size,color,align,baseline)
{label=setTextStyle(label);var Text=new createjs.Text(label,size+'px '+font,color);Text.textAlign=(!align)?'left':align;Text.textBaseline=(!baseline)?'top':baseline;return Text}
setTextStyle=function(str)
{str=str.split("<br>").join("\n");return str}
Utils.createInputDomText=function(_con,_type,_class,_id,_len)
{var input=document.createElement('input');input.type=_type;input.className=_class;input.id=_id;if(Number(_len)>0)
{input.maxLength=_len;input.oninput=function(){if(this.value.length>this.maxLength)this.value=this.value.slice(0,this.maxLength)}}
_con.appendChild(input);return document.getElementById(input.id)}
Utils.createDomText=function(_con,_class,_id)
{var div=document.createElement('div');div.className=_class;div.id=_id;_con.appendChild(div);return document.getElementById(div.id)}
Utils.isMobile=function()
{var flag=!1;if(navigator.userAgent.match(/Android/i)||navigator.userAgent.match(/webOS/i)||navigator.userAgent.match(/iPhone/i)||navigator.userAgent.match(/iPad/i)||navigator.userAgent.match(/iPod/i)||navigator.userAgent.match(/BlackBerry/i)||navigator.userAgent.match(/IEMobile/i)||navigator.userAgent.match(/WPDesktop/i))
{flag=!0}
else if(navigator.userAgent.toLowerCase().indexOf("windows nt")!=-1&&navigator.userAgent.toLowerCase().indexOf("touch")!=-1)
{flag=!0}
else{flag=!1}
return flag}
Utils.isLocalChrome=function()
{var flag=!1;if(!document.location.host&&createjs.BrowserDetect.isChrome)
{flag=!0}
return flag}
window.Utils=Utils}())