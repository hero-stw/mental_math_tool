// Variables
var answer = document.getElementsByClassName("ans");
var oprtn = document.getElementsByClassName("opt");
var reslog = document.getElementsByClassName("reslog");
var margin_arr = document.getElementsByClassName("marginlog");
var time_arr = document.querySelectorAll(".timepass");
var time_lap = [];
var time_count = [];
var ranking = [];
var delta = [];
// Ranking Table
var basic = [];
var percent = [];
var cur = [];
//Options
function getOps() {
    var choice = document.getElementById("option").value;
    var rsbtn = document.getElementById("resetbtn");
    var strtbtn = document.getElementById("start");
    if (choice == 1) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        basiccal();
    }
    if (choice == 2) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        addition();
    }
    if (choice == 3) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        subtraction();
    }
    if (choice == 4) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        multiply();
    }
    if (choice == 5) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        division();
    }
    if (choice == 6) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        percentage();
    }
    if (choice == 7) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        percentT1(0, 5);
        Calculation();
    }
    if (choice == 8) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        percentT2(0, 5);
        Calculation();
    }
    if (choice == 9) {
        strtbtn.style.display = "none";
        rsbtn.style.display = "block";
        currency();
    }
}

// Generate Operations
const equation = ["+", "-", "×", "÷"];
const usd = 1;
const euro = 1.20466;
var addend = [];
var addend1 = [];
var addend2 = [];
var operation = [];
var operationText = [];
var real_op = [];
var small = [];
var big = [];
var small1 = [];
var big1 = [];

// Calulation Ops
function basiccal() {
    function randomE() {
        return getRnd(0, 4);
    }

    function printOut(ch, a, b) {
        return a + " " + ch + " " + b + " = ?";
    }

    function genOperation() {
        for (var i = 0; i < 5; i++) {
            var a, b;
            var e = equation[randomE()];
            if (e == "+") {
                a = numLength(3, 9);
                b = numLength(2, 8);
                operationText[i] = printOut(e, numDot(a), numDot(b));
                operation[i] = a + b;
                real_op[i] = operation[i];
                oprtn[i].innerHTML = operationText[i];
            }
            if (e == "-") {
                a = numLength(3, 9);
                b = numLength(2, 8);
                if (a < b) {
                    operationText[i] = printOut(e, numDot(b), numDot(a));
                    operation[i] = b - a;
                    real_op[i] = operation[i];
                    oprtn[i].innerHTML = operationText[i];
                } else {
                    operationText[i] = printOut(e, numDot(a), numDot(b));
                    operation[i] = a - b;
                    real_op[i] = operation[i];
                    oprtn[i].innerHTML = operationText[i];
                }
            }
            if (e == "×") {
                var min = getRnd(3, 9);
                a = numLength(2, min);
                b = numLength(2, 9 - min);
                operationText[i] = printOut(e, numDot(a), numDot(b));
                operation[i] = a * b;
                real_op[i] = operation[i];
                oprtn[i].innerHTML = operationText[i];
            }
            if (e == "÷") {
                var min = getRnd(3, 9);
                a = numLength(2, 9);
                b = numLength(2, 9 - min);
                if (a < b) {
                    operationText[i] = printOut(e, numDot(b), numDot(a));
                    operation[i] = b / a;
                    real_op[i] = operation[i];
                    oprtn[i].innerHTML = operationText[i];
                } else {
                    operationText[i] = printOut(e, numDot(a), numDot(b));
                    operation[i] = a / b;
                    real_op[i] = operation[i];
                    oprtn[i].innerHTML = operationText[i];
                }
            }
        }
    }
    genOperation();
    Calculation();
}

function percentage() {
    var num = getRnd(1, 3);
    percentT1(0, num);
    percentT2(num, 5);
    // Main
    Calculation();
}

function currency() {
    function genAddend() {
        // Generate addends
        for (var i = 0; i < 10; i++) {
            addend[i] = numLength(2, 9);
        }
        // Generate curency exchange $ => Euro
        for (i = 0; i < 5; i++) {
            operation[i] = roundto2(addend[i] * euro);
            operationText[i] = `${numDot(addend[i])} USD equals ? EUR`;
        }
        // Generate curency exchange Euro => $
        for (var j = 5; j < 10; j++) {
            operation[j] = roundto2(addend[j] / euro);
            operationText[j] = `${numDot(addend[j])} EUR equals ? USD`;
        }
        for (i = 0; i < 5; i++) {
            var index = getRnd(0, 9);
            oprtn[i].innerHTML = operationText[index];
            real_op[i] = operation[index];
        }
    }
    genAddend();
    Calculation();
}

