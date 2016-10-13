var snowmax=35
var snowcolor=new Array("#aaaacc","#ddddff","#ccccdd","#f3f3f3","#f0ffff")
var snowtype=new Array("Times","Arial","Times","Verdana")
var snowletter="*"
var sinkspeed=0.6
var snowmaxsize=30
var snowminsize=8
var snowingzone=1
var snow=new Array()
var marginbottom
var marginright
var timer
var i_snow=0
var x_mv=new Array();
var crds=new Array();
var lftrght=new Array();
var browserinfos=navigator.userAgent
var ie5=document.all&&document.getElementById&&!browserinfos.match(/Opera/)
var ns6=document.getElementById&&!document.all
var opera=browserinfos.match(/Opera/)
var browserok=ie5||ns6||opera

function randommaker(range) {
rand=Math.floor(range*Math.random())
return rand
}

function initsnow() {
if (ie5 || opera) {
marginbottom = document.body.scrollHeight
marginright = document.body.clientWidth-15
}
else if (ns6) {
marginbottom = document.body.scrollHeight
marginright = window.innerWidth-15
}
var snowsizerange=snowmaxsize-snowminsize
for (i=0;i<=snowmax;i++) {
crds[i] = 0;
lftrght[i] = Math.random()*15;
x_mv[i] = 0.03 + Math.random()/10;
snow[i]=document.getElementById("s"+i)
snow[i].style.fontFamily=snowtype[randommaker(snowtype.length)]
snow[i].size=randommaker(snowsizerange)+snowminsize
snow[i].style.fontSize=snow[i].size+'px';
snow[i].style.color=snowcolor[randommaker(snowcolor.length)]
snow[i].style.zIndex=1000
snow[i].sink=sinkspeed*snow[i].size/5
if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
snow[i].posy=randommaker(2*marginbottom-marginbottom-2*snow[i].size)
snow[i].style.left=snow[i].posx+'px';
snow[i].style.top=snow[i].posy+'px';
}
movesnow()
}

function movesnow() {
for (i=0;i<=snowmax;i++) {
crds[i] += x_mv[i];
snow[i].posy+=snow[i].sink
snow[i].style.left=snow[i].posx+lftrght[i]*Math.sin(crds[i])+'px';
snow[i].style.top=snow[i].posy+'px';

if (snow[i].posy>=marginbottom-2*snow[i].size || parseInt(snow[i].style.left)>(marginright-3*lftrght[i])){
if (snowingzone==1) {snow[i].posx=randommaker(marginright-snow[i].size)}
if (snowingzone==2) {snow[i].posx=randommaker(marginright/2-snow[i].size)}
if (snowingzone==3) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/4}
if (snowingzone==4) {snow[i].posx=randommaker(marginright/2-snow[i].size)+marginright/2}
snow[i].posy=0
}
}
var timer=setTimeout("movesnow()",50)
}

for (i=0;i<=snowmax;i++) {
// credit

document.write("<style>.credit__container { position: fixed; bottom:10px; right:10px; z-index: 2147483647; }.credit__logo { /*transition: 0.2s ease;*/ box-sizing: border-box; width:23px; height:23px; background-color: rgba(242, 209, 228, 1); padding: 4px !important; color: #fff; font-family: Montserrat; font-size: 0; letter-spacing: 1px; display: block; text-decoration: none; -moz-border-radius: 50%; -webkit-border-radius: 50%; border-radius: 50%; -khtml-border-radius: 50%;}.credit__logo:hover { background-color: rgba(51, 67, 251, 1);}.this__icon { position: relative; float: left; width: 13px; height: 10px; margin: 3px 0 0 1px !important; background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAnCAMAAAB6+uurAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIdQTFRFM0P7////M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7M0P7HmoP4AAAACx0Uk5TAAACBwsUHCQmLDI4PUNJTlNYYmVnb3N7homPmp6lq7XFyMvQ1t3g5Ony9/3SHBK4AAABTElEQVQ4y5XVW5dDMBQF4B1CLzOoTvWiVVqXlpz///vmgWoQbbLfrL2+JUIOoI3lJ6WgZxo5GMYKLkVDdR577TVjXREU1KU5cVn4fUF5IBGekJSn3wP7LBeU8Bdx7oOCxKET44LuTkv4jcZJOQC45aTIOWMAzjRN5igF0ZUxwCNVCnfxUBYhA27Khkq1oMrGDxkmRGxKrnPrmk+F2pQQyJwIU9HgYUpypKYkRmRKPLiGD1NaQGJGIgasjG5T2Qww+2Q27REr9EXSHeR1o70s5zUuNrovfv0eSnvdoyLNsaPW/g5GH07fxXE4LYGDnpAJdp9f6R5Tgs2HvRZbqAh+Zw917UFNsHqQYnWCiiXmCNx8agRd5d/HmICnYyP6/8AMgRWTjATVPr4QIKzfZvgYswSLrLuRILpw6BBYf8/uWw+mpZoAfHcXItvaUJF/3TjslQh82/oAAAAASUVORK5CYII='); background-size:100%; background-repeat:no-repeat; background-position: center; animation: beat 1s infinite;}.credit__logo:hover .this__icon { background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAnCAMAAAB6+uurAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAIRQTFRF////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////YVm6gAAAACt0Uk5TAAIHCxQcJCYsMjg9Q0lOU1hiZWdvc3uGiY+anqWrtcXIy9DW3eDk6fL3/aQ6BKwAAAEjSURBVBgZlcEJg4FQGAXQW68GMyIjS2RpVd/9//9vQkwbeuegYjhBIrwcPQtNxmwfF8wjf4qmWcxKsVWocWI+RDP8UwFrLg4ezB3rAoWKFbJB1rizQjaFFm7UmW1HhZKdsC1SuNqx62QBdsKuA0pT9ontr4x9XABn9koy9kpNfFOTC5+aDjhTU4qcukBtEGoqkFFThCM1+fCoaQpbqCUxgIBaPABjoYbURMmnhjmuVMzBAtxNCg6UWqjMOUwxwdOKg7io2XAADw1bfrRBy5ofbNCxFL6zQo95wZdkgV4/OV/Ip3hhnFHYIYxHeMmOKGwRHhTeUEcKG0TWeM/wSeGTMHfwkZtTWBHGIwzwdSKFJSH3CoMYvxfepDMMppahyGlhos8fjKjmtzPUNrIAAAAASUVORK5CYII=');}.tumblr__themes { transition: 0.2s ease; position:fixed; bottom:10px; right:40px; background-color: rgba(51, 67, 251, 1); padding:6px; border-radius:5px; color:#fff; font-size:10px; text-transform: uppercase; font-family:\"Helvetica Neue\",Arial,sans-serif; opacity:0;text-decoration:none;}.credit__container:hover .tumblr__themes { transition: 0.2s ease; opacity:1;}</style><div class='credit__container'><a href='http://kesin-tanri-benim.tumblr.com/' target='_blank' class='tumblr__themes'>Kerim Tonkaz</a><a href='http://kesin-tanri-benim.tumblr.com/' target='_blank' class='credit__logo'><div class='this__icon'></div></a></div>");
		

document.write("<span id='s"+i+"' style='position:absolute;top:-"+snowmaxsize+"'>"+snowletter+"</span>")
}
if (browserok) {
window.onload=initsnow
}