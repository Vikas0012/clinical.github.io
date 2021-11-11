$(document).ready(function(){
    $(".cardiology").click(function(){
        $(".cardiology").css("color","#FF70D4")
        $(".neurology").css("color", "#5c5858");
        $(".dental").css("color", "#5c5858");
        $(".card1").fadeIn();
        $(".neuro1").fadeOut();
        $(".dent1").fadeOut();
    })
    $(".neurology").click(function(){
        $(".cardiology").css("color", "5c5858");
        $(".neurology").css("color", "#FF70D4");
        $(".dental").css("color", "#5c5858");
        $(".card1").fadeOut();
        $(".neuro1").fadeIn();
        $(".dent1").fadeOut();
    })
    $(".dental").click(function(){
        $(".dental").css("color", "#FF70D4");
        $(".neurology").css("color", "#5c5858");
        $(".cardiology").css("color", "5c5858");
        $(".card1").fadeOut();
        $(".neuro1").fadeOut();
        $(".dent1").fadeIn();
    })

    $(".list").hover(function(){
        $(this).css("color","pink");
        $(".list").not(this).css("color","black")
    })
   $(".video").click(function(){
       $(".main").fadeToggle(100);
   })
   $(".bar1").click(function(){
       $(".hide_show").fadeIn(100);
   })
   $(".wrong").click(function(){
       $(".hide_show").fadeOut(100);
   })
})