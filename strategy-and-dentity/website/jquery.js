$(document).ready(function(){
    var h = window.innerHeight;
    var vw = window.innerWidth/100;
    console.log(h);
    var dis = 1;
    var next = 2;
    var prev = 0;

    for (i = 0; i <=10; i++){
        $("#scaleInput").append("<div id='thick" + i + "'></div>");
        $("#thick" + i).css("position", "absolute") 
                       .css("margin-left", (60*vw-5)/10*i + "px")
                       .css("background", "black")
                       .css("width", "5px")
                       .css("height", "100%");
    }

    for (j = 0; j <= 50; j++){
        $("#scaleInput").append("<div id='thin" + j + "'></div>");
        $("#thin" + j).css("position", "absolute") 
                      .css("margin-left", (60*vw-5)/50 * j + "px")
                      .css("background", "black")
                      .css("width", "2px")
                      .css("height", "50%");
    }
    $($("#imgslideshow > img").get(dis-1)).addClass("slideInbg");
    setInterval(function(){
        console.log(next + "<" + dis + "<" + prev)
        $($("#imgslideshow > img").get(next)).removeClass("slideInbg").removeClass("slideOutbg");
        $($("#imgslideshow > img").get(dis)).addClass("slideInbg");
        $($("#imgslideshow > img").get(prev)).removeClass("slideInbg").addClass("slideOutbg");
        dis++;
        next++;
        prev++;
        if(dis > 9){
            dis = 0;
        }

        if(next > 9){
            next = 0;
        }

        if(prev > 9){
            prev = 0;
        }
    }, 5000);

    $("#scaleInput").on({
        click: function(e){
            var value = e.pageX - (20*vw)
            var weight = (Math.round(value / (0.8*vw-0.2*vw)))/10;
            var price =((Math.round(value / (0.8*vw-0.2*vw)))/10)*4;
            var amount = Math.round((value / (0.008*vw-0.002*vw))/225);
            if ( e.pageX > 20 * vw) {
                if ( e.pageX < 80*vw ){
                var barsize = $("#scaleInput").width()/10;
                $("#slider").css("left", (barsize * weight) - 0.5*vw+ "px");
                $("#weight").text(weight + "Kg = " + price + "£ = " + amount + " T-shirts");
                }
            }
        }
    })
    
    $("#placeholder").show();

    $(".icondiv").on({
        mouseenter: function(){
            var thisid = $(this).attr("id");
            var target = $(this).data("target");
            $("#" + target).show();
            $("#placeholder").hide();
            $("#" + thisid + " > p").show();
            $("#" + thisid + " > img").hide();
        }
    })

    $(".icondiv").on({
        mouseleave: function(){
            var thisid = $(this).attr("id");
            var target = $(this).data("target");
            $("#" + target).hide();
            $("#" + thisid + " > p").hide();
            $("#placeholder").show();
            $("#" + thisid + " > img").show();
        }
    })

    $.fn.scrollStopped = function(callback) {
      $(this).scroll(function(ev) {
        clearTimeout($(this).data('scrollTimeout'));
        $(this).data('scrollTimeout', setTimeout(callback.bind(this), 250, ev));
      });
    };

    $("#menuBTN1").on({
        click: function(){
          $(".slideOutMenu").addClass("slideInMenu").removeClass("slideOutMenu");
          $("#menuBTN1").hide();
          $("#menuBTN2").show();
        }
    });
  
    $("#menuBTN2").on({
        click: function(){
            $(".slideInMenu").addClass("slideOutMenu").removeClass("slideInMenu");
            $("#menuBTN2").hide();
            $("#menuBTN1").show();
        }
    });
    
    var currentScrollTop, temporalScroll = 0;
    var scrollDirection = 0;
    $("#pagecontainer").scroll(function(){
        currentScrollTop = $(this).scrollTop();

        if (currentScrollTop > temporalScroll) {
            scrollDirection = -1;
        }
        else { 
            scrollDirection = 1;
        }
        temporalScroll = currentScrollTop;
    });

    $( window ).resize(function() {
        vw = window.innerWidth/100;
        for (i = 0; i <=10; i++){
            $("#thick" + i).css("position", "absolute") 
                           .css("margin-left", (60*vw-5)/10*i + "px")
                           .css("background", "black")
                           .css("width", "5px")
                           .css("height", "100%");
        }

        for (j = 0; j <= 50; j++){
            $("#thin" + j).css("position", "absolute") 
                          .css("margin-left", (60*vw-5)/50 * j + "px")
                          .css("background", "black")
                          .css("width", "2px")
                          .css("height", "50%");
        }

        h = window.innerHeight;
        console.log(h)
        var i = $("#pagecontainer").scrollTop();
        if(i > 0){
            var a = setInterval(function() {
                $("#pagecontainer").scrollTop(i)
                i++
                if ( i >= h){
                    console.log(i + "<" + h)
                    $("#pagecontainer").scrollTop(i)
                    clearInterval(a);
                }
            }, 10);
        }
    });

    $(".questions").on({
        click: function(){
            var target = $(this).data("target");
            $(".answer").hide();
            $("#answer" + target).show();
        }
    })

    $("#submit").on({
        click: function(){
            $("table").show();
        }
    })

    $("#loginmn").on({
        click: function(){
            $("#loginform").show();
        }
    })

    $("#pagecontainer").scrollStopped(function(){
           var i = $("#pagecontainer").scrollTop();
           var j = Math.round(i/h - 0.5);
           var y = j + 1;

           if(i > h * j && i < h * y){
               console.log(i + "<" + h)
               var b = setInterval(function() {
                   if( scrollDirection == -1 ){
                       var c = setInterval(function() {
                           $("#pagecontainer").scrollTop(i)
                           i++
                           if (i > h * y){
                               $("#pagecontainer").scrollTop(h * y)
                               clearInterval(c);
                               clearInterval(b);
                           }
                       }, 10);
                   } else if( scrollDirection == 1 ){
                       var d = setInterval(function() {
                           $("#pagecontainer").scrollTop(i)
                           i--
                           if ( i < h * j){
                               $("#pagecontainer").scrollTop(h * j)
                               clearInterval(d);
                               clearInterval(b);
                           }
                       }, 10);
                   }
               }, 10);
           }
       });
    
});

    