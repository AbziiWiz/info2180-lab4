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
	
	
	//Ex.2
	var walls = document.querySelectorAll(".boundary");
	var winner = true;
	var begin;
	var ele = document.getElementById("status");
	for (var i=0; i<walls.length; i++){
		walls[i].addEventListener("mouseover", function()
		{
			for (var j=0; j< walls.length;j++){
				walls[j].setAttribute("class", "boundary youlose");
				
			}
			begin = false;
			winner = false;
			ele.textContent = "You lose :^(";
			
		});
	}
	
	
	//Ex.3
	var end = document.getElementById("end");
	end.addEventListener("mouseover", function(){
		//Can also be if(!winner)
		if (winner){
			
				ele.textContent = "You Win!";
		}
	});

	
	//Ex.4
	var start = document.getElementById("start");
	start.onclick = function(){
		begin = true;
		
		for (var x=0;x < walls.length;x++){
			
			walls[x].classList.remove("youlose");
			//walls[x].setAttribute("class","boundary");
		}
		
		ele.textContent ='Mouse your mouse over the "S" to begin.';
		winner = true;
	};


	
}
