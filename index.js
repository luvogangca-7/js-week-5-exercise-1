

let input1 = document.querySelectorAll('input')[0]
let input2 = document.querySelectorAll('input')[1]

let add = document.querySelector('#add')
let spanAdd = document.querySelector('.spanAdd')

add.addEventListener('click', function() {
    spanAdd.textContent = +input1.value +  +input2.value
})

let input3 = document.querySelectorAll('input')[2]
let input4 = document.querySelectorAll('input')[3]

let minus = document.querySelector('#minus')
let spanDiff = document.querySelector('.spanMinus')

minus.addEventListener('click', function() {
    spanDiff.textContent = +input3.value -  +input4.value
})

let input5 = document.querySelectorAll('input')[4]
let input6 = document.querySelectorAll('input')[5]

let divide = document.querySelector('#divide')
let spanDiv = document.querySelector('.spanDiv')

divide.addEventListener('click', function() {
        if (input6.value == 0){
        alert('Can\'t divide by zero mate')
    }
    spanDiv.textContent = +input5.value /  +input6.value
})

let input7 = document.querySelectorAll('input')[6]
let input8 = document.querySelectorAll('input')[7]

let multiply = document.querySelector('#multiply')
let spanProd = document.querySelector('.spanProd')

multiply.addEventListener('click', function() {

    spanProd.textContent = +input7.value *  +input8.value
})