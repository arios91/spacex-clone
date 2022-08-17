const btn = document.getElementById('menu-btn');
const overlay = document.getElementById('overlay');
const menu = document.getElementById('mobile-menu');
const counters = document.querySelectorAll('.counter');
let scrollStarted = false;

btn.addEventListener('click', navToggle);
document.addEventListener('scroll', scrollPage);


function navToggle(){
    btn.classList.toggle('open');
    overlay.classList.toggle('overlay-show');
    menu.classList.toggle('show-menu');
    document.body.classList.toggle('stop-scrolling');
}

function scrollPage(){
    const scrollPos = window.scrollY;
    
    if(scrollPos > 100 && !scrollStarted){
        countUp();
        scrollStarted = true;
    }else if(scrollPos < 100 && scrollStarted){
        reset();
        scrollStarted = false;
    }
}

function countUp(){
    counters.forEach(counter => {
        counter.innerText = '0';

        const updateCounter = () => {
            const target = parseInt(counter.getAttribute('data-target'));
            const currentNum = parseInt(counter.innerText);
            if(currentNum < target){
                counter.innerText = currentNum + 1
                setTimeout(updateCounter, 75);
            }else{
                counter.innerText = target;
            }
        }


        updateCounter();
    })
}

function reset(){
    counters.forEach(counter => {
        counter.innetHTML = 0;
    })
}