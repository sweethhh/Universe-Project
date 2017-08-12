$(function(){
	$("#cont1").click(function(){
		for(var i=1;i<=2;i++){
			$("#cont"+i).attr("class",i==1?"on":"");
			$("#cont-"+i).css("display",i==1?"block":"none");
		}
	})
	$("#cont2").click(function(){
		for(var i=1;i<=2;i++){
			$("#cont"+i).attr("class",i==2?"on":"");
			$("#cont-"+i).css("display",i==2?"block":"none");
		}
	})
})