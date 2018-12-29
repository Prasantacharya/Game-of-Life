var a = [];
var board = [];
var start =false;
var s;

function mousePressed(){
	if(s.clickedButton(mouseX, mouseY))	start = !start;
	for	(var i = 0; i < a.length; i ++)
		for(var j = 0; j < a[0].length; j++)
			if(a[i][j].clicked(mouseX,mouseY)){
				board[i][j] = a[i][j].alive; 				
			}
	
}
function update(i, j){
	//check all the neighbors around a square
	let neighbors = 0;
	for(let i2 = -1; i2 < 2; i2++){
		for(let j2 = -1; j2 < 2; j2++){
			//check to make sure it is inbounds
			if(i + i2 < 0 || i + i2 >= a.length||
			   j + j2 < 0 || j + j2 >= a[0].length ||
			   (i2 == 0 && j2 == 0)) continue;
			if(a[i + i2][j + j2].state()) neighbors += 1;
			
		}
	}
	
	//if a cell has between 2-3 neighbors it stays alive
	if(neighbors === 2 || neighbors === 3){
	//if an unpopulated cell has 3 neighbors, it becomes populated
		if(!a[i][j].alive && neighbors == 3){
			board[i][j] = true;
		}else{
			board[i][j] = a[i][j].alive;
		}
	}
	else{
		//if a cell has too few or too many neighbors, it dies
		board[i][j] = false;
	}
	
}

function setup() {
	frameRate(10);
  createCanvas(450, 400);
	s = new Button(5,365);
	for	(let i = 0; i < 360/8;i++){
		a[i] = [];
		board[i] = [];
			for (let j = 0; j < 280/8; j++){
				board[i][j] = false;
				var temp = new Cell((i * 10) + 1, (j * 10) + 1, 10);
				a[i][j] = temp;
			}
	}
	
}

function draw() {
	background(51);
	s.showShape();
	fill(100);
	rect(0,400,30,30);
	if(start){
		for	(let i = 0; i < a.length;i++){
			for(let j = 0; j < a[0].length; j++){
				
				update(i, j);//update the board
			}
		}
		
		for	(let i = 0; i < a.length;i++){
			for(let j = 0; j < a[0].length; j++){
				a[i][j].change(board[i][j]);//then transfer the board
				a[i][j].show();
				
			}
		}
	}
	for	(let i = 0; i < a.length;i++){
			for(let j = 0; j < a[0].length; j++){
				a[i][j].show();
			}
		}
	
}
/*
var a = [];
var board = [];
var start =false;
var s;

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
function mousePressed(){
	if(s.clickedButton(mouseX, mouseY))	start = !start;
	for	(var i = 0; i < a.length; i ++)
		for(var j = 0; j < a[0].length; j++)
			if(a[i][j].clicked(mouseX,mouseY)){
				board[i][j] = a[i][j].alive; 
				
			}
	
}
function update(i, j){
	//check all the neighbors around a square
	let neighbors = 0;
	for(let i2 = -1; i2 < 2; i2++){
		for(let j2 = -1; j2 < 2; j2++){
			//check to make sure it is inbounds
			if(i + i2 < 0 || i + i2 >= a.length||
				 j + j2 < 0 || j + j2 >= a[0].length || (i2 == 0 && j2 == 0)) continue;
			if(a[i + i2][j + j2].state()) neighbors += 1;
			
		}
	}
	
	//if a cell has between 2-3 neighbors it stays alive
	if(neighbors === 2 || neighbors === 3){
	//if an unpopulated cell has 3 neighbors, it becomes populated
		if(!a[i][j].alive && neighbors == 3){
			board[i][j] = true;
		}else{
			board[i][j] = a[i][j].alive;
		}
	}
	else{
		//if a cell has too few or too many neighbors, it dies
		board[i][j] = false;
	}
	
}

function setup() {
	frameRate(10);
  createCanvas(450, 400);
	s = new Button(5,365);
	for	(let i = 0; i < 360/8;i++){
		a[i] = [];
		board[i] = [];
			for (let j = 0; j < 280/8; j++){
				board[i][j] = false;
				var temp = new Cell((i * 10) + 1, (j * 10) + 1, 10);
				a[i][j] = temp;
			}
	}
	
}

function draw() {
	background(51);
	s.showShape();
	fill(100);
	rect(0,400,30,30);
	if(start){
		for	(let i = 0; i < a.length;i++){
			for(let j = 0; j < a[0].length; j++){
				
				update(i, j);//update the board
			}
		}
		
		for	(let i = 0; i < a.length;i++){
			for(let j = 0; j < a[0].length; j++){
				a[i][j].change(board[i][j]);//then transfer the board
				a[i][j].show();
				
			}
		}
	}
	for	(let i = 0; i < a.length;i++){
			for(let j = 0; j < a[0].length; j++){
				a[i][j].show();
			}
		}
	
}
*/