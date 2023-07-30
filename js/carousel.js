// 首先，阻止所有链接的默认行为
$('.carousel-image').click(function(event) {
  event.preventDefault();
});

$('.js-flickity').on( 'settle.flickity', function() {
  let flkty = $(this).data('flickity');  // 获取 Flickity 实例
  let $cell = $( flkty.selectedElement );  // 获取当前选中的单元格

  $('.carousel-image').removeClass('is-visible move');  // 从所有图片上移除 "is-visible" 和 "move" 类
  $cell.children('.carousel-image').addClass('is-visible');  // 给当前可见的图片添加 "is-visible" 类

  // 为所有链接设置一个空的 href
  $('.carousel-image').attr('href', 'javascript:void(0)');

  // 更新文本内容
  let $img = $cell.find('img');
  let name = $img.data('name');
  let tag = $img.data('tag');
  let date = $img.data('date');
  $('.current-image-name').text(name);
  $('.current-image-tag').text(tag);
  $('.current-image-date').text(date);

  // 给当前可见的图片链接添加点击事件监听器
  $cell.children('.carousel-image').on('click', function(event) {
    var targetUrl = $(this).data('target-url');  // 获取链接的目标URL，这应该是你在 data-target-url 属性中设置的

    $(this).addClass('move');  // 添加动画类

    // 监听动画结束事件
    $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
      function(e) {
        window.location.href = targetUrl;  // 在动画结束后跳转到目标URL
      }
    );

    // 重新设置 href 以便在动画结束后可以跳转
    $(this).attr('href', targetUrl);
  });
});




