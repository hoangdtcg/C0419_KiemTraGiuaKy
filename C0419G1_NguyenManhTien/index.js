function mul2NumAdj(arr) {
    let max = 0;
    for(let i = 0; i < arr.length; i++) {
        if (max < mul(arr[i], arr[i - 1])) {
            max = mul(arr[i], arr[i - 1]);
        }
    }
    return max;
}

function mul(number1, number2) {
    return number1*number2;
}

function randomNumber() {
    return Math.floor((Math.random() - 0.5)*20 );
}

function inputArr() {
    let arr = [];
    for(let i = 0; i < 10; i++) {
        arr[i] = randomNumber();
    }
    console.log(arr);
    return arr;
}

console.log(mul2NumAdj(inputArr()));