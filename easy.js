var easy=[];//Massive  of  variables  and  commands
if(window.ActiveXObject || "ActiveXObject" in window)
	console.log("Using  Internet  Explorer.  EasyAnim  can't  work....");//Don't  try  to  work  with  easyanim  in  IE..
easy.slide=function(obj,time)
{
$(obj).slideToggle(time);
}
easy.remove=function(obj)
{
$(obj).remove();
}
easy.dragOnAxis=function(obj,axis1)
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
easy.posZ=function(obj,indx)
{
$(obj).css("z-index",indx);
}
//V2.0
easy.makeAttention=function(obj,time)
{
translate(obj,$(obj).position(),$(obj).position()+10,"slow");
setTimeout(function(){
	translate(obj,$(obj).position(),$(obj).position()-10,"slow");
},time);
}/*  It's  not  working!!*/
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
//Add  here  more  arguments  /*  Whoa!This  function  has a  lot  of  args.If  you  dont  want  to  use  this  function  you   can  use  jQuery  equivalent    TODO: Fix it.*/
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
{/*yeah  yeah  i  know*/
/*  It's  not  working  without  fullAnim  function..  I  don't  know  why..*/
/* TODO: Fix  this  bug*/
//Terrivle  mess  over  here!!But,you  know,It  works..
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
easy.moveTo=function(obj,left,right,top,bottom,time)
{
$(obj).css("position","relative");
$(obj).animate({
	left:left,
	right:right,
	top:top,
	bottom:bottom
	},time);
}