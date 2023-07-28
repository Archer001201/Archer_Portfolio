// let currentImageIndex = 2;
// const images = Array.from(document.querySelectorAll('.carousel-image'));
// const carousel = document.querySelector('.carousel-images');
// const prevButton = document.querySelector('.carousel-button-prev');
// const nextButton = document.querySelector('.carousel-button-next');
// const currentName = document.querySelector('.current-image-name');
// const currentTag = document.querySelector('.current-image-tag');
// const currentDate = document.querySelector('.current-image-date');

// function updateCarousel() {
//     carousel.style.transform = `translateX(-${currentImageIndex * 300}px)`;
//     carousel.querySelectorAll('.carousel-image').forEach((image, index) => {
//         if (index === currentImageIndex + 1) {
//             image.classList.add('center');
//         } else {
//             image.classList.remove('center');
//         }
//     });
//     currentName.textContent = images[currentImageIndex + 1].querySelector('.image-name').textContent;
//     currentTag.textContent = images[currentImageIndex + 1].querySelector('.image-tag').textContent;
//     currentDate.textContent = images[currentImageIndex + 1].querySelector('.image-date').textContent;
// }

// updateCarousel();

// prevButton.addEventListener('click', () => {
//     if (currentImageIndex > 1) {
//         currentImageIndex--;
//     } else {
//         carousel.style.transition = 'none';
//         currentImageIndex = images.length - 3;
//     }
//     setTimeout(updateCarousel, 0);
//     setTimeout(() => { carousel.style.transition = ''; }, 0);
// });

// nextButton.addEventListener('click', () => {
//     if (currentImageIndex < images.length - 3) {
//         currentImageIndex++;
//     } else {
//         carousel.style.transition = 'none';
//         currentImageIndex = 1;
//     }
//     setTimeout(updateCarousel, 0);
//     setTimeout(() => { carousel.style.transition = ''; }, 0);
// });

// images.forEach(function (link) {
//     link.addEventListener('click', function (event) {
//         event.preventDefault();
//         link.classList.add('move');
//         link.addEventListener('animationend', function () {
//             link.classList.remove('move');
//             window.location.href = link.href;
//         }, { once: true });
//     });
// });

$('.js-flickity').on( 'settle.flickity', function() {
    let flkty = $(this).data('flickity');  // 获取 Flickity 实例
    let $cell = $( flkty.selectedElement );  // 获取当前选中的单元格
  
    $('.carousel-image').removeClass('is-visible');  // 从所有图片上移除 "is-visible" 类
    $cell.children('.carousel-image').addClass('is-visible');  // 给当前可见的图片添加 "is-visible" 类
  });
  