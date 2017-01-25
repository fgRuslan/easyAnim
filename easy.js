var easy=[];
if(window.ActiveXObject || "ActiveXObject" in window)
	console.log("EasyAnim:Using  Internet  Explorer.  EasyAnim  can't  work....");
easy.slide=function(obj,time)
{
$(obj).slideToggle(time);
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
easy.clone=function(obj,to)
{
$(obj).clone().appendTo(to);
}
easy.hideOrShow=function(obj,bAction)
{
$(obj).animate({opacity:bAction},0);
}
easy.Zindex=function(obj,indx)
{
$(obj).css("z-index",indx);
}
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
easy.rotate=function(obj,deg1,time)
{
$(obj).css("position","relative");
$({deg: 0}).animate({deg: deg1}, {duration: time,step: function (now) {
	$(obj).css({
		transform: 'rotate(' + now + 'deg)'
	});
}});
}