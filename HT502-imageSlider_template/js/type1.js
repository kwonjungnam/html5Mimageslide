//active class loop
//function : 함수, method
//변수variable : 데이터 저장 공간

$(document).ready(function(){

    var $items = $("#slider ul .item");
    console.log($items);

    var currentIndex=0;

    //시간 지연 함수
    setInterval(function(){
        if(currentIndex > 2){
            currentIndex=0
        }
        
        $items.removeClass("active");
        $items.eq(currentIndex++).addClass("active");
        console.log(currentIndex);
    },2000);
});