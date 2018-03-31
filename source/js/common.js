var text = document.querySelector('#text'),
    selectP = document.querySelector('p'),
    trigger = true;

console.log(selectP)
text.innerHTML += ' hello again!!!'

selectP.onclick = function(){
    if (trigger) {
        selectP.innerHTML = 'clicked!';
        trigger = false;
    } else {
        selectP.innerHTML = 'clicked again!';
        trigger = true;
    }
    
}


text.onclick = function () {
    if (trigger) {
        text.style.color = 'red';
        trigger = false;
    } else {
        text.style.color = 'green';
        trigger = true;
    }
}