// var btn = document.getElementById('show');
//
//
// btn.addEventListener('click', function() {
//     nav.classList.toggle('active');
// });


$(document).ready(function() {
  $("[data-toggle]").click(function() {
    var toggle_el = $(this).data("toggle");
    $(toggle_el).toggleClass("active");
  });

});

$(".swipe-area").swipe({
    swipeStatus:function(event, phase, direction, distance, duration, fingers)
        {
            if (phase=="move" && direction =="right") {
                 $(".navigation").addClass("active");
                 $(".swipe-area").addClass("active");
                 return false;
            }
            if (phase=="move" && direction =="left") {
                 $(".navigation").removeClass("active");
                 $(".swipe-area").removeClass("active");
                 return false;
            }
        }
});
