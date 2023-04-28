let screen = document.getElementById("screen");

function addToResult(value) {
    screen.value = screen.value + value;
}

function clearResult() {
    screen.value = "";
}

function backspace() {
    screen.value = screen.value.slice(0, -1);
}

function calculate() {
    try {
        screen.value = eval(screen.value); //I know its best not to use this but this is just a practice project so :‑|
    } catch (error) {
        alert("Invalid calculation");
    }
}
