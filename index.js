const inputEl = document.getElementById("input-val")
const covertBtn = document.getElementById("convert-btn")
const lengthText = document.getElementById("l-conversion-text")
const volumeText = document.getElementById("v-conversion-text")
const massText = document.getElementById("m-conversion-text")

function Converter(){
    let value = inputEl.value
    let mToF = value*3.281
    let ftoM = value/3.281
    let lToG = value*0.264
    let gToL = value/0.264
    let kgToP = value*2.204
    let pToKg = value/2.204

    lengthText.textContent = `${value} meters = ${mToF.toFixed(3)} feets | ${value} feet = ${ftoM.toFixed(3)} meters`
    volumeText.textContent = `${value} liters = ${lToG.toFixed(3)} gallons | ${value} gallons = ${gToL.toFixed(3)} liters`
    massText.textContent = `${value} kilos = ${kgToP.toFixed(3)} pounds | ${value} pounds = ${pToKg.toFixed(3)} kilos`

}

covertBtn.addEventListener("click", Converter)