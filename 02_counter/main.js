let number = 0;
const resultH1 = document.getElementById("result");

const plus = (value) => {
    number+=value;
    resultH1.innerHTML = number;
}

const reset = (value) => {
    number=0;
    resultH1.innerHTML = number;
}