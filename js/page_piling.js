$(document).ready(function() {
    // if($(window).width() < 700) {
    //     return;
    // }

    var pagePilings = $('.page-piling');
    var totalScrollTop = 0; 
    var vh = $(window).height() * 1.25; 
    var touchStartY; 

    $(window).on('wheel', function(e) {

        var scrollDistance = e.originalEvent.deltaY * 0.5;

        updatePagePosition(scrollDistance);
    });

    $(window).on('touchstart', function(e) {
        touchStartY = e.originalEvent.touches[0].clientY;
    });

    $(window).on('touchmove', function(e) {

        var touchEndY = e.originalEvent.changedTouches[0].clientY;
      
        var scrollDistance = (touchStartY - touchEndY) * 0.5;
      
        updatePagePosition(scrollDistance);
        
        touchStartY = touchEndY;
    });

    $('nav a').on('click', function(e) {
        var targetId = $(this).attr('href').slice(1);

        var targetSection = $(`.page-piling#${targetId}`);

        var targetIndex = $('.page-piling').index(targetSection);

        var targetScrollTop = targetIndex * vh;

        updatePagePosition(targetScrollTop - totalScrollTop);

        targetSection.find('.page-content').css('opacity', 1);
    });

    function updatePagePosition(scrollDistance) {
        totalScrollTop += scrollDistance;
 
        totalScrollTop = Math.max(0, Math.min(totalScrollTop, (pagePilings.length-1) * vh));

        var currentIndex = Math.floor(totalScrollTop / vh);

        pagePilings.each(function(index) {
            if (index < currentIndex) {
                $(this).css('transform', `translateY(-${vh}px)`);
                $(this).find('.page-content').css('opacity', 1);
            } else if (index === currentIndex) {
                var ratio = (totalScrollTop - vh * currentIndex) / vh;
                $(this).css('transform', `translateY(-${ratio * vh}px)`);
                var threshold = 0.3;
                var fullOpacityThreshold = 0.6;
                if (index + 1 < pagePilings.length) {
                    var nextOpacity;
                    if (ratio >= fullOpacityThreshold) {
                        nextOpacity = 1;
                    } else {
                        nextOpacity = Math.max(0, (ratio - threshold) / (fullOpacityThreshold - threshold));
                    }
                    $(pagePilings[index + 1]).find('.page-content').css('opacity', nextOpacity);
                }
            } else {
                $(this).css('transform', 'none');
                if (index !== currentIndex + 1) {
                    $(this).find('.page-content').css('opacity', 0);
                }
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





  
  
  
  

