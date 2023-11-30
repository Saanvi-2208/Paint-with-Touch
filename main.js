
var lastx;
var lasty;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
width=1;
deviceWidth=screen.width;
newWidth=screen.width-70;
newHeight=screen.height-200;
if (deviceWidth<992)
{
    document.getElementById("myCanvas").width=newWidth;
    document.getElementById("myCanvas").height=newHeight;
    document.body.style.overflow="hidden";
}
canvas.addEventListener("touchstart",mytouchstart);
function mytouchstart(e)
{
    color=document.getElementById("colour").value;
    width=document.getElementById("width").value;
    lastx=e.touches[0].clientX-canvas.offsetLeft;
    lasty=e.touches[0].clientY-canvas.offsetTop;
}
canvas.addEventListener("touchmove",mytouchmove);
function mytouchmove(e)
{
    currentx=e.touches[0].clientX-canvas.offsetLeft;
    currenty=e.touches[0].clientY-canvas.offsetTop;
    
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(lastx,lasty);
        ctx.lineTo(currentx,currenty);
        ctx.stroke();
    lastx=currentx;
    lasty=currenty;

}
function clearArea()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
}
