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
translate(obj,$(obj).position(),$(obj).position()+10,"slow");
setTimeout(function(){
	translate(obj,$(obj).position(),$(obj).position()-10,"slow");
},time);
}
function translate(obj,x,y,time)
{
$(obj).css("position","relative");
$(obj).animate({left:x,top:y},time);
}
function scale(obj,width1,height1,time)
{
$(obj).animate({
width:width1,height:height1}
,time);
}
//Add  here  more  arguments
function fullAnim(obj,width1,opacity1,marginLeft1,fsize,bw1,height1,bh1,visib,pos,bottom1,top1,TIME)
{
$(obj).animate({
    width: width1,
    opacity: opacity1,
    marginLeft: marginLeft1,
    fontSize: fsize,
    borderWidth: bw1,
	height:height1,
	borderHeight:bh1,
	position:pos,
	visibility:visib,
	bottom:bottom1,
	top:top1
  }, TIME );
}
function rotate(obj,deg1,time)
{/*yeah  yeah  i  know*/
/*  It's  not  working  without  fullAnim  function..  I  don't  know  why..*/
/* TODO: Fix  this  bug*/
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

/*$("#object").css({
transform: 'rotate(' + 90 + 'deg)'
});*/
}