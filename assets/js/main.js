'use strict'    
const formElement = document.querySelector('#form');
const inputElement =document.querySelector('#xsmb');
const numberOne = document.querySelector('#n1');
const numberTwo = document.querySelector('#n2');
const numberThree = document.querySelector('#n3');
const numberFour = document.querySelector('#n4');
const numberFive = document.querySelector('#n5');
const stopElement = document.querySelector('#stop');
const messageElement = document.querySelector('span');
var testNumber = true;

inputElement.oninput = function(){
    if (inputElement.value.length > 5){
        messageElement.innerText = 'Không nhập quá 5 ký tự';
        testNumber = false;
    } else {
        testNumber = true;
        messageElement.innerText="";
    }
}

formElement.addEventListener('submit',function(e){
    e.preventDefault();
    if (testNumber){
        var run = setInterval(function() {
            numberOne.innerHTML = Math.floor(Math.random()*10)
            numberTwo.innerHTML = Math.floor(Math.random()*10)
            numberThree.innerHTML = Math.floor(Math.random()*10)
            numberFour.innerHTML = Math.floor(Math.random()*10)
            numberFive.innerHTML = Math.floor(Math.random()*10)
        },50);
        setTimeout(() => {
            clearInterval(run);
            let result = numberFive.innerHTML + numberFour.innerHTML + numberThree.innerHTML + numberTwo.innerHTML + numberOne.innerHTML;
            let test = true;
            let j = 0;
            for (let i = inputElement.value.length-1; i >= 0 ; --i) {
                if(inputElement.value[i] !== result[j]) {
                    test = false;
                    break;
                }
                j++;
            }
            if(test){
                stopElement.innerText = 'Bạn đã trúng đề !!!';
                stopElement.classList.add('successful');
                stopElement.classList.remove('failure');
            } else{
                stopElement.innerText = 'Bạn đã toạch =((';
                stopElement.classList.remove('successful');
                stopElement.classList.add('failure');
            }
        }, 2000);
    }
});