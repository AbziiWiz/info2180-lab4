window.onload = function (){
	
	
	//Ex.1
	var boundary = document.getElementsByClassName("boundary");
	boundary[0].addEventListener("mouseover", function(){
		
		boundary[0].setAttribute("class", "boundary youlose");
	});
	boundary[1].addEventListener("mouseover", function(){
		
		boundary[1].setAttribute("class", "boundary youlose");
	});
	boundary[2].addEventListener("mouseover", function(){
		
		boundary[2].setAttribute("class", "boundary youlose");
	});
	boundary[3].addEventListener("mouseover", function(){
		
		boundary[3].setAttribute("class", "boundary youlose");
	});
	boundary[4].addEventListener("mouseover", function(){
		
		boundary[4].setAttribute("class", "boundary youlose");
	});
	
}