function addition() {
    for (var i = 0; i < 5; i++) {
        var a = numLength(3, 9),
            b = numLength(2, 8);
        operationText[i] = numDot(a) + " + " + numDot(b);
        operation[i] = a + b;
        real_op[i] = operation[i];
        oprtn[i].innerHTML = operationText[i];
    }
    Calculation();
}

function subtraction() {
    for (var i = 0; i < 5; i++) {
        var a = numLength(3, 9),
            b = numLength(2, 8);
        if (a < b) {
            operationText[i] = numDot(b) + " - " + numDot(a);
            operation[i] = b - a;
            real_op[i] = operation[i];
            oprtn[i].innerHTML = operationText[i];
        } else {
            operationText[i] = numDot(a) + " - " + numDot(b);
            operation[i] = a - b;
            real_op[i] = operation[i];
            oprtn[i].innerHTML = operationText[i];
        }
    }
    Calculation();
}

function multiply() {
    for (var i = 0; i < 5; i++) {
        var min = getRnd(3, 9),
            a = numLength(2, min),
            b = numLength(2, 9 - min);
        operationText[i] = numDot(a) + " x " + numDot(b);
        operation[i] = a * b;
        real_op[i] = operation[i];
        oprtn[i].innerHTML = operationText[i];
    }
    Calculation();
}

function division() {
    for (var i = 0; i < 5; i++) {
        var min = getRnd(3, 9),
            a = numLength(2, min),
            b = numLength(2, 9 - min);
        if (a < b) {
            operationText[i] = numDot(b) + " / " + numDot(a);
            operation[i] = b / a;
            real_op[i] = operation[i];
            oprtn[i].innerHTML = operationText[i];
        } else {
            operationText[i] = numDot(a) + " / " + numDot(b);
            operation[i] = a / b;
            real_op[i] = operation[i];
            oprtn[i].innerHTML = operationText[i];
        }
    }
    Calculation();
}

function percentT1(m, n) {
    for (var i = m; i < n; i++) {
        var x = numLength(2, 9);
        var y = getRnd(1, 99);
        operation[i] = roundto2((x / 100) * y);
        operationText[i] = `${y}%  of  ${x}  equals ?%`;
        real_op[i] = operation[i];
        oprtn[i].innerHTML = operationText[i];
    }
}

function percentT2(m, n) {
    for (var i = m; i < n; i++) {
        // answer[i].setAttribute("placeholder", "%");
        var a = numLength(2, 9);
        var b = getRnd(1, a);
        if (a < b) {
            operationText[i] = numDot(a) + " / " + numDot(b) + " equals ?";
            operation[i] = roundto2((a / b) * 100);
        } else {
            operationText[i] = numDot(b) + " / " + numDot(a) + " equals ?";
            operation[i] = roundto2((b / a) * 100);
        }
        real_op[i] = operation[i];
        oprtn[i].innerHTML = operationText[i];
    }
}
// Main Cal
function removecommas(str) {
    return Number(str.replace(/,/g, ""));
}

