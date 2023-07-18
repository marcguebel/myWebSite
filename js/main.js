$( document ).ready(function() {
    $("#left").resizable({
        resize: function(){
            if($(window).width()<=1250){
                $('#right').height($("#container").height()-$("#left").height()); 
            } else {
                $('#right').width($("#container").width()-$("#left").width()); 
            }
        }
    });
    $(window).resize(function(){
        $('#right').width($("#container").width()-$("#left").width()); 
    });
});