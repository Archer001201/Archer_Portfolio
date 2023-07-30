$('.carousel-image').click(function(event) {
  event.preventDefault();
});

$('.js-flickity').on( 'settle.flickity', function() {
  let flkty = $(this).data('flickity');
  let $cell = $( flkty.selectedElement );

  $('.carousel-image').removeClass('is-visible move');
  $cell.children('.carousel-image').addClass('is-visible');

  $('.carousel-image').attr('href', 'javascript:void(0)');

  let $img = $cell.find('img');
  let name = $img.data('name');
  let tag = $img.data('tag');
  let date = $img.data('date');
  let comment = $img.data('comment');
  $('.current-image-name').text(name);
  $('.current-image-tag').text(tag);
  $('.current-image-date').text(date);
  $('.current-image-comment').text(comment);

  $cell.children('.carousel-image').on('click', function(event) {
    var targetUrl = $(this).data('target-url');

    $(this).addClass('move');

    $(this).one('webkitAnimationEnd oanimationend msAnimationEnd animationend',   
      function(e) {
        window.location.href = targetUrl;
      }
    );

    $(this).attr('href', targetUrl);
  });
});




