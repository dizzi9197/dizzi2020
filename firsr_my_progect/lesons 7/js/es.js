window.addEventListener('DOMContentLoaded', function(){
    'use strict'
class Options {
    constructor(height, width, bg, fontSize, textAlign, text) {
        this.height = height +'px';
        this.width = width + 'px';
        this.bg = bg;
        this.fontSize = fontSize + 'px';
        this.textAlign = textAlign;
        this.text = text;
    }
    
    newDiv (){
        let div = document.createElement('div')
        document.body.appendChild(div)
        div.style.cssText = `height: ${this.height};\
                            width: ${this.width} \;
                            background-color: ${this.bg} \;
                            font-size: ${this.fontSize} \;
                            text-align: ${this.textAlign}\;`;
        document.querySelector('div').textContent = `${this.text}`;
        console.log(`${this.height}`)
    }
}

let  userCreatedHeightDiv = +prompt('Укажите высоту блока (только челое число)', '300');
let  userCreatedWidthDiv = +prompt('Укажите ширину блока (только челое число)', 300);
let  userCreatedBgDiv = prompt('Укажите желаемый цвет фона:', 'green', 'yellow');
let  userCreatedFontSizeDiv = +prompt('Укажите желаемый размер шрифта:', '24');
let  userCreatedTextAlignDiv = prompt('Укажите где расположить текст:', 'center');
let userMessage = prompt('Введите любой текст:');
let createNewDiv = new Options (userCreatedHeightDiv, userCreatedWidthDiv, userCreatedBgDiv, userCreatedFontSizeDiv, userCreatedTextAlignDiv, userMessage);
createNewDiv.newDiv()
});