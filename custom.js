let content = document.getElementsByClassName('content');
let slide = document.getElementById('slide');
let mobile = document.getElementById('mobile');
let extend = document.getElementsByClassName('extends');
let des = document.getElementsByClassName('des');
let image_src = [];
const slide_width = $(window).width();
const baseUrl = './images/slide/s';
let index = 0;

for (let i=1; i<7; i++) {
    image_src.push(baseUrl+i+'.jpg');
}
slide.src = image_src[0];
$(slide).css({
    height: (9/21) * slide_width + 'px'
});
slide.src = image_src[0];
// $(content[1]).css({
//     display: 'none'
// });
start=()=>{
    $(content[0]).css({
        display: 'none'
    });

    $(content[1]).css({
        display: 'block'
    });
}

mobile.addEventListener('click', ()=>{
    if (index == 0){
        index++;
        $(extend[0]).css({
            display: 'block'
        });
    }
    else {
        $(extend[0]).css({
            display: 'none'
        });
        index = 0;
    }
});

function showDes(des_index) {
    let indexDes = des_index.getAttribute('data-des');
    for (let i=0; i<des.length; i++) {
        $(des[i]).css({
            display: 'none'
        });
    }
    $(des[indexDes]).css({
        display: 'block'
    });
}


setInterval(()=>{
    slide.src = image_src[index];
    index++;
    if (index == image_src.length) {
        index = 0;
    }
}, 5000);
