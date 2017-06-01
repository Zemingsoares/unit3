$(document).ready(function(){
    $("#fineartBTN").on({
        mouseenter: function(){
            var x = $("#fineartexplanation").text()
            responsiveVoice.speak(x)
            $("#fineartexplanation").show();
        },
        // mouseleave: function(){
        //     responsiveVoice.cancel();
        // }
    })
})