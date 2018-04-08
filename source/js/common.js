window.onload = function () {

    // var btnPrev = document.querySelector('#gallery .buttons .prev'),
    //     btnNext = document.querySelector('#gallery .buttons .next'),
    //     images = document.querySelectorAll('#gallery .photos img'),
    //     i = 0,
    //     callbackCounter = 0;

    // btnPrev.onclick = prev;

    // btnNext.onclick = next;

    // var testInterval = setInterval(next, 1000);

    // function next() {
    //     listNext(testCallback);
    // }

    // function prev() {
    //     images[i].className = '';
    //     i--;
    //     if (i < 0) i = images.length - 1;
    //     images[i].className = 'showed';
    // }

    // function listNext(f) {
    //     var callback = f || function () {};
    //     images[i].className = '';
    //     i++;
    //     if (i > images.length - 1) {
    //         i = 0;
    //         callback();
    //     }
    //     images[i].className = 'showed';
    // }

    // function testCallback() {
    //     callbackCounter++;
    //     console.log("Hello from callback " + callbackCounter + " !")
    // }

    var images = document.querySelectorAll('.gallery-1 .photos img');

    var slider1 = new Slider(images);

    document.querySelector('.gallery-1 .buttons .prev').onclick = function () {
        slider1.prev();
    };
    document.querySelector('.gallery-1 .buttons .next').onclick = function () {
        slider1.next();
    };

    var testInterval = setInterval(next, 1000);

    function next() {
        slider1.next();
    }

    var images2 = document.querySelectorAll('.gallery-2 .photos img');
    var slider2 = new Slider(images2);

    document.querySelector('.gallery-2 .buttons .prev').onclick = function () {
        slider2.prev();
    };
    document.querySelector('.gallery-2 .buttons .next').onclick = function () {
        slider2.next();
    };

    function Slider(images) {
        this.images = images;
        this.i = 0
        this.prev = function () {
            this.images[this.i].classList.remove('showed');
            this.i--;
            if (this.i < 0) {
                this.i = this.images.length - 1;
            }
            this.images[this.i].classList.add('showed');
        }
        this.next = function () {
            this.images[this.i].classList.remove('showed');
            this.i++;
            if (this.i >= this.images.length) {
                this.i = 0;
            }
            this.images[this.i].classList.add('showed');
        }
    }
}