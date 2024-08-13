let currentVal = '';
document.querySelector('#display').textContent = currentVal;

function clickMe(value) {
    currentVal = currentVal + value;
    document.querySelector('#display').textContent = currentVal;
}
function calculate() {
    let result
    try {
        result = eval(currentVal);
        document.querySelector('#display').textContent = result;
        currentVal = '';
    } catch (e) {
        console.log('invalid input', e);
    }
}
function clearDisplay() {
    currentVal = ''; 
    document.querySelector('#display').textContent = currentVal; 
}


