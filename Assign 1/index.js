let attempt = 11;
let arr = [];
const msg = document.querySelector(".msg");
const guess = document.querySelector("input");
const btn = document.querySelector(".btn");
const last = document.querySelector(".last");
let play = false;
const insideArena = document.querySelector(".insideArena");
let ans = Math.floor(Math.random() * 100);
console.log(ans);
let uvalue;
btn.addEventListener("click", () => {
    uvalue = guess.value;
    attempt--;
    if (attempt === -1) {
        console.log(uvalue);
        attempt = 11;
        ans = Math.floor(Math.random() * 100);
    }
    if (attempt === 10) {
        guess.classList.toggle("hidden");
        btn.innerHTML = "Guess";
        msg.innerHTML = "You have " + (attempt) + " attempt for guessing";
    }
    if (attempt === 0) {
        arr.push(uvalue);
        if (ans == uvalue) {
            msg.innerHTML = "You won"
        }
        else {
            msg.innerHTML = "Game Over";
        }

        guess.classList.toggle("hidden");
        btn.innerHTML = "Play Again";
        arr = [];
        guess.value = "";
    }
    if (attempt > 0 && attempt < 10) {
        btn.innerHTML = "Guess";
        arr.push(uvalue);
        console.log(uvalue);
        if (ans > uvalue) {
            msg.innerHTML = "You gussed it low, You have " + (attempt) + " attempt for guessing, your last guess are </br> (" + arr + ")";
        }
        else if (ans < uvalue) {
            msg.innerHTML = "You gussed it high, You have " + (attempt) + " attempt for guessing, your last guess are </br> (" + arr + ")";
        }
        else {
            guess.classList.toggle("hidden");

            msg.innerHTML = "You won";

            btn.innerHTML = "Play Again";

            attempt = 11;

            arr = [];
        }
        guess.value = "";
        console.log(arr);
    }
});
