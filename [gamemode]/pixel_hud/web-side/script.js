let voice_bars = {
    1: document.querySelector('#v1'),
    2: document.querySelector('#v2'),
    3: document.querySelector('#v3')
}

function remove_voices_bars() {
    let elements = document.querySelectorAll('.qTalk')

    for (let i in elements ) {
        if (typeof elements[i] == 'object') {
            elements[i].classList.remove('activeQ')
            elements[i].style.background = 'rgba(255, 255, 255, 0.2)'
        }
    }
}

function talking_voice() {
    let elements = document.querySelectorAll('.activeQ')

    for (let i in elements ) {
        if (typeof elements[i] == 'object') {
            elements[i].style.background = '#7159C1'
        }
    }
}

function setVeloBar(velo) {
    let fill_value = 180 * (velo) / (450)

    let fill_element = document.querySelector('.veloFill')

    fill_element.style.width = `${fill_value}%`
}

function setCircle(percentage, fillClass) {
    let circle = document.querySelector(`.${fillClass}`)

    let calc =   ( 113 * (100 - percentage) ) / 100

    circle.style.strokeDashoffset = calc
    
} 


window.addEventListener('message', ({ data }) => {
    let normalHud = document.querySelector('.normalContainer')
    
    if (data.hud == true ) {
        document.querySelector('body').style.display = 'flex'
    } else if ( data.hud == false ){
        document.querySelector('body').style.display = 'none'
    }

    const talkText = document.querySelector('.talkText')

    if (data.voice == '1') {
        remove_voices_bars()
        voice_bars[1].classList.add('activeQ')
        voice_bars[1].style.background = 'white'

        talkText.textContent = 'Sussurrando'
    } else if (data.voice == '2') {

    } else {
    }

    if (data.talking) {
    }

    setCircle(data.health, 'lifeFill')
    setCircle(data.armour, 'shieldFill')
    setCircle(data.thirst, 'waterFill')
    setCircle(data.hunger, 'foodFill')

    let radio = document.querySelector('.radio')

    if (data.radio > 0 && data.radio != undefined) {
        radio.style.opacity = '1'
        radio.innerHTML = `
        <img src="images/freq.svg" alt="">
        <p>${data.radio}.00 <span>MHz</span></p>
        `
    } else {
        radio.style.opacity = '0'
        radio.innerHTML = ''
    }
    
   


    let car = document.querySelector('.carHud-container')
    let footer = document.querySelector('footer')

    if (data.vehicle) {
        car.style.display = 'flex'

        footer.style.right = '230px'

        let velo = document.querySelector('.velo')

        velo.textContent = data.speed

        if (Number(data.speed) <= 9) {
            velo.innerHTML = `
                <h1 class = 'velo'><span class = 'defaultVelo'>00</span>${data.speed.toFixed(0)}<span class = 'kmText'>MPH</span></h1>
            `
        } else if (Number(data.speed) <= 99) {
            velo.innerHTML = `
                <h1 class = 'velo'><span class = 'defaultVelo'>0</span>${data.speed.toFixed(0)}<span class = 'kmText'>MPH</span></h1>
            `
        } else {
            velo.innerHTML = `
                <h1 class = 'velo'>${data.speed.toFixed(0)}<span class = 'kmText'>MPH</span></h1>
            `
        }

        let velo_perc = 100 * (data.speed) / (300)

        setVeloBar(velo_perc)

        let gas_element = document.querySelector('.gasAmount')
        gas_element.innerHTML = `
            <p class = 'gasAmount'>${data.fuel.toFixed(0)}<span>%</span></p>
        `
        
        let seatbelt = document.querySelector('.seatbelt')

        if (data.seatbelt == '1') {
            seatbelt.classList.remove('opacity')
        } else {
            seatbelt.classList.add('opacity')
        }
    } else {
        car.style.display = 'none'

        normalHud.style.left = '40px'
        normalHud.style.transform = 'translateX(0%)'

        footer.style.right = '40px'
    }

})