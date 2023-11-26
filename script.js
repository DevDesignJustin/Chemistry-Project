const upbtn = document.getElementById("up");
const downbtn = document.getElementById("down")
const learn = document.getElementById("learn")
const left1 =  document.getElementById('left-1')
const left2 =  document.getElementById('left-2')
const left3 =  document.getElementById('left-3')
const left4 =  document.getElementById('left-4')
const left5 =  document.getElementById('left-5')
const left6 =  document.getElementById('left-6')
const right = document.getElementById('right')
const right1 =  document.getElementById('right-1')
const right2 =  document.getElementById('right-2')
const right3 =  document.getElementById('right-3')
const right4 =  document.getElementById('right-4')
const right5 =  document.getElementById('right-5')
const right6 =  document.getElementById('right-6')
let slide = 1;

downbtn.addEventListener('click', function() { 
    if(slide == 1) {
        left2.classList.add('go-down')
        left2.classList.remove('go-up')
        setTimeout(function(){
            right2.classList.add('go-down')
            right2.classList.remove('go-up')
        }, 100);
        slide = slide + 1
    }else if(slide == 2) {
        left3.classList.add('go-down2')
        left3.classList.remove('go-up2')
        setTimeout(function(){
            right3.classList.add('go-down2')
            right3.classList.remove('go-up2')
        }, 100);
        slide = slide + 1
    }else if(slide == 3) {
        left4.classList.add('go-down3')
        left4.classList.remove('go-up3')
        setTimeout(function(){
            right4.classList.add('go-down3')
            right4.classList.remove('go-up3')
        }, 100);
        slide = slide + 1
    }else if(slide == 4) {
        left5.classList.add('go-down4')
        left5.classList.remove('go-up4')
        setTimeout(function(){
            right5.classList.add('go-down4')
            right5.classList.remove('go-up4')
        }, 100);
        slide = slide + 1
    }else if(slide == 5) {
        left6.classList.add('go-down5')
        left6.classList.remove('go-up5')
        setTimeout(function(){
            right6.classList.add('go-down5')
            right6.classList.remove('go-up5')
        }, 100);
        slide = slide + 1
    }
})
upbtn.addEventListener('click', function() {
    if(slide == 2) {
        left2.classList.add('go-up')
        left2.classList.remove('go-down')
        setTimeout(function(){
            right2.classList.add('go-up')
            right2.classList.remove('go-down')
        }, 100);
        slide = slide - 1
    }else if(slide == 3) {
        left3.classList.add('go-up2')
        left3.classList.remove('go-down2')
        setTimeout(function(){
            right3.classList.add('go-up2')
            right3.classList.remove('go-down2')
        }, 100);
        slide = slide - 1
    }else if(slide == 4) {
        left4.classList.add('go-up3')
        left4.classList.remove('go-down3')
        setTimeout(function(){
            right4.classList.add('go-up3')
            right4.classList.remove('go-down3')
        }, 100);
        slide = slide - 1
    }else if(slide == 5) {
        left5.classList.add('go-up4')
        left5.classList.remove('go-down4')
        setTimeout(function(){
            right5.classList.add('go-up4')
            right5.classList.remove('go-down4')
        }, 100);
        slide = slide - 1
    }else if(slide == 6) {
        left6.classList.add('go-up5')
        left6.classList.remove('go-down5')
        setTimeout(function(){
            right6.classList.add('go-up5')
            right6.classList.remove('go-down5')
        }, 100);
        slide = slide - 1
    }
})

learn.addEventListener('click', function() {
    left2.classList.add('go-down')
    left2.classList.remove('go-up')
    setTimeout(function(){
        right2.classList.add('go-down')
        right2.classList.remove('go-up')
    }, 100);
    slide = slide + 1
})
