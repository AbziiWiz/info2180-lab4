window.onload = function (){
	
	var walls = document.querySelectorAll(".boundary");
	var winner = true;
	var begin;
	var ele = document.getElementById("status");
	var page = document.getElementsByTagName("body");
	var start = document.getElementById("start");
	var maze = document.getElementById("maze");
	var left = maze.offsetLeft;
	var maze_top = maze.offsetTop;
	var height = maze.offsetHeight;
	var width = maze.offsetWidth;
	
	
	//Ex.4 and Ex.5
	start.onclick = function(){
		begin = true;
	
		//Ex.1
	//Turns each wall red
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
	
	
		if (begin){	//Ensures game has started first 					
			
					/*Ex.2 and Ex.5
					Turns all the walls red on hovering over one wall*/
					for (var i=0; i<walls.length; i++){
						walls[i].addEventListener("mouseover", function(){
			
							for (var j=0; j< walls.length;j++){
								walls[j].setAttribute("class", "boundary youlose");
				
							}
								ele.textContent = "You lose :^(";
								begin = false;
								winner = false;
						});	
					}
			
			
			
			//Ex.6 of the assignment
			document.onmousemove = function(event){
				
				var x = event.clientX;
				var y = event.clientY;
				
				//Indicates if pointer is outside of maze
				if (x < left){
					
					for (var n = 0; n< walls.length; n++){
					walls[n].setAttribute("class","boundary youlose");
					}
					ele.textContent = "You lose!";
					winner = false;
					begin = false;
				}
				else if (y > (height + event.clientY)){
					
					for (var n = 0; n< walls.length; n++){
					walls[n].setAttribute("class","boundary youlose");
					}
					ele.textContent = "You lose! :^(";
					winner = false;
					begin = false;
				}	
				else if (y < maze_top){
					
					for (var n = 0; n< walls.length; n++){
					walls[n].setAttribute("class","boundary youlose");
					}
					ele.textContent = "You lose! :^(";
					winner = false;
					begin = false;
				}
				else if (x > (width + event.clientX)){
					
					for (var n = 0; n< walls.length; n++){
					walls[n].setAttribute("class","boundary youlose");
					}
					ele.textContent = "You lose! :^(";
					winner = false;
					begin = false;
				}
			}
			
			//Resets game to initial state
			if (!(winner)){
				for (var a=0; a<walls.length;a++){
				
					walls[a].setAttribute("class","boundary");
				}
					ele.textContent ='Mouse your mouse over the "S" to begin.';
					winner= true;
			
			}	
			
			//Ex.3
			var end = document.getElementById("end");
			end.addEventListener("mouseover", function(){
				if (winner){
			
					ele.textContent = "You Win!";
					begin = false;
				
				}
			});
			
			
		}
	};
	
}

	
	
	
