let numOne;
let numTwo;
let operand;
let textContent = ""
let answer;


const displayDiv = document.querySelector('#display')
const buttons = document.querySelectorAll('.btn')
const button = document.querySelector('.btn')
const clearButton = document.querySelector('.clear')
const numbers = document.querySelector('#numbers')
const operandButton = document.querySelector('.operand')
const operandButtons = document.querySelectorAll('.operand')
const equals = document.querySelector('.equals')
operandButtons.forEach(operandButton => operandButton.addEventListener('click', logOperand))

equals.addEventListener('click', operate)
buttons.forEach(button => button.addEventListener('click', logThis))
clearButton.addEventListener('click', clearAnswer)

function logOperand(e)
{
    if(numOne)
    {
        numOne = numOne
        if (numTwo)
        {
            operate()
        }
        else if (operand)
        {
            if (!numTwo)
            {
                numTwo = numbers.innerText
                operate()
            }
            
        }
        
    }
    else if (!numOne)
    {
        numOne = numbers.textContent
    }
    
    
    
    console.log('logOperand numOne', numOne)
    console.log("logOperand numTwo", numTwo)
    operand = e.target.innerText
    if (e.target.innerText == '+')
    {
        operand = 'add'
    }
    if (e.target.innerText == '-')
    {
        operand = 'subtract'
    }
    if (e.target.innerText == '*')
    {
        operand = 'multiply'
    }
    if (e.target.innerText == '/')
    {
        operand = 'divide'
    }


    

    numbers.textContent = numOne
    textContent = ''

    return answer
}

function clearText()
{
numbers.textContent = ''
textContent = ''

}

function clearAnswer()
{
numbers.textContent = ''
textContent = ''
numOne = ''
}

function logThis(e)
{
    
    textContent = textContent  + `${e.target.innerText}`
    
    numbers.innerHTML = textContent
    console.log('numOne logThis', numOne)

}

function add(numOne, numTwo)
{
    let answer = numOne + numTwo
    return answer
}

function subtract(numOne, numTwo)
{
    let answer = numOne - numTwo
    return answer
}

function multiply(numOne, numTwo)
{
    let answer = numOne * numTwo
    return answer
}

function divide(numOne, numTwo)
{
    let answer = numOne / numTwo
    return answer
}

function operate()
{
    console.log('innerHtml', numbers.innerHTML)
    console.log('numOne', numOne)
    if (!numTwo)
    {
        numTwo = numbers.textContent
    }
    
    console.log('numTwo', numTwo)
    operand = operand.toString()

    numOne = numOne * 1
    numTwo = numTwo * 1

    console.log('operand', operand)
    if (operand == 'add')
    {
        answer = add(numOne, numTwo)
    }
    if(operand == 'subtract')
    {
        answer = subtract(numOne, numTwo)
    }
    if (operand == 'multiply')
    {
        answer = multiply(numOne, numTwo)
    }
    if (operand == 'divide')
    {
        answer = divide(numOne, numTwo)
    }
    if (operand == '')
    {
        answer = answer
    }

    
    
    console.log('answer', answer)
    
    numOne = answer
    numTwo = undefined
    numbers.textContent = answer
    operand = ''
}