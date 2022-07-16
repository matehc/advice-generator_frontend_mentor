let adviceNum = document.querySelector(".advice__number");
const advice__text = document.querySelector(".advice__text");
const btn = document.querySelector(".dice-button");


// const ADVICE_URL = "https://api.adviceslip.com/advice";


async function getAdvice () {
    let res = await fetch("https://api.adviceslip.com/advice");
    let data = await res.json(); 
    let {slip} = data;
    console.log("getAdvice called");

    adviceNum.innerHTML = slip.id;
    advice__text.innerHTML = slip.advice;
}



btn.addEventListener("click", (e) => {
    getAdvice();
})

window.addEventListener("load", () => {
    getAdvice();
})

