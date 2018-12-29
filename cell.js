class Button{
	constructor(x,y){
		this.numClicked = 0;
		this.text = "PAUSED";
		this.x = x;
		this.y = y;
		this.color = 200;
	}
	clickedButton(x,y){
		if(x > this.x && x < (this.x + 60) && y > this.y && y < (this.y + 30)){
			this.numClicked ++;
			if(this.numClicked % 2 == 0){this.text = "PAUSED";
			}else{
				this.text = "RUNNING";
			}
			return true;	 
		}
		return false;
	}
	showShape(){
		noStroke();
		fill(this.color);
		rect(this.x,this.y,60,30);
		fill(70);
		text(this.text, this.x, this.y + 15);
		
	}
}
class Cell{
	constructor(x,y,size){
		this.x1 = x;
		this.x2 = x + size;
		this.y1 = y;
		this.y2 = y + size;
		this.size = size;
		this.alive = false;
	}
	clicked(x,y){
		if(x > this.x1 && x < this.x2 && y > this.y1 && y < this.y2){
			this.alive = !this.alive;
			return true;
		}
		return false;
	}
	state(){return this.alive;}
	change(state){
		this.alive = state;
	}
	
	show(){
		noStroke();
		if(this.alive){ 
			fill(225,0,0);
		}else fill(225,225,225);
		rect(this.x1,this.y1,this.size,this.size);
	}
}