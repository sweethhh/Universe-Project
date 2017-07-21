$(function(){
	// banner的闪烁条
	setInterval(twinkleHid,500);
	function twinkleHid(){
		if($(".twinkle").css("display")=="inline-block"){
			$(".twinkle").fadeOut(200);
		}else{
			$(".twinkle").fadeIn(200);
		}
	}
});