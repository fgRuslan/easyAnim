var easy = [];

if(window.ActiveXObject || "ActiveXObject" in window)
	console.log("%ceasyAnim: Using Internet Explorer. easyAnim may not work", 'background: #222; color: #bada55');

easy.slide = function(obj, action, time){//Action can be 1(down) 0(up) or 2(toggle)
	switch(action){
		case 2://toggle
			$(obj).slideToggle(time);
		break;
		case 0://up
			$(obj).slideUp(time);
		break;
		case 1://down
			$(obj).slideDown(time);
		break;
		default:
			console.log("%ceasyAnim: Error in function slide: invalid action", 'background: #222; color: #bada55');
		break;
	}
}
easy.fade = function(obj, o, time){
	$(obj).animate({opacity: o}, time);
}
easy.Zindex = function(obj, indx){
	$(obj).css("z-index", indx);
}
easy.pos = function(obj, x, y, time){
	$(obj).css("position", "relative");
	$(obj).animate({left:x, top:y}, time);
}
easy.scale = function(obj, w, h, time){
	$(obj).animate({width:w, height:h}, time);
}
easy.rotate = function(obj, deg1, time){
	$(obj).css("position", "relative");
	$({deg: 0}).animate({deg: deg1}, {duration: time, step: function (now) {
		$(obj).css({transform: 'rotate(' + now + 'deg)'});
	}});
}
easy.color = function(obj, action, secondPar, thirdPar, clr, time){
	switch(action)
	{
		case "fade":
			switch(secondPar){
				case "foreground":
					$(obj).animate({color:clr}, time);
				break;
				case "background":
					$(obj).animate({backgroundColor:clr}, time);
				break;
				default:
					console.log("%ceasyAnim: Error in function color: invalid secondPar", 'background: #222; color: #bada55');
				break;
			}
		break;
		case "glow":
			switch(secondPar){
				case "foreground":
					function glowloop(color2, secondPar1){
						$(obj).animate({color:color2}, 0, function(){
							$(obj).animate({color:secondPar1}, time, function(){
								setTimeout(glowloop, 0, secondPar1, color2);
							});
						});
					}
					glowloop(clr, thirdPar);
				break;
				case "background":
					function glowloop(color2, secondPar1){
						$(obj).animate({backgroundColor:color2}, 0, function(){
							$(obj).animate({backgroundColor:secondPar1}, time, function(){
								setTimeout(glowloop, 0, secondPar1, color2);
							});
						});
					}
					glowloop(clr, thirdPar);
				break;
				default:
					console.log("%ceasyAnim: Error in function color: invalid secondPar", 'background: #222; color: #bada55');
				break;
			}
		break;
		default:
			console.log("%ceasyAnim: Error in function color: invalid action", 'background: #222; color: #bada55');
		break;
	}
}
