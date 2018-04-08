window.onload = function () {
    var slider3 = new Slider({
        images: document.querySelectorAll('.gallery-1 .photos img'),
        btnPrev: document.querySelector('.gallery-1 .buttons .prev'),
        btnNext: document.querySelector('.gallery-1 .buttons .next'),
        auto: true
    });

    function Slider(params) {
        this.images = params.images;
        this.btnPrev = params.btnPrev;
        this.btnNext = params.btnNext;
        this.auto = params.auto;

        var imgContainer = this.images,
            i = 0;

        this.prev = function () {
            imgContainer[i].classList.remove('showed');
            i--;
            if (i < 0) {
                i = imgContainer.length - 1;
            }
            imgContainer[i].classList.add('showed');
        }
        this.next = function () {
            imgContainer[i].classList.remove('showed');
            i++;
            if (i >= imgContainer.length) {
                i = 0;
            }
            imgContainer[i].classList.add('showed');
        }

        var nextF = this.next,
            prevF = this.prev;

        this.btnNext.onclick = nextF;
        this.btnPrev.onclick = prevF;
    }
}