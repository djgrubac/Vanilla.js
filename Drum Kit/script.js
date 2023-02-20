let crashRide = document.querySelector('#crash-ride');
let hiHatTop = document.querySelector('#hihat-top');

const animateCrashOrRide = () => {
    crashRide.style.transform = 'rotate(0deg) scale(1.5)';
};

const animateHiHatClosed = () => {
    hiHatTop.style.top = '171px';
};

window.addEventListener("keydown", (event) => { //window jer zelimo da detektujemo pritisak dugmeta na citavoj stranici
    let code = event.keyCode;//value dugmeta koji smo pritisnuli
    let keyElement = document.querySelector(`div[data-key = "${code}"]`);

    if(!keyElement){
        return;
    }

    let audio = document.querySelector(`audio[data-key = "${code}"]`);
    audio.currentTime = 0;//svakim pritiskom iznova pusta zvuk
    audio.play();

    switch(code){
        case 69:
        case 82:
            animateCrashOrRide();
            break;
        case 73:    
        case 75:
            animateHiHatClosed();
            break;
    }
    
});

const removeCrashRideTransition = (e) => {
    if(e.propertyName !== 'transform') return;//ako se desilo nesto sto nije transform, prekidamo
    e.target.style = 'rotate(-7.2deg) scale(1.5)';
};

const removeHiHatTopTransistion = (e) => {
    if(e.propertyName !== 'top') return;
    e.target.style = '166px';
}

crashRide.addEventListener("transitionend", removeCrashRideTransition);
hiHatTop.addEventListener("transitionend", removeHiHatTopTransistion);