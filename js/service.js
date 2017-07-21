window.onload = function (){
	var cont1 = document.getElementById("cont1");
	var cont2 = document.getElementById("cont2");
	function setTab(name,m,n) {
		for (var i = 1; i <= n; i++) {
			var menu = document.getElementById(name+i);
			var showDiv = document.getElementById("cont-"+i);
			menu.className = i==m ?"on":"";
			showDiv.style.display = i==m?"block":"none";
		}
    }
    cont1.onclick = setTab("cont",1,2);
}
