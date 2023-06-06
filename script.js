var zoom = document.getElementById('big')
let zoom1 = document.getElementById('big1')
zoom.addEventListener('mouseover', largeSize);
function largeSize(){
    zoom.style.fontSize='1.5rem';
}
zoom.addEventListener('mouseleave', decreaseSize);
function decreaseSize(){
    zoom.style.fontSize='1.2rem';
}
zoom1.addEventListener('mouseover', increaseSize);
function increaseSize(){
    zoom1.style.fontSize='1.2rem';
}
zoom1.addEventListener('mouseleave', normalSize);
function normalSize(){
    zoom1.style.fontSize='1rem';
}
let skillSet1= document.getElementById('set1')
let skillSet2= document.getElementById('set2')
let hobby= document.getElementById('set3')

skillSet1.addEventListener('mouseover', function(){
    skillSet1.style.backgroundColor= 'beige';
});
skillSet1.addEventListener('mouseleave', function(){
    skillSet1.style.backgroundColor= 'white';
});

skillSet2.addEventListener('mouseover', function(){
    skillSet2.style.backgroundColor= 'lightgrey';
});
skillSet2.addEventListener('mouseleave', function(){
    skillSet2.style.backgroundColor= 'white';
});

hobby.addEventListener('mouseover', function(){
    hobby.style.backgroundColor= 'cyan';
});
hobby.addEventListener('mouseleave', function(){
    hobby.style.backgroundColor= 'white';
});

$.ajax('https://api.adviceslip.com/advice', {
    success : function(APIResponse){
        console.log(APIResponse);
        let myResponse = JSON.parse(APIResponse);
        console.log(myResponse);
        let getAdvice = myResponse.slip.advice;
        let myAdvice = document.getElementById('myAdvice');
        myAdvice.textContent = getAdvice;
    }
})

