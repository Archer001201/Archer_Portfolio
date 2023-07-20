$(document).ready(function() {
    var pagePilings = $('.page-piling');
    var totalScrollTop = 0;  // 记录滚动的总距离
    var vh = $(window).height() * 1.25;  // 计算视口的高度
    var touchStartY;  // 记录手指触摸开始时的坐标

    $(window).on('wheel', function(e) {
        // e.preventDefault();
      
        // 计算滚动的距离
        var scrollDistance = e.originalEvent.deltaY * 0.5;
      
        // 更新页面的位置
        updatePagePosition(scrollDistance);
    });

    $(window).on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });

    $(window).on('touchmove', function(e) {
        e.preventDefault();

        var touchEndY = e.originalEvent.changedTouches[0].clientY;
      
        // 计算手指在屏幕上的滑动距离，注意我们需要将其乘以一个系数，使其与鼠标滚轮的滚动距离相当
        var scrollDistance = (touchStartY - touchEndY) * 0.5;
      
        // 更新页面的位置
        updatePagePosition(scrollDistance);
        
        touchStartY = touchEndY;  // 将当前的坐标设置为下一次滑动的开始坐标
    });

    function updatePagePosition(scrollDistance) {
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
    }
});


// $(document).ready(function() {
//     var pagePilings = $('.page-piling');
//     var totalScrollTop = 0;  // 记录滚动的总距离
//     var vh = $(window).height();  // 计算视口的高度

//     $(window).on('wheel', function(e) {
//         e.preventDefault();
      
//         // 计算滚动的距离
//         var scrollDistance = e.originalEvent.deltaY;
      
//         // 计算总滚动距离
//         totalScrollTop += scrollDistance;
      
//         // 限制总滚动距离在 0 到 page-pilings 的高度之间
//         totalScrollTop = Math.max(0, Math.min(totalScrollTop, pagePilings.length * vh));
      
//         // 计算当前应该显示的 page-piling 索引
//         var currentIndex = Math.floor(totalScrollTop / vh);
      
//         // 对每个 page-piling，如果它的索引小于 currentIndex，就将其上移满屏；
//         // 如果索引等于 currentIndex，根据滚动距离上移相应的比例；
//         // 如果索引大于 currentIndex，保持在原位
//         pagePilings.each(function(index) {
//             if (index < currentIndex) {
//                 $(this).css('transform', `translateY(-${vh}px)`);
//             } else if (index === currentIndex) {
//                 var ratio = (totalScrollTop - vh * currentIndex) / vh;
//                 $(this).css('transform', `translateY(-${ratio * vh}px)`);
//             } else {
//                 $(this).css('transform', 'none');
//             }
//         });
//     });
// });





  
  
  
  

