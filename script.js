const arrowBtn = document.querySelector('.arrow');
const arrowIcon = document.querySelector('.fas');
const img = document.querySelector('.item1');
const imgSec = document.querySelector('.item2');

const showImg = () => {
    img.classList.toggle('show')
    imgSec.classList.toggle('hide')

    if (img.classList.contains('show')) {
        arrowIcon.style.transform = 'rotate(180deg)'
    } else {
        arrowIcon.style.transform = 'rotate(0deg)'
    }   
}

arrowBtn.addEventListener('click', showImg)