/*
    EasyAnim
    Copyright (C) 2016  Ruslan Isaev

    This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/
var easy=[];
if(window.ActiveXObject || "ActiveXObject" in window)
	console.log("Using  Internet  Explorer.  EasyAnim  can't  work....");
easy.slide=function(obj,time)
{
$(obj).slideToggle(time);
}
easy.remove=function(obj)
{
$(obj).remove();
}
easy.dragAxis=function(obj,axis1)
{
$(obj).draggable({
axis:axis1});
}
easy.makeDraggable=function(obj)
{
$(obj).draggable();
}
easy.anim=function(obj,width1,opacity1,marginLeft1,fsize,borderWidth1,height1,bh1,TIME)
{
$(obj).animate({
    width: width1,
    opacity: opacity1,
    marginLeft: marginLeft1,
    fontSize: fsize,
    borderWidth: borderWidth1,
	//library  added
	height:height1,
	borderHeight:bh1
  }, TIME );
}
easy.fadeOut=function(obj,time)
{
$(obj).animate(
  {opacity: "hide"},time);
}
easy.fadeIn=function(obj,time)
{
$(obj).animate(
  {opacity: "show"},time);
}
easy.makeDialog=function(obj,width1,height1,isModal)
{
$(obj).dialog({modal:isModal,height:height1,width:width1});
}
easy.clone=function(obj,to)
{
$(obj).clone().appendTo(to);
}
easy.hideOrShow=function(obj,bAction)
{
$(obj).animate({opacity:bAction},0);
}
easy.makeSlider=function(obj)
{
$(obj).slider();
}
easy.makeProgressBar=function(obj)
{
$(obj).ProgressBar();
}
easy.Zindex=function(obj,indx)
{
$(obj).css("z-index",indx);
}
//V2.0
easy.translate=function(obj,x,y,time)
{
$(obj).css("position","relative");
$(obj).animate({left:x,top:y},time);
}
easy.scale=function(obj,width1,height1,time)
{
$(obj).animate({
width:width1,height:height1}
,time);
}
//Fix  this
easy.fullAnim=function(obj,width1,opacity1,marginLeft1,fsize,bw1,height1,width1,bh1,visib,pos,bottom1,top1,bottom1,left1,right1,TIME)
{
$(obj).css("position","relative");//It  doesn't  work  without  this.
$(obj).animate({
    width: width1,
    opacity: opacity1,
    marginLeft: marginLeft1,
    fontSize: fsize,
    borderWidth: bw1,
	height:height1,
	width:width1,
	borderHeight:bh1,
	position:pos,
	visibility:visib,
	bottom:bottom1,
	top:top1,
	bottom:bottom1,
	left:left1,
	right:right1
  }, TIME );
}
easy.rotate=function(obj,deg1,time)
{
$(obj).animate({
    "opacity": "1"
}, 1, function () {
    $(obj).animate({
        "position":"relative"
    }, 1, function () {
        $({
            deg: 0
        }).animate({
            deg: deg1
        }, {
            duration: time,
            step: function (now) {
                $(obj).css({
                    transform: 'rotate(' + now + 'deg)'
                });
            }
        });
    });
});
}