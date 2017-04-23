new Swiper(".banner",{
	loop:true,
	effect:"fade",
	fade: {
	  crossFade: true,
	},
	speed:2000,
	autoplay:1000,
	pagination:".banner_nav",
	paginationClickable :true,
	autoplayDisableOnInteraction:false
	//slide,fade,cube,coverflow,flip
})

$.each($(".door"), function(n,e) {
	$(this).hover(function(){
		$(".door_show").eq(n).show();
	},function(){
		$(".door_show").eq(n).hide();
	})
});
//轮播图
var num=0;
$(".right_contro").click(function(){
	num++;
	$.each($(".pic_list li"),function(i,e) {
		if(i==num){
			$(".pic_list li").eq(num-1).animate({width:"180px",height:"136px",top:"190px",left:"0px"})
	$(".pic_list li").eq(num).animate({width:"720px",height:"540px",top:0,left:"120px"})
		}else {
			$(this).css("top",parseInt($(".pic_list li").eq(num-1).css("top"))-10+"px").css("left",parseInt($(".pic_list li").eq(num-1).css("left"))-10+"px")
		}
	});
//	$(".pic_list li").eq(num-1).animate({width:"180px",height:"136px",top:"190px",left:"0px"})
//	$(".pic_list li").eq(num).animate({width:"720px",height:"540px",top:0,left:"120px"})
})




