let brandBlock = document.querySelector('.container');
let openBrands = document.querySelector('.view');
let closeBrands = document.querySelector('.hide-button');

openBrands.addEventListener('click', function() {
    brandBlock.classList.toggle('h-160');
    openBrands.classList.remove('view');
    openBrands.classList.add('hide-button');
    closeBrands.classList.remove('hide-button');
    closeBrands.classList.add('close');
})

closeBrands.addEventListener('click', function() {
    brandBlock.classList.toggle('h-160');
    closeBrands.classList.remove('close');
    closeBrands.classList.add('hide-button');
    openBrands.classList.remove('hide-button');
    openBrands.classList.add('view');
})

new Swiper('.brands', {
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});
