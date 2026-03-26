let number = 100;
const resultH1 = document.getElementById("result");
function render() { resultH1.innerHTML = number; }

render();

const plus = (value = 1) => {
    number += value;
    render();
}

const reset = (value) => {
    number = 100;
    render();
}