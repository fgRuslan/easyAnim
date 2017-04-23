var easy = [];

if(window.ActiveXObject || "ActiveXObject" in window)
	console.log("%ceasyAnim: Using Internet Explorer. easyAnim might not work", 'background: #222; color: #bada55');

easy.slide = function(obj, action, time)
{
	switch(action)
	{
		case "toggle":
			$(obj).slideToggle(time);
			return [obj,true];
		break;
		case "up":
			$(obj).slideUp(time);
			return [obj,true];
		break;
		case "down":
			$(obj).slideDown(time);
			return [obj,true];
		break;
		default:
			console.log("%ceasyAnim: Error in function slide: invalid action", 'background: #222; color: #bada55');
			return [obj,false];
		break;
	}
}
easy.fade = function(obj, action, time)
{
	$(obj).animate({opacity: action}, time);
	return [obj,true];
}
easy.Zindex = function(obj, indx)
{
	$(obj).css("z-index", indx);
	return [obj,true];
}
easy.pos = function(obj, x, y, time)
{
	$(obj).css("position", "relative");
	$(obj).animate({left:x, top:y}, time);
	return [obj,true];
}
easy.scale = function(obj, width1, height1, time)
{
	$(obj).animate({width:width1, height:height1}, time);
	return [obj,true];
}
easy.rotate = function(obj, deg1, time)
{
	$(obj).css("position", "relative");
	$({deg: 0}).animate({deg: deg1},  {duration: time, step: function (now) {
		$(obj).css({
			transform: 'rotate(' + now + 'deg)'
		});
	}});
	return [obj,true];
}
easy.color = function(obj, color1, action, secondPar, thirdPar, time)
{
	switch(action)
	{
		case "fade":
			switch(secondPar)
			{
				case "fg":
					$(obj).animate({color:color1}, time);
					return [obj,true];
				break;
				case "bg":
					$(obj).animate({backgroundColor:color1}, time);
					return [obj,true];
				break;
				default:
					console.log("%ceasyAnim: Error in function color: invalid secondPar", 'background: #222; color: #bada55');
					return [obj,false];
				break;
			}
		break;
		case "glow":
			switch(thirdPar)
			{
				case "fg":
					function glowloop(color11, secondPar1){
						$(obj).animate({Color:color11}, 0, function(){
							$(obj).animate({Color:secondPar1}, time, function()
							{
								setTimeout(glowloop, 0, secondPar1, color11);
							});
						});
					}
					glowloop(color1, secondPar);
				break;
				case "bg":
					function glowloop(color11, secondPar1){
						$(obj).animate({backgroundColor:color11}, 0, function(){
							$(obj).animate({backgroundColor:secondPar1}, time, function()
							{
								setTimeout(glowloop, 0, secondPar1, color11);
							});
						});
					}
					glowloop(color1, secondPar);
				break;
				default:
					console.log("%ceasyAnim: Error in function color: invalid thirdPar", 'background: #222; color: #bada55');
					return [obj,false];
				break;
			}
		break;
		default:
			console.log("%ceasyAnim: Error in function color: invalid action", 'background: #222; color: #bada55');
			return [obj,false];
		break;
	}
}