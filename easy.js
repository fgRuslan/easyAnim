function slide(obj,time)
{
$(obj).slideToggle(time);
}
function remove(obj)
{
$(obj).remove();
}
function dragOnAxis(obj,axis1)
{
$(obj).draggable({
axis:axis1});
}
function makeDraggable(obj)
{
$(obj).draggable();
}
function anim(obj,width1,opacity1,marginLeft1,fsize,borderWidth1,height1,bh1,TIME)
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
function fadeOut(obj,time)
{
$(obj).animate(
  {opacity: "hide"},time);
}
function fadeIn(obj,time)
{
$(obj).animate(
  {opacity: "show"},time);
}
function makeDialog(obj,width1,height1,isModal)
{
$(obj).dialog({modal:isModal,height:height1,width:width1});
}
function clone(obj,to)
{
$(obj).clone().appendTo(to);
}
function hideOrShow(obj,bAction)
{
$(obj).animate({opacity:bAction},0);
}
function makeSlider(obj)
{
$(obj).slider();
}
function makeProgressBar(obj)
{
$(obj).ProgressBar();
}
function posZ(obj,indx)
{
$(obj).css("z-index",indx);
}
//V2.0
function makeAttention(obj,time)
{
	$(obj).css("position","relative");
	$(obj).animate({opacity: "hide", top: "-10"},0);
	$(obj).animate({opacity: "show", top: "10"}, "slow");
	setTimeout(function()
	{
	$(obj).animate({opacity: "hide", top: "-10"}, "slow");
	},time);
}
function translate(obj,x,y,time)
{
$(obj).css("position","relative");//make  it  movable
$(obj).animate({left:x,top:y},time);//move
}