var canvas =document.getElementById('canvas')
var ctx= canvas.getContext('2d')
canvas.height=window.innerHeight*0.7
canvas.width=window.innerWidth*2/3

var xMin=-10,yMin=-10,yMax=10,xMax=10,n=200
 var x,y,xMath,xVar,yMath,yVar,i
 
var expression= '',scope={x:0 },
 tree=math.parse(expression)


document.getElementById('btn').addEventListener('click', e=>{
    ctx.clearRect(0,0,canvas.width,canvas.height)
    var graphOf= document.getElementById('function').value
     expression=graphOf
     tree=math.parse(expression)
     graph()
})
document.getElementById('btn1').addEventListener('click', e=>{
    
    var graphOf= document.getElementById('function').value
     expression=graphOf
     tree=math.parse(expression)
     graph()
})


function graph(){
ctx.beginPath();
ctx.moveTo(0, canvas.height/2)
ctx.lineTo(canvas.width,canvas.height/2)
ctx.strokeStyle='red'
ctx.stroke()
ctx.beginPath();
ctx.moveTo(canvas.width/2, 0)
ctx.lineTo(canvas.width/2,canvas.height)
ctx.strokeStyle='red'
ctx.stroke()
ctx.beginPath()
ctx.strokeStyle='green'
for(i=0;i<n;i++){
xVar=i/(n-1)
xMath=xVar*(xMax-xMin)+xMin;

yMath=func(xMath)

yVar=(yMath-yMin)/(yMax-yMin);
yVar=1-yVar
x=xVar*canvas.width
y=yVar*canvas.height
ctx.lineTo(x,y)
} 
ctx.stroke()
}
function func(xMath){
    
    scope.x= xMath
    yMath=tree.evaluate({x:xMath})
    return yMath
}