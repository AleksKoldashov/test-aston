const el = function(element){
    if(element.charAt(0) === "#"){
        return document.querySelector(element)
    }else{
        return document.querySelectorAll(element)
    }
}
const equals = document.querySelector(".btn-equals")
const clear = document.querySelector(".clear")
const arrow = document.querySelector('[data-type="arrow"]')

const display = el("#display")
const btnNum = el(".btn-num")
const btnOper = el(".oper")

var oneNum = ''
var twoNum = ''
var oper = ''

function ArrowoneNum () {
    if(oper){
        let str = twoNum.slice(0, -1);
        twoNum = str
        display.innerHTML=str
    }else{
        let str = oneNum.slice(0, -1);
        oneNum = str
        display.innerHTML=str
    }
}

const setNum=function(){
    if(oper){
        if(this.getAttribute("data-btn")=="." & twoNum ==''){
            twoNum += 0+this.getAttribute("data-btn");
            display.innerHTML = twoNum
        }else if(this.getAttribute("data-btn")=="."){
            let a = twoNum.indexOf('.')
            if(a==-1){
            twoNum += this.getAttribute("data-btn");
            display.innerHTML = twoNum
            }
        }else{
            twoNum += this.getAttribute("data-btn");
            display.innerHTML = twoNum
        }
    }else{
        if(this.getAttribute("data-btn")=="." & oneNum ==''){
            oneNum += 0+this.getAttribute("data-btn");
            display.innerHTML = oneNum
        }else if(this.getAttribute("data-btn")=="."){
            let a = oneNum.indexOf('.')
            if(a==-1){
                oneNum += this.getAttribute("data-btn");
                display.innerHTML =  oneNum
            } 
        }else{
            oneNum += this.getAttribute("data-btn");
            display.innerHTML =  oneNum
        }
    }
}

const setOper=function(){
oper = this.getAttribute("data-oper")
}

class Result{
    constructor(oneNum, twoNum){
        this.oneNum = oneNum
        this.twoNum = twoNum
    }
getSum(){ 
    let res = parseFloat(oneNum) + parseFloat(twoNum);
    display.innerHTML = res;
    twoNum = ''
    oneNum = res
}
getDif(){
    let res = parseFloat(oneNum) - parseFloat(twoNum);
    display.innerHTML = res
    twoNum = ''
    oneNum = res
}
getMul(){
    let res = parseFloat(oneNum) * parseFloat(twoNum);
    display.innerHTML = res;
    twoNum = ''
    oneNum = res
}
getDiv(){
    let res = parseFloat(oneNum) / parseFloat(twoNum);
    display.innerHTML = res;
    twoNum = ''
    oneNum = res
}
getPer(){
    let res = parseFloat(oneNum) * (parseFloat(twoNum)/100);
    display.innerHTML = res;
    twoNum = ''
    oneNum = res
}
}

const calcul = new Result(oneNum, twoNum)

const Clear=()=>{
    oneNum = ''
    twoNum = ''
    oper = ''
    display.innerHTML = '0'
}

const result=()=>{
    switch (oper) {
        case "%":
            if(twoNum=='0'){
                res='странный выбор'
            }else{
                calcul.getPer()
            }
            break;
        case "+":
            calcul.getSum()
            break;
        case "-":
            calcul.getDif()
            break;
        case '*':
            calcul.getMul()
            break;
        case '/':
            if(twoNum=='0'){
                res = 'На ноль делить нельзя'
                Clear()
            }else{
            calcul.getDiv()
            }
            break;
        default:
            break;
    }
}

arrow.addEventListener("click", ArrowoneNum)
clear.addEventListener("click", Clear)
equals.addEventListener("click", result)

for (let i = 0, l = btnOper.length; i < l; i++) {
    btnOper[i].onclick = setOper;
      }

for (let i = 0, l = btnNum.length; i < l; i++) {
    btnNum[i].onclick = setNum;
      }



