var counter = 0;
var min_code = 1;
var max_code = 99;
var guessNum = 0;
var ansCode = Math.floor(Math.random() * 99 + 1);

console.log("ansCode = " + ansCode);

function setSmoke(counter) {
    switch (counter) {
        case 1:
            document.img1.src = "img/smoke.png";
            break;

        case 2:
            document.img2.src = "img/smoke.png";
            break;

        case 3:
            document.img3.src = "img/smoke.png";
            break;

        case 4:
            document.img4.src = "img/smoke.png";
            break;

        case 5:
            document.img5.src = "img/smoke.png";
            break;

        case 6:
            document.img6.src = "img/smoke.png";
            alert("次數已經到達上限\n" + "總共猜了6次");
            Restart();
            break;
    }
}


function doGuess() {

    guessNum = code.value;
    if (guessNum == ansCode) {
        alert("恭喜答對了" + "總共猜了" + (counter + 1) + "次\n再試一次!");
        Restart();
    } else {
        if (ansCode < guessNum) {
            max_code = guessNum;
        } else {
            min_code = guessNum;
        }
        counter++;
        setSmoke(counter);
        alert(min_code + " ~ " + max_code);
        code.value = "";
    }
}

function Restart() {

    alert('Restart');
    var counter = 0;
    var min_code = 1;
    var max_code = 99;
    var guessNum = 0;
    var ansCode = Math.floor(Math.random() * 99 + 1);
    code.value = "";
    bombs = document.querySelectorAll("#bombs img");
    for (var i = 0; i < bombs.length; i++) {
        bombs[i].src = "img/bomber.png";
    }
}
