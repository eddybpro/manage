const humburger = document.getElementById('humburger');
const lists = document.getElementById('lists');
const firstBtn = document.getElementById('first-btn');
const closeBtn= document.getElementById('close');
const checkBox = document.querySelectorAll('.check');
const firstReview= document.getElementById('first-1');
const secondReview= document.getElementById('second-2');
const thirdReview= document.getElementById('third-3');
const fourthReview= document.getElementById('fourth-4');
const listBar = document.querySelectorAll('.list');
const allImg = document.querySelectorAll('img');



allImg.forEach(element=>{
    element.addEventListener('contextmenu',(e)=>{
        e.preventDefault();
    })
})

humburger.addEventListener('click',()=>{
    lists.classList.toggle('bar');
    firstBtn.classList.toggle('btn');
    humburger.classList.replace('humburger','lists');
    closeBtn.classList.toggle('close-btn');
})

listBar.forEach(element=>{
    element.addEventListener('click',()=>{
        lists.classList.toggle('bar');
        firstBtn.classList.replace('btn','first-btn');
        humburger.classList.toggle('humburger');
        closeBtn.classList.toggle('close-btn');
    })
})

firstBtn.addEventListener('click',()=>{
    lists.classList.toggle('bar');
    firstBtn.classList.replace('btn','first-btn');
    humburger.classList.toggle('humburger');
    closeBtn.classList.toggle('close-btn');
})

closeBtn.addEventListener('click',()=>{
    lists.classList.toggle('bar');
    firstBtn.classList.replace('btn','first-btn');
    humburger.classList.toggle('humburger');
    closeBtn.classList.toggle('close-btn');
})

secondReview.classList.toggle('first-btn');
thirdReview.classList.toggle('first-btn');
fourthReview.classList.toggle('first-btn');

checkBox[0].classList.toggle('red');

checkBox.forEach(element => {
    element.addEventListener('click',()=>{
    element.classList.toggle('red');
})})

checkBox[0].addEventListener('click',()=>{
    firstReview.classList.toggle('first-btn');
    secondReview.classList.add('first-btn');
    thirdReview.classList.add('first-btn');
    fourthReview.classList.add('first-btn');

    checkBox[1].classList.remove('red');
    checkBox[2].classList.remove('red');
    checkBox[3].classList.remove('red');
})

checkBox[1].addEventListener('click',()=>{
    firstReview.classList.add('first-btn');
    secondReview.classList.toggle('first-btn');
    thirdReview.classList.add('first-btn');
    fourthReview.classList.add('first-btn');
    

    checkBox[0].classList.remove('red');
    checkBox[2].classList.remove('red');
    checkBox[3].classList.remove('red');

})

checkBox[2].addEventListener('click',()=>{
    secondReview.classList.add('first-btn');
    thirdReview.classList.toggle('first-btn');
    fourthReview.classList.add('first-btn');
    firstReview.classList.add('first-btn');

    checkBox[0].classList.remove('red');
    checkBox[1].classList.remove('red');
    checkBox[3].classList.remove('red');

})

checkBox[3].addEventListener('click',()=>{
    firstReview.classList.add('first-btn');
    secondReview.classList.add('first-btn');
    thirdReview.classList.add('first-btn');
    fourthReview.classList.toggle('first-btn');

    checkBox[0].classList.remove('red');
    checkBox[1].classList.remove('red');
    checkBox[2].classList.remove('red');

})

















