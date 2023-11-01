setInterval(setClock, 1000) // the setInterval function repeats itself for the given argumnet of time and variable

const hourHand = document.querySelector('[data-hour-hand]')
const minuteHand = document.querySelector('[data-minute-hand]')
const secondHand = document.querySelector('[data-second-hand]')




function setClock (){
    const currentDate = new Date()
    const secondsRatio = currentDate.getSeconds()/60
    const minutesRatio = (secondsRatio + currentDate.getSeconds())/60
    const hoursRatio = (minutesRatio + currentDate.getSeconds())/12

    setRotation(secondHand, secondsRatio)
    setRotation(hourHand, hoursRatio)
    setRotation(minuteHand, minutesRatio)
}

function setRotation (element, rotationRatio) {
     
element.style.setProperty ('--rotation', rotationRatio * 360);


}

setClock();