// Vitovszki Tamás, 0358-as feladat, 2023.03.31
const side1Input = document.querySelector("#side1")
const side2Input = document.querySelector("#side2")
const calcBtn = document.querySelector("#calcBtn")
const deleteBtn = document.querySelector("#deleteBtn")
const area1Output = document.querySelector("#area1")
const area2Output = document.querySelector("#area2")
if(calcBtn){
    calcBtn.addEventListener("click", ()=>{
        calculate()
    })
}
if(deleteBtn){
    deleteBtn.addEventListener("click", ()=>{
        deleteInputs()
    })
}

function calculate(){
    let resSide1 = checkInput(side1Input.value)
    let resSide2= checkInput(side2Input.value)
    if(resSide1&&resSide2){
        const side1 = Number(side1Input.value)
        const side2 = Number(side2Input.value)
        let area1 = calcArea(side1)
        let area2 = (calcArea(side2))/2
        area1Output.value=area1+" m²"
        area2Output.value=area2+" m²"
        result1.style.display = "block"
        result2.style.display = "block"
    }

}

function calcArea(side){
    return (3/2)*Math.pow(side,2)*Math.sqrt(3)
}

if(side1Input && side2Input){

    side1Input.addEventListener("click", ()=>{
        result1.style.display="none"
        result2.style.display="none"
    })
    side2Input.addEventListener("click", ()=>{
        result1.style.display="none"
        result2.style.display="none"
    })
}
function checkInput(input){
    let res =input.match(/^[0-9]+$/)
    return res
}
function deleteInputs(){
    side1Input.value=""
    side2Input.value=""
    area1Output.value=""
    area2Output.value=""
    result1.style.display="none"
    result2.style.display="none"
}