function Calculation() {
    // Main
    stopwatch.start();
    oprtn[0].style.display = "block";
    answer[0].style.display = "block";
    answer[0].removeAttribute("readonly");
    answer[0].focus();
    answer[0].addEventListener("keyup", function(event) {
        var n = parseInt(this.value.replace(/\D/g, ''), 10);
        answer[0].value = n.toLocaleString();
        if (event.keyCode === 13) {
            event.preventDefault();
            event.stopPropagation();
            countDelta();
            if (!check(delta[0])) {
                wrong(this);
                stopwatch.beforeStop(0);
                stopwatch.stop();
                next(0);
                showErr();
                showRes(0);
            } else {
                right(this);
                oprtn[1].style.display = "block";
                answer[1].style.display = "block";
                answer[1].removeAttribute("readonly");
                answer[1].focus();
                stopwatch.lap(0);
                next(0);
            }
            this.setAttribute("readonly", "true");
            event.stopImmediatePropagation();
        }
    }, true);

    answer[1].addEventListener("keyup", function(event) {
        var n = parseInt(this.value.replace(/\D/g, ''), 10);
        answer[1].value = n.toLocaleString();
        if (event.keyCode === 13) {
            event.preventDefault();
            event.stopPropagation();
            countDelta();
            if (!check(delta[1])) {
                wrong(this);
                stopwatch.beforeStop(1);
                stopwatch.stop();
                next(1);
                showErr();
                showRes(1);
            } else {
                right(this);
                oprtn[2].style.display = "block";
                answer[2].style.display = "block";
                answer[2].removeAttribute("readonly");
                answer[2].focus();
                stopwatch.lap(1);
                next(1);
            }
            this.setAttribute("readonly", "true");
            event.stopImmediatePropagation();
        }
    }, true);
    answer[2].addEventListener("keyup", function(event) {
        var n = parseInt(this.value.replace(/\D/g, ''), 10);
        answer[2].value = n.toLocaleString();
        if (event.keyCode === 13) {
            event.preventDefault();
            event.stopPropagation();
            countDelta();
            if (!check(delta[2])) {
                wrong(this);
                stopwatch.beforeStop(2);
                stopwatch.stop();
                next(2);
                showErr();
                showRes(2);
            } else {
                right(this);
                oprtn[3].style.display = "block";
                answer[3].style.display = "block";
                answer[3].removeAttribute("readonly");
                answer[3].focus();
                stopwatch.lap(2);
                next(2);
            }
            this.setAttribute("readonly", "true");
            event.stopImmediatePropagation();
        }
    }, true);
    answer[3].addEventListener("keyup", function(event) {
        var n = parseInt(this.value.replace(/\D/g, ''), 10);
        answer[3].value = n.toLocaleString();
        if (event.keyCode === 13) {
            event.preventDefault();
            event.stopPropagation();
            countDelta();
            if (!check(delta[3])) {
                wrong(this);
                stopwatch.beforeStop(3);
                stopwatch.stop();
                next(3);
                showErr();
                showRes(3);
            } else {
                right(this);
                oprtn[4].style.display = "block";
                answer[4].style.display = "block";
                answer[4].removeAttribute("readonly");
                answer[4].focus();
                stopwatch.lap(3);
                next(3);
            }
            this.setAttribute("readonly", "true");
            event.stopImmediatePropagation();
        }
    }, true);
    answer[4].addEventListener("keyup", function(event) {
        var n = parseInt(this.value.replace(/\D/g, ''), 10);
        answer[4].value = n.toLocaleString();
        if (event.keyCode === 13) {
            event.preventDefault();
            event.stopPropagation();
            countDelta();
            if (!check(delta[4])) {
                wrong(this);
                stopwatch.beforeStop(4);
                stopwatch.stop();
                next(4);
                showErr();
                showRes(4);
            } else {
                right(this);
                stopwatch.beforeStop(4);
                stopwatch.stop();
                next(4);
                reslog[4].innerHTML = numDot(roundto2(real_op[4]));
                margin_arr[4].innerHTML = l100(delta[4]) + " %";
                time_arr[4].innerHTML = time_lap[4];
                showRes(4);
            }
            this.setAttribute("readonly", "true");
            event.stopImmediatePropagation();
        }
    }, true);
}

function next(no) {
    reslog[no].innerHTML = numDot(roundto2(real_op[no]));
    margin_arr[no].innerHTML = l100(delta[no]) + " %";
    time_arr[no].innerHTML = time_lap[no];
}
// Show icon
function wrong(obj) {
    obj.parentNode.lastChild.style.display = "block";
    obj.parentNode.style.borderColor = "#ff0000";
}

function right(obj) {
    obj.nextSibling.style.display = "block";
    obj.parentNode.style.borderColor = "#17bc71";
}
// Count delta
function countDelta() {
    for (var i = 0; i < 5; i++) {
        var d = (Math.abs(removecommas(answer[i].value) - operation[i]) / operation[i]) * 100;
        // if (d > 10000) delta[i] = 10000;
        // else delta[i] = roundto2(d);
        delta[i] = roundto2(d);
    }
}
// Check if user answer pass margin of error
function check(a) {
    var margin = document.getElementById("margin").value;
    if (a < margin) return true;
    else return false;
}

