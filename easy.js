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