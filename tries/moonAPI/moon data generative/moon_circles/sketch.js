
	var vars = {};
	var len;
	var len2;
	var len3;

$(document).ready(function(){
	var file = "moondata.txt";
	var file2 = "moondata_two.txt";
	var file3 = "moondata_three.txt";
	var file4 = "moondata_four.txt";
	var file5 = "moondata_five.txt";
	
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
	
	var response4 = '';
	$.ajax({ type: "GET",   
	         url: file4,   
	         async: false,
	         success : function(text)
	         {
	             response4 = text;
	         }

	});	
	
	var response5 = '';
	$.ajax({ type: "GET",   
	         url: file5,   
	         async: false,
	         success : function(text)
	         {
	             response5 = text;
	         }

	});	
	
	var lines = response.split("\n");
	var lines2 = response2.split("\n");
	var lines3 = response3.split("\n");
	var lines4 = response4.split("\n");
	var lines5 = response5.split("\n");
	len = lines.length;
	len2 = lines2.length;
	len3 = lines3.length;
	len4 = lines4.length;
	len5 = lines5.length;
 	for (var i = 0; i < len; i++) {
	    vars['val1' + i] = (lines[i])*100;
	    vars['val2' + i] = (lines2[i])*100;
	    vars['val3' + i] = (lines3[i])*100;
	    vars['val4' + i] = (lines4[i])*100;
	    vars['val5' + i] = (lines5[i])*100;

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

		if (vars['val4' + i] > 100){
			vars['val4' + i] = vars['val4' + i]/10;
		}

		if (vars['val4' + i] > 1000){
			vars['val4' + i] = vars['val4' + i]/100;
		}

		if (vars['val5' + i] > 100){
			vars['val5' + i] = vars['val5' + i]/10;
		}

		if (vars['val5' + i] > 1000){
			vars['val5' + i] = vars['val5' + i]/100;
		}
	}
});

var i;
var x;
var y;
var move; 
var ypos;
function setup() {
	move = len;
	i = 0;
	x = 1;
	y = 1;
	ypos = 1;
 	createCanvas(windowWidth, windowHeight * 5);
 	// ellipseMode(RADIUS);
 	colorMode(RGB, 150);
	console.log(move);
 }

 function draw() {
	i++;

	if (i > len){
		duck();
	}

	if (i <= len){
		goose();
	}

	if (ypos/y > 5){
		x = 0;
		y++;
	}
 }

 function goose() {
	 if (vars['val' + x + i] !== undefined){
	 	fill(vars['val' + x + i]);
		noStroke();
	 	ellipse((windowWidth-(len*2))/2+i, windowHeight/5*ypos, vars['val' + x + i], vars['val' + x + i]);
		 console.log(vars['val' + x + i]);
	 }
	 move = len;
 }

 function duck() {
	 move--
	 if (vars['val' + x + move] !== undefined){
	 	fill(vars['val' + x + move]);
		noStroke();
	 	ellipse((windowWidth-(len*2))/2+i, windowHeight/5*ypos, vars['val' + x + move], vars['val' + x + move]);
	 }
	 if (move < 0){
		 i = 0;
		 ypos++;
		 x++;
	 }
 }
