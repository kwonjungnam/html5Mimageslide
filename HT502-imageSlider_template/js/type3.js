//stop loop with mouse over slide(event)

$(document).ready(function() {
    // $("#slider ul li").eq(1).hide();
    // $("#slider ul li").eq(2).hide();

    $("#slider ul li").eq(1).hide().next().hide();

    var loop;

    function start(){
        loop=setInterval(function(){
            $('#slider ul li').eq(0)
            .fadeOut(2000)
            .next()
            .fadeIn(1000)
            .end()
            .appendTo($('#slider ul'));
        },3000);
    }
    function stop(){
        clearInterval(loop);
    }
    start();

    $("#slider ul li").hover(function(){
        stop();
    }, function(){
        start();
    });

});