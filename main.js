const output = document.querySelector('.outputCalc')
const div = document.createElement('div')
div.classList.add('keyboard')
document.querySelector('.calculator').appendChild(div)

//Created symbol list like string and was trying to separate it through the .split = it is working
//The similar method I used in Python

let symbol = 'C CE % / 7 8 9 * 4 5 6 - 1 2 3 + 0 . ( ) Bal Inc Exp = ReB ReI ReEx Save'.split(' ')


.map(addSymbol)

function addSymbol (symbol) {
    div.insertAdjacentHTML('beforeend', `<button value="${symbol}">${symbol}</button>`)
}

// Create myArr and put in my button list
let myArr = document.querySelectorAll('button')
//Apply through myArr to forEach loop that take all our buttons
// In foreach loop we give function clickButton to check reaction onclick

myArr.forEach(clickButton)
function clickButton (button){
    button.addEventListener('click', function () {
        //call our function with button value
        calc(this.value)
    })
}

//add filter Match

function ourEvent(event){
    {
        if ((event.key).match(/[0-9%\/*\-+\(\)=]|Backspace|Enter/)) calc(event.key)
        return event;
    }  
}
document.addEventListener('key', ourEvent)

//give this function our key or value of our button
//The similar function eval() I used in Python
function calc(value) {
    // if clicked '=' or Enter
    if (value.match(/=|Enter/)) {
        try {
            output.textContent = (eval(output.textContent))
        // if case of exception
        } catch {
            // save our value
            let oldValue = output.textContent
            // create new variable for exception
            let newValue = 'Mistake expression'
            // output our exception
            output.textContent = newValue
            // reuturn old value throw 1,5 sec
            setTimeout(() => {
                output.textContent = oldValue
            }, 1500)
        }
      
    // if symbol == "C"
    } else if (value === 'C') {
        // clear our field
        output.textContent = ''
    } 
    // if pressed symbol "СЕ" or Backspace
    else if (value.match(/CE|Backspace/)) {
        // rewriting our string without last symbol and show on the screen
        output.textContent = output.textContent.substring(0, output.textContent.length - 1)
        
    // if pressed any (filtered before() button:
    } 
    else if (value.match(/Bal|Enter/)){
        saveBalance()
        output.textContent = output.textContent.remove
        
        getBalance()
    }
    else if (value.match(/Inc|Enter/)){
        saveIncome()
        output.textContent = output.textContent.remove
        getIncome()
    }
    else if (value.match(/Exp|Enter/)){
        saveExpences()
        output.textContent = output.textContent.remove
        getExpences()
    }
    else if (value.match(/ReB|Enter/)){
        removeBal()
    }
    else if (value.match(/ReI|Enter/)){
        removeInc()
    }
    else if (value.match(/ReEx|Enter/)){
        removeExp()
    }
    else if (value.match(/Save|Enter/)){
        getBalance()
    }
    else {
        // write it in the field
        output.textContent += value
    }
}

//Data in local storage
function saveBalance(){
    let bal = JSON.parse(localStorage.getItem('Balance'))
    let inc = JSON.parse(localStorage.getItem('Income'))
    let exp = JSON.parse(localStorage.getItem('Expences'))
    localStorage.setItem('Income' , 0)
    localStorage.setItem('Expences' , 0)
    total = (bal+inc)-exp
    localStorage.setItem('Balance', JSON.stringify(total))
}
function saveIncome(){
    localStorage.setItem('Income', JSON.stringify((eval(output.textContent))))
}
function saveExpences(){
    localStorage.setItem('Expences', JSON.stringify((eval(output.textContent))))
}
function getBalance(){
    let bal = JSON.parse(localStorage.getItem('Balance'))
    out1.textContent = bal
    console.log(bal);
}
getBalance

function getIncome(){
    let inc = JSON.parse(localStorage.getItem('Income'))
    out2.textContent = inc
    console.log(inc);
}
getIncome

function getExpences(){
    let exp = JSON.parse(localStorage.getItem('Expences'))
    out3.textContent = exp
    console.log(exp);
}
getExpences

function removeBal(){
    localStorage.removeItem('Balance')
    out1.textContent.remove
}
removeBal
function removeInc(){
    localStorage.removeItem('Income')
    out2.textContent.remove
}
removeInc
function removeExp(){
    localStorage.removeItem('Expences')
    out3.textContent.remove
}
removeExp

