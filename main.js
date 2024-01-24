var mouseEvent = "empty";
var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");

var color;
var width;

canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e){
    color = document.getElementById("k").value;
    console.log(color);
    width = document.getElementById("j").value;
    console.log(width);


    mouseEvent = "mouseDown";
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e){
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e){
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e){
     var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
     var current_position_of_mouse_y = e.clientY - canvas.offsetTop;

     if (mouseEvent == "mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.moveTo(last_position_of_x,last_position_of_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
     }

     last_position_of_x = current_position_of_mouse_x
     last_position_of_y = current_position_of_mouse_y
}

canvas.addEventListener("touchmove",my_touchmove);

function my_touchmove(e){
    var current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
    var current_position_of_touch_y = e.touches[0].clientX- canvas.offsetTop;

    
       ctx.beginPath();
       ctx.strokeStyle = color;
       ctx.lineWidth = width;
       ctx.moveTo(last_position_of_touch_x,last_position_of_touch_y);
       ctx.lineTo(current_position_of_touch_x,current_position_of_touch_y);
       ctx.stroke();
    

      last_position_of_touch_x = current_position_of_touch_x
      last_position_of_touch_y = current_position_of_touch_y
}


     
