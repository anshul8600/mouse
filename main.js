var mouseevent="";
var lastX="";
var lastY="";
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="red";
width=2;
canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
color=document.getElementById("color").value;
width=document.getElementById("width").value;
mouseevent="mousedown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
currentX=e.clientX-canvas.offsetLeft;
currentY=e.clientY-canvas.offsetTop;
if(mouseevent=="mousedown"){
ctx.beginPath();
ctx.strokeStyle=color;
ctx.lineWidth=width;
ctx.moveTo(lastX,lastY);
ctx.lineTo(currentX,currentY);
ctx.stroke();
}
lastX=currentX;
lastY=currentY;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
mouseevent="mouseup";

}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
mouseevent="mouseleave";

}
function cleararea()
{ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);}
