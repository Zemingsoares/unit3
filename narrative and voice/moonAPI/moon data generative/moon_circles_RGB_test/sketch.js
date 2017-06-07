
	var vars = {};
	var len;

$(document).ready(function(){
	var fileR = "moondataR.txt";
	var fileG = "moondataG.txt";
	var fileB = "moondataB.txt";
	
	var responseR = '';
	$.ajax({ type: "GET",   
	         url: fileR,   
	         async: false,
	         success : function(textR)
	         {
	             responseR = textR;
	         }

	});	
	
	var responseG = '';
	$.ajax({ type: "GET",   
	         url: fileG,   
	         async: false,
	         success : function(textG)
	         {
	             responseG = textG;
	         }

	});	
	
	var responseB = '';
	$.ajax({ type: "GET",   
	         url: fileB,   
	         async: false,
	         success : function(textB)
	         {
	             responseB = textB;
	         }

	});	
	
	var linesR = responseR.split("\n");
	var linesG = responseG.split("\n");
	var linesB = responseB.split("\n");
	len = linesR.length;
 	for (var i = 0; i < len; i++) {
	    vars['valR' + i] = (linesR[i]);
	    vars['valG' + i] = (linesG[i]);
	    vars['valB' + i] = (linesB[i]);
	}
});

var i;
var x;
var move; 
var ypos;
function setup() {
	move = len;
	i = 0;
	ypos = 1;
 	createCanvas(windowWidth, windowHeight * 5);
 	ellipseMode(RADIUS);
 	colorMode(RGB, 3.6);
	console.log(move);
 }

 function draw() {
	i++

	 if (vars['valR' + i] !== undefined){
	 	fill(vars['valR' + i], vars['valG' + i], vars['valB' + i]);
		noStroke();
	 	ellipse(0+i, windowHeight/2, 10, 10);
	 }

 }