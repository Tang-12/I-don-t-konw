var waterfall=function(wrap,boxes){
//    获取屏幕可以显示的列数
    var boxwidth=boxes.eq(0).width()+40;
    var windowwidth=$(window).width();
    var colsNumber=Math.floor(windowwidth / boxwidth);
//    设置容器的宽度
    wrap.style.width(boxwidth*colsNumber);
//    定义一个数组储存每一列的高度
    var everHeight=new Array();
    for (var i=0;i<=boxes.length;i++){
        if (i<colsNumber){
            everHeight[i]=boxes[i].height()+40;
        }else {
            var minHeight=Math.min.apply(null,everHeight);
            var minIndex=getindex(minHeight,everHeight);
            boxes.eq(i).css({
                'position':'absolute',
                'top':minHeight,
                'left':boxes.eq(minIndex).position().left,
                'opactity':'0'
            }).stop().animate({
                'opactity':'1'
            },1000)
            everHeight[minIndex]+=boxes.eq[i].height()+40;
        }
    }
}
//获取最小列的索引
function getIndex(minHeighr,everHeight){
    for (index in everHeight){
        if (everHeight[index]==minHeight){
            return index;
        }
    }
}
$(document).ready(function(event) {
    var wrap=$('#wrap');
    var boxes=$('#wrap').children('div');
    waterfall(wrap,boxes);
});