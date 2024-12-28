function paralx(event){
    const parallaxElements = document.querySelectorAll('.fon');

    parallaxElements.forEach(function(element) {
    let scrollPosition = window.scrollY;
        element.style.backgroundPositionY = (scrollPosition * 0.2) + 'px';
    })
};

document.addEventListener("scroll",paralx);

function paralx2(event){
    const parallaxElements2 = document.querySelectorAll('.polet');

    parallaxElements2.forEach(function(element) {
    let scrollPosition = window.scrollY;
        element.style.transform = 'translateY(' + scrollPosition * 0.4 + 'px)';
    })
};

document.addEventListener("scroll",paralx2);


const slider = document.querySelector('.cards');
const arrowBtns = document.querySelectorAll('.button');
const firstCardWidth = slider.querySelector(".card").offsetWidth + 16;




arrowBtns.forEach(btn =>{
    btn.addEventListener("click",()=>{
        slider.scrollLeft += btn.id === "levo" ? -firstCardWidth:firstCardWidth;
    })
});

