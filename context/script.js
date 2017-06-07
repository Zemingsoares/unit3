$(document).ready(function(){
    var i = 0;
    var x = $(".mySlides");

    x.hide();
    x.eq(i).show();

    $("#next").on({
        click: function(){
            i++;
            if( i >= x.length ){
                i = 0;
            }
            var url = x.eq(i).attr("src")
            x.hide();
            x.eq(i).show();
            $(".figure").children().css("background-image", "url(inverted_" + url + ")");
        }
    })
    $("#prev").on({
        click: function(){
            i--;
            if( i < 0 ){
                i = x.length-1;
            }
            var url = x.eq(i).attr("src")
            x.hide();
            x.eq(i).show();
            $(".figure").children().css("background-image", "url(inverted_" + url + ")");
        }
    })
        
    var widthMeasure = $(".mySlides").filter( function() {
                             return $(this).css("display") !== "none";
                           }).width();
    var vw = window.innerWidth/100;
    var vh = window.innerHeight/100;
    var bgIMG = $(".mySlides").filter( function() {
                           return $(this).css("display") !== "none";
                         }).attr("src");
                         console.log("inverted_" + bgIMG)
    $(".figure").width(widthMeasure/2)
    $("#next").css("left", widthMeasure/2)
    $("#cv").toggleClass("slideOut cv");
    $(".figure").children().css("background-image", "url(inverted_" + bgIMG + ")")
                           .css("background-size", widthMeasure + "px");

    $(".figure").on({
      click: function(){
        var slide = $(".mySlides").filter( function() {
                         return $(this).css("display") !== "none";})
        widthMeasure = slide.width();
        heightMeasure = slide.height();
        bgIMG = slide.attr("src");
        var num = slide.data("num");
        var slidelen = $(".mySlides").length;
        $("#number").text(num + "/" + slidelen)
        $(".figure").width(widthMeasure/2);
        $("#next").css("left", widthMeasure/2);
      },
      mousemove: function(e){
        $(this).children().css("display", "block");
        $("#prev").children().css("left", (e.pageX - (vw*50)) + "px")
                             .css("background-position", (-(e.pageX - (vw*50))) + "px" + " " + (-(e.pageY - (vh*10))) + "px")
                             .css("background-size", widthMeasure + "px");
        $("#next").children().css("left", (e.pageX - (vw*50) - widthMeasure/2) + "px")
                             .css("background-position", -(e.pageX - (vw*50)) + "px" + " " + (-(e.pageY - (vh*10))) + "px")
                             .css("background-size", widthMeasure + "px");
        $(this).children().css("top", (e.pageY - (vh*10)) + "px");
      },
      mouseleave: function(){
        $(".figure").children().hide();
      }
  })

})
