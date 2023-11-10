document.addEventListener('DOMContentLoaded', () => {

    const screenWidth = {
        xl: 1400,
        l: 1200,
        m: 992,
        s: 576
    }

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

        document.documentElement.clientWidth > screenWidth.m ?
            parentSelector.style.height = `calc(${selector.clientHeight + 'px - 9.8rem' })` :
            document.documentElement.clientWidth >= screenWidth.s ?
                parentSelector.style.height = `calc(${selector.clientHeight + 'px + -4.4rem' })` :
                parentSelector.removeAttribute('style');
    }

    setTimeout(()=> {setParentHeight('.subscr_form__wrapper', '#subscr_form__container')}, 1000)

    window.addEventListener('resize', () => {
        setParentHeight('.subscr_form__wrapper', '#subscr_form__container');
    });

});