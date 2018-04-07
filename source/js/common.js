window.onload = function () {

    var btnPrev = document.querySelector('#gallery .buttons .prev'),
        btnNext = document.querySelector('#gallery .buttons .next'),
        images = document.querySelectorAll('#gallery .photos img'),
        i = 0;

    btnPrev.onclick = prev;

    btnNext.onclick = next;

    setInterval(next, 1000);

    function next() {
        images[i].className = '';
        i++;
        if (i > images.length - 1) i = 0;
        images[i].className = 'showed';
    }

    function prev() {
        images[i].className = '';
        i--;
        if (i < 0) i = images.length - 1;
        images[i].className = 'showed';
    }

}