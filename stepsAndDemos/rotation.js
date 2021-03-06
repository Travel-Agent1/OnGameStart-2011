Demo.event.onEnterFrame = function(){
	Demo.canvas.width = Demo.canvas.width;
	Demo.ctx.lineWidth = "2";
	var delta = {x: Demo.canvas.width/4 - Demo.mouse.x, 
					y: Demo.canvas.height*3/4 - Demo.mouse.y};
	var rot = Math.atan2(delta.y, delta.x) - Math.PI/2;
	Demo.ctx.save();
	Demo.ctx.translate(Demo.canvas.width/4, Demo.canvas.height*3/4);
	Demo.ctx.rotate(rot);
	drawCam(0, 0);
	Demo.ctx.restore();
	
	for(var i=0; i<world.items.length; i++){
		var item = world.items[i];
		drawItem(Demo.canvas.width/4 + item.x, Demo.canvas.height*3/4 + item.y);
	}
	
	drawCam(Demo.canvas.width*3/4, Demo.canvas.height*3/4);
	drawAxis(Demo.canvas.width/4, Demo.canvas.height*3/4);
	drawAxis(Demo.canvas.width*3/4, Demo.canvas.height*3/4);
	
	Demo.ctx.save();
	Demo.ctx.translate(Demo.canvas.width*3/4, Demo.canvas.height*3/4);
	Demo.ctx.rotate(-rot);
	for(var i=0; i<world.items.length; i++){
		var item = world.items[i];
		drawItem(item.x,  item.y);
	}
	Demo.ctx.restore();
};

Demo.event.onGameStart = function(){
	
};


function drawCam(x, y){
	Demo.ctx.beginPath();
	Demo.ctx.moveTo(x, y);
	var w = 30;
	Demo.ctx.lineTo(x-w, y-w*1.5);
	Demo.ctx.lineTo(x+w, y-w*1.5);
	Demo.ctx.lineTo(x, y);
	Demo.ctx.stroke();
};

function drawItem(x, y){
	Demo.ctx.beginPath();
	Demo.ctx.fillStyle = "red";
	Demo.ctx.fillRect(x - 10/2, y-10/2, 10, 10);
}

function drawAxis(x, y){
	var w = 60;
	Demo.ctx.strokeStyle = "blue";
	Demo.ctx.beginPath();
	Demo.ctx.moveTo(x, y);
	Demo.ctx.lineTo(x+w, y);
	Demo.ctx.lineTo(x+w-10, y+10);
	Demo.ctx.lineTo(x+w-10, y-10);
	Demo.ctx.lineTo(x+w, y);
	Demo.ctx.stroke();
	Demo.ctx.strokeStyle = "red";
	Demo.ctx.beginPath();
	Demo.ctx.moveTo(x, y);
	Demo.ctx.lineTo(x, y-w);
	Demo.ctx.lineTo(x-10, y-w+10);
	Demo.ctx.lineTo(x+10, y-w+10);
	Demo.ctx.lineTo(x, y-w);
	Demo.ctx.stroke();
}

var world = {
	items:[
		{x: 50, y: -150},
		{x: 50, y: -250},
		{x: -50, y: -250},
		{x: -50, y: -150},
	
	]

};