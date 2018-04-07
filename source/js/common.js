window.onload = function () {

    var btnPrev = document.querySelector('#gallery .buttons .prev'),
        btnNext = document.querySelector('#gallery .buttons .next'),
        images = document.querySelectorAll('#gallery .photos img'),
        i = 0,
        callbackCounter = 0;

    btnPrev.onclick = prev;

    btnNext.onclick = next;

    var testInterval = setInterval(next, 2000);

    function next() {
        listNext(testCallback);
    }

    function prev() {
        images[i].className = '';
        i--;
        if (i < 0) i = images.length - 1;
        images[i].className = 'showed';
    }

    function listNext() {
        images[i].className = '';
        i++;
        if (i > images.length - 1) {
            i = 0;
            testCallback();
        }
        images[i].className = 'showed';
    }

    function testCallback() {
        callbackCounter++;
        console.log("Hello from callback " + callbackCounter + "!")
    }

}