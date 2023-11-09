document.addEventListener('DOMContentLoaded', () => {

    const swiper = new Swiper('.swiper', {
        slidesPerView: 1,
        breakpoints: {
            576: {
                slidesPerView: 2
            }
        },
        updateOnWindowResize: true,
        loop: true,
        keyboard: true,
        navigation: {
           nextEl: '.swiper-button-next',
           prevEl: '.swiper-button-prev'
       }
    });

    const userReviewTextArr = document.querySelectorAll('.reviews__user_review');

    userReviewTextArr.forEach(review => {
            if(review.textContent.length > 537)  {
            review.textContent = review.textContent.slice(0, 510) + '...';
        }
    });

    const setParentHeight = (selector, parentSelector) => {
        selector = document.querySelector(selector);
        parentSelector = document.querySelector(parentSelector);

        if (selector.clientHeight > parentSelector.clientHeight) {
            setTimeout(() =>{parentSelector.style.height = `calc(${selector.clientHeight + 'px - 9.8rem' })`}, 1000)
        }
    }

    setParentHeight('.subscr_form__wrapper', '#subscr_form__container')

});