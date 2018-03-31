var text = document.querySelector('#text'),
    selectP = document.querySelector('p'),
    trigger = true;

// console.log(selectP)
text.innerHTML += ' hello again!!!'

// selectP.onclick = function () {
//     if (trigger) {
//         selectP.innerHTML = 'clicked!';
//         trigger = false;
//     } else {
//         selectP.innerHTML = 'clicked again!';
//         trigger = true;
//     }
// }


text.onclick = function () {
    if (trigger) {
        text.style.fontStyle = 'italic';
        text.className = 'test2';
        trigger = false;
    } else {
        text.style.fontStyle = 'normal';
        trigger = true;
    }
}

function show(obj) {
    var a = '<ul>';
    for (i in obj) {
        a += '<li>' + i +  ': '  + obj[i] + '</li>';
    }
    a += '</ul>';
    return a;
}



selectP.innerHTML = show(text.style);