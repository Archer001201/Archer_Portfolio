$(document).ready(function() {
    var pagePilings = $('.page-piling');
    var totalScrollTop = 0;  // 记录滚动的总距离
    var vh = $(window).height() * 1.25;  // 计算视口的高度

    $(window).on('wheel', function(e) {
        // e.preventDefault();
      
        // 计算滚动的距离
        var scrollDistance = e.originalEvent.deltaY*0.5;
      
        // 计算总滚动距离
        totalScrollTop += scrollDistance;
      
        // 限制总滚动距离在 0 到 page-pilings 的高度之间
        totalScrollTop = Math.max(0, Math.min(totalScrollTop, pagePilings.length * vh));
      
        // 计算当前应该显示的 page-piling 索引
        var currentIndex = Math.floor(totalScrollTop / vh);
      
        // 对每个 page-piling，如果它的索引小于 currentIndex，就将其上移满屏；
        // 如果索引等于 currentIndex，根据滚动距离上移相应的比例；
        // 如果索引大于 currentIndex，保持在原位
        pagePilings.each(function(index) {
            if (index < currentIndex) {
                $(this).css('transform', `translateY(-${vh}px)`);
            } else if (index === currentIndex) {
                var ratio = (totalScrollTop - vh * currentIndex) / vh;
                $(this).css('transform', `translateY(-${ratio * vh}px)`);
            } else {
                $(this).css('transform', 'none');
            }
        });
    });
});



  
  
  
  

