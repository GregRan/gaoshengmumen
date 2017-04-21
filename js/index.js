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