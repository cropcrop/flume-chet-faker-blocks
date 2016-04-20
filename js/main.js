'user strict';

$(document).ready(function(){

  /* Define speed on mouse move */
  var stepsX = 50,
      stepsY = 80;

  /* Mousemove event */
  $(document).mousemove(function (event) {

    var percentWidth = event.pageX / $(document).width();
    var percentHeight = event.pageY / $(document).height();

    var moveX = ((percentHeight - 0.5) * stepsX) - 26;
    var moveY = ((percentWidth - 0.5) * stepsY) + 36;

    $('.scene').css("transform", "rotateX(" + moveX + "deg) rotateY(" + moveY + "deg)");

  });

});
