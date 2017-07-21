$(function(){
	if (window.innerWidth){
        var winWidth = parseInt(window.innerWidth);
	}
	for(i=1;i<4;i++){
		$(".item-"+i).css("left",((i-0.875)*winWidth)+"px");
	}
	var item1=parseInt($(".item-1").css("left"));
	var item2=parseInt($(".item-2").css("left"));
	var item3=parseInt($(".item-3").css("left"));
	$(".next").click(function(){
		for(i=1;i<4;i++){
			$(".item-"+i).css("left",(parseInt($(".item-"+i).css("left"))-winWidth)+"px");
			if (parseInt($(".item-3").css("left"))==item1) {
				for(i=1;i<4;i++){$(".item-"+i).css("left",((i-0.875)*winWidth)+"px");}
			}
		}
	})
	$(".prev").click(function(){
		for(i=1;i<4;i++){
			$(".item-"+i).css("left",(parseInt($(".item-"+i).css("left"))+winWidth)+"px");
			if (parseInt($(".item-1").css("left"))==item1) {
				for(i=1;i<4;i++){$(".item-"+i).css("left",(item1+(i-3)*winWidth)+"px");}
			}
		}
	})
	// $(".prev").click(function(){
	// 	for(i=0;i<3;i++){
	// 		$(".item-"+(i+1)).css("left",((i+1.125)*winWidth));
	// 	}
	// })
	// $(".prev").click(function(){
	// 	$(".item-2").css("left","112.5%");
	// 	$(".item-1").css("left","12.5%");
	// })
	// $(".next").click(function(){
	// 	$(".item-1").css("left","-87.5%");
	// 	$(".item-2").css("left","12.5%");
	// })
	// $(".item-2").css("left",100+"%");
	// $(".item-2").css("left",function(){return $(".item-2").css("left")-100+"%";});
	// console.log($(".item-2").css("left"));
	// console.log($(".item-1").css("left"));
	// console.log($(".item-2").css("left")-$(".item-1").css("left"));
	// console.log(winWidth);
	// console.log($(".item-2").css("left",$(".item-2").css("left")-winWidth));
	// console.log($(".item-2").css("left")-winWidth);
	// console.log(item1);
	// console.log(item2);
	// console.log(parseInt(item2)-parseInt(item1));
})