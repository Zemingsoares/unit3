
	var vars = {};
	var len;
	var len2;
	var len3;

$(document).ready(function(){
	var file = "moondata.txt";
	var file2 = "moondata_two.txt";
	var file3 = "moondata_three.txt";
	
	var response = '';
	$.ajax({ type: "GET",   
	         url: file,   
	         async: false,
	         success : function(text)
	         {
	             response = text;
	         }

	});	
	
	var response2 = '';
	$.ajax({ type: "GET",   
	         url: file2,   
	         async: false,
	         success : function(text)
	         {
	             response2 = text;
	         }

	});	
	
	var response3 = '';
	$.ajax({ type: "GET",   
	         url: file3,   
	         async: false,
	         success : function(text)
	         {
	             response3 = text;
	         }

	});	
	
	var lines = response.split("\n");
	var lines2 = response2.split("\n");
	var lines3 = response3.split("\n");
	len = lines.length;
	len2 = lines2.length;
	len3 = lines3.length;
 	for (var i = 0; i < len; i++) {
	    vars['val1' + i] = (lines[i])*100;
	    vars['val2' + i] = (lines2[i])*100;
	    vars['val3' + i] = (lines3[i])*100;

		if (vars['val1' + i] > 100){
			vars['val1' + i] = vars['val1' + i]/10;
		}

		if (vars['val1' + i] > 1000){
			vars['val1' + i] = vars['val1' + i]/100;
		}

		if (vars['val2' + i] > 100){
			vars['val2' + i] = vars['val2' + i]/10;
		}

		if (vars['val2' + i] > 1000){
			vars['val2' + i] = vars['val2' + i]/100;
		}

		if (vars['val3' + i] > 100){
			vars['val3' + i] = vars['val3' + i]/10;
		}

		if (vars['val3' + i] > 1000){
			vars['val3' + i] = vars['val3' + i]/100;
		}
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
 	createCanvas(windowWidth, windowHeight, WEBGL);
 	// ellipseMode(RADIUS);
 	colorMode(RGB, 150);
 }

 function draw() { 
  pointLight(200, 200, 200, 50, 50, 0);
  pointLight(0, 0, 0, -50, -50, 0);

	// i++;

	// if (i > len){
	// 	duck();
	// }

	// if (i <= len){
		goose();
	// }
 }

 function goose() {
	 if (vars['val' + ypos + i] !== undefined){
		for(i; i<=len; i++){
		translate((i/10)-10, 0, 0);
		sphere(vars['val' + ypos + i]);
	}
	 }
	//  move = len;
 }

//  function duck() {
// 	 move--
// 	 if (vars['val' + ypos + move] !== undefined){
// 	 	fill(vars['val' + ypos + move]);
// 		noStroke();
// 	 	ellipse((windowWidth-(len*2))/2+i, windowHeight/5*ypos, vars['val' + ypos + move], vars['val' + ypos + move]);
// 	 }
// 	 if (move < 0){
// 		 i = 0;
// 		 ypos++;
// 	 }
//  }
