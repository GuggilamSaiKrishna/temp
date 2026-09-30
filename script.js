function Factorial() {

    let n = document.getElementById("num").value;
    let num_var = Number(n);

    let fact = 1;

    for (let i = 1; i <= num_var; i++) {
        fact = fact * i;
    }

    document.getElementById("result").innerHTML = fact;
}


function prime() {

    let n = Number(document.getElementById("num").value);

    let is_prime = true;

    if (n < 2) {
        is_prime = false;
    }

    for (let i = 2; i < n; i++) {

        if (n % i == 0) {
            is_prime = false;
            break;
        }
    }

    if (is_prime) {
        document.getElementById("result").innerHTML =
            "Prime Number";
    }
    else {
        document.getElementById("result").innerHTML =
            "Not Prime Number";
    }
}


function armstrong() {

    let n = Number(document.getElementById("num").value);

    let original = n;
    let sum = 0;

    while (n > 0) {

        let digit = n % 10;

        sum = sum + digit ** 3;

        n = Math.floor(n / 10);
    }

    if (sum === original) {
        document.getElementById("result").innerHTML =
            "Armstrong Number";
    }
    else {
        document.getElementById("result").innerHTML =
            "Not Armstrong Number";
    }
}


function Fibonacci() {

    let n = document.getElementById("num").value;
    let num_var = Number(n);

    let a = 0;
    let b = 1;
    let result = "";

    for (let i = 0; i < num_var; i++) {

        result = result + a + " ";

        let next = a + b;

        a = b;
        b = next;
    }

    document.getElementById("result").innerHTML = result;
}