// Generate Addend with specific number
function generate(n) {
    var add = 1,
        max = 9 - add;

    if (n > max) {
        return generate(max) + generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically
    var number = Math.floor(Math.random() * (max - min + 1)) + min;
    return number;
}

function resetVal() {
    var sign = document.getElementsByClassName("sign");
    for (var i = 0; i <= 4; i++) {
        answer[i].value = null;
        answer[i].setAttribute("placeholder", "");
        delta[i] = null;
        oprtn[i].innerHTML = "";
        oprtn[i].style.display = "none";
        margin_arr[i].innerHTML = "";
        time_arr[i].innerHTML = "";
        reslog[i].innerHTML = "";
        document.getElementById("res1").innerHTML = "00.00";
        document.getElementById("res2").innerHTML = "00.00";
    }
    for (var i = 0; i < sign.length; i++) {
        sign[i].style.display = "none";
        sign[i].parentNode.style.borderColor = "#fc0";
    }
    stopwatch.restart();
}

// Time
var timeTemp = [];
class Stopwatch {
    constructor() {
        this.running = false;
        this.laps = [];
        this.reset();
    }

    reset() {
        this.times = [0, 0, 0];
    }

    start() {
        if (!this.time) this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
    }

    lap(n) {
        let times = this.times;
        timeTemp[n] = this.toNum(this.times);
        if (n == 0) {
            time_count[n] = this.toNum(times);
            time_lap[n] = this.format(times);
        } else {
            let bf = time_count[n - 1];
            time_count[n] = this.toNum(times) - bf;
            time_lap[n] = msToHMS(time_count[n]);
        }
    }

    stop() {
        this.running = false;
        this.time = null;
        this.reset();
    }
    beforeStop(n) {
        let times = this.times;
        timeTemp[n] = this.toNum(this.times);
        if (n == 0) {
            time_count[n] = this.toNum(times);
            time_lap[n] = this.format(times);
        } else {
            // time_count.push(this.toNum(times) - bf);
            time_count[n] = timeTemp[n] - timeTemp[n - 1];
            time_lap[n] = msToHMS(time_count[n]);
        }
    }

    restart() {
        if (!this.time) this.time = performance.now();
        if (!this.running) {
            this.running = true;
            requestAnimationFrame(this.step.bind(this));
        }
        this.reset();
        this.clear();
    }
    clear() {
        while (time_lap.length > 0) {
            time_lap.shift();
            time_count.shift();
            timeTemp.shift();
        }
    }

    step(timestamp) {
        if (!this.running) return;
        this.calculate(timestamp);
        this.time = timestamp;
        requestAnimationFrame(this.step.bind(this));
    }

    calculate(timestamp) {
        var diff = timestamp - this.time;
        // Hundredths of a second are 100 ms
        this.times[2] += diff / 10;
        // Seconds are 100 hundredths of a second
        if (this.times[2] >= 100) {
            this.times[1] += 1;
            this.times[2] -= 100;
        }
        // Minutes are 60 seconds
        if (this.times[1] >= 60) {
            this.times[0] += 1;
            this.times[1] -= 60;
        }
    }
    toNum(tim) {
        return tim[1] * 100 + Math.floor(tim[2]);
    }
    format(times) {
        //     return `\
        // ${pad0(times[0], 2)}:\
        // ${pad0(times[1], 2)}:\
        // ${pad0(Math.floor(times[2]), 2)}`;
        //   }
        return `\ ${times[1]}s\ ${pad0(Math.floor(times[2]), 2)}`;
    }
}

let stopwatch = new Stopwatch();

function changebtn() {
    var choice = document.getElementById("option").value;
    var rsbtn = document.getElementById("resetbtn");
    var strtbtn = document.getElementById("start");
    strtbtn.style.display = "block";
    rsbtn.style.display = "none";
    resetVal();
    stopwatch.clear();
}
// Show result
function showRes(n) {
    var sum = 0;
    var sumdel = 0;
    var avg;
    var avgdel;

    function printRes() {
        for (var i = 0; i <= n; i++) {
            sum = sum + time_count[i];
        }
        for (var i = 0; i <= n; i++) {
            sumdel = sumdel + delta[i];
        }
        avg = roundto2(sum / n);
        avgdel = roundto2(sumdel / n);
        document.getElementById("res1").innerHTML = l100(avgdel);
        document.getElementById("res2").innerHTML = msToHMS(avg);
    }
    if (n == 0) {
        document.getElementById("res1").innerHTML = l100(delta[0]);
        document.getElementById("res2").innerHTML = time_lap[0];
    } else if (n >= 1 && n <= 3) {
        printRes();
    } else {
        printRes();
        if (avgdel <= 5 && avg <= timemax) {
            modal.style.display = "block";
            // newPlr.timenum = avg;
            // newPlr.errs = avgdel;
            // newPlr.durr = msToHMS(avg);
        }
    }
}
// Modal
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
};

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
};
// < 100%
function l100(n) {
    if (n > 10000) return '>10000'
    else if (n == 10000) return 10000;
    else return n;
}

// Pop Up
function hidePop() {
    document.getElementById('popins').classList.remove("show");
}

function hideWarn(obj) {
    obj.classList.remove("show");
}

function showPop(obj) {
    obj.nextSibling.nextSibling.classList.add("show");
}
// Random Operations
function getRnd(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}
// Random a number in between specific length
function numLength(min, max) {
    var e = getRnd(min, max);
    return generate(e);
}
// Round
function roundto2(num) {
    return +(Math.round(num + "e+2") + "e-2");
}
// Add separator
function numDot(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

function showErr() {
    document.getElementById("down").style.display = "none";
    document.getElementById("again").style.display = "flex";
}

function goback() {
    document.getElementById("down").style.display = "flex";
    document.getElementById("again").style.display = "none";
}

function restart() {
    resetVal();
    goback()
    getOps();
}

function msToHMS(ms) {
    let sec = ms / 100;
    sec = sec % 100;
    let mili = ms - Math.floor(sec) * 100;
    return Math.floor(sec) + "s " + Math.floor(mili);
}

function pad0(value, count) {
    var result = value.toString();
    for (; result.length < count; --count) result = "0" + result;
    return result;
}