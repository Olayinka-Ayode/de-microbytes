const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const animate = document.getElementById('animate');

$(document).ready(function(){
    $(start).click(function(){
        $(one).fadeIn(500);
        $(two).fadeOut(500);
        $(three).toggle();
        $(four).hide();
        $(five).show();
        $(six).css("background-color", "red");
    });
    $(reset).click(function(){
        $(two).fadeIn(500);
        $(four).show();
        $(six).css("background-color", "black");
        $(one).animate({right: "200"});
        $(two).animate({right: "500"});
        $(three).animate({top: "200"});
        $(three).animate({right: "200"});
        $(four).animate({left: "200"});
        $(four).animate({bottom: "400"});
        $(five).animate({left: "200"});
        $(five).animate({top: "500"});
        $(six).animate({top: "500"});
    });
    $(animate).click(function(){
        $(one).animate({left: "200"});
        $(two).animate({left: "500"});
        $(three).animate({bottom: "200"});
        $(three).animate({left: "200"});
        $(four).animate({right: "200"});
        $(four).animate({top: "400"});
        $(five).animate({right: "200"});
        $(five).animate({bottom: "500"});
        $(six).animate({bottom: "500"});
    });
$("p").on("click",function(){
    $(this).hide();
})
$("button").click(function(){
$("p").show();
});
$(".rand-div").focus(function(){
    $(this).css("background", "green");
})
$(".rand-div").blur(function(){
    $(this).animate({top: 300});
    $(this).css("background", "white");
})
$(".lorem").click(function(){
    $(this).offset({left: 200})
})
$(".t-button").click(function(){
    $("li").each(function(){
        alert($(this).text())
    });
});
})