var btnPrev = document.querySelector('#gallery .buttons .prev'),
    btnNext = document.querySelector('#gallery .buttons .next'),
    images = document.querySelectorAll('#gallery .photos img'),
    i = 0;

// console.log(images);

btnPrev.onclick = function () {
    images[i].style.display = 'none';
    i--;
    if (i < 0) i = images.length - 1;
    // if (i > images.length - 1) i = 0;
    images[i].style.display = 'block';
}

btnNext.onclick = function () {
    images[i].style.display = 'none';
    i++;
    if (i > images.length - 1) i = 0;
    images[i].style.display = 'block';


}