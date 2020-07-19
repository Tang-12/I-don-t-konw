function waterfall(wrap,box) {
var boxWidth=boxes[0].offsetWidth+20;
var windowwidth=document.documentElement.clientWidth;
var colsNumber=Math.floor(windowwidth/boxWidth);
/*设置容器的宽度*/
    wrap.style.width=boxWidth*colsNumber+'px';
    /*定义一个数组储存每一列的高度*/
    var everheight=new Array();
    for (var i=0;i<=boxes.length;i++) {
        if (i < colsNumber) {
            everHeight[i] = boxes[i].offsetHeight + 20;
        }else {
            var minHeight=Math.min.apply(null,everHeight);
            var minIndex=getindex(minHeight,everheight);
            var leftValue=boxes[minIndex].offsetLeft-10;
            boxes.style.position='absolute';
            boxes.style.top=minHeight +'px';
            boxes.style.left=leftValue +'px';
            everheight[minIndex]+=boxes[i].offsetHeight+20;
        }
    }
}
// 获取最小列数索引
function getindex(minHeight,everheight){
    for (index in everheight){
        if (everheight[index]==minHeight){
            return index;
        }
    }
}
window.onload=function () {
var wrap=document.getElementById('wrap');
var boxes=wrap.getElementsByName('div');
waterfall(wrap,boxes);
}