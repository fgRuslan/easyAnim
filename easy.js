var easy=[];
if(window.ActiveXObject || "ActiveXObject" in window)
	console.log("%cEasyAnim:Using  IE.  EasyAnim  won't  work",'background: #222; color: #bada55');
easy.slide=function(obj,time)
{
	$(obj).slideToggle(time);
}
easy.fade=function(obj,action,time)
{
	switch(action)
	{
		case "out":
			$(obj).animate({opacity: "hide"},time);
		break;
		case "in":
			$(obj).animate({opacity: "show"},time);
		break;
		default:
			console.log("%cEasyAnim:Error  in  function  easy.fade:invalid action:  %s",'background: #222; color: #bada55',action);
		break;
	}
}
easy.clone=function(obj,to)
{
	$(obj).clone().appendTo(to);
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
	$(obj).animate({width:width1,height:height1},time);
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