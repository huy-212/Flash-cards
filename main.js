const btn = document.querySelector(".Func-buttons");
const text = document.querySelector(".content");
const next = document.querySelector(".Next");
const pre = document.querySelector(".Previous");


let isShowingAnswer = false;

const showText = "Show Answer";
const hideText = "Hide Answer";



let cards = [
    {
        question: "What is your name?",
        answer: "Ethan!"
    },
    {
        question: "How old are you?",
        answer: "17"
    },
    {
        question: "Red or Blue?",
        answer: "Blue team!"
    } ,
    {
        question: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius assumenda dolorum et ad dolores minus. Ratione, dolorum obcaecati. Odio aperiam sequi natus eveniet illo vel totam quasi repudiandae in culpa.",
        answer: "bubibibi"
    }
];

let questionIndex = 0;

text.innerText = cards[questionIndex].question;
btn.innerText = showText;

//For mouse
btn.addEventListener("click", function() {
    isShowingAnswer = !isShowingAnswer;
    update();
});

next.addEventListener("click", function() {
    nextFunc();
});

pre.addEventListener("click", function(){
    preFunc();
});

//For keyboard
document.addEventListener("keydown", function(event){
    if (event.key === "ArrowRight") {
        nextFunc();
    }

    if (event.key === "ArrowLeft") {
        preFunc();
    }

    if (event.code === "Space") {
        isShowingAnswer = !isShowingAnswer;
        update();
    }
});

function update() {
    if (isShowingAnswer) {
        text.innerText = cards[questionIndex].answer;
        btn.innerText = hideText;
    } else {
        text.innerText = cards[questionIndex].question;
        btn.innerText = showText;
    }

}

function nextFunc() {
    if (questionIndex < cards.length - 1 ) {
        questionIndex++;
        isShowingAnswer = false;
    } else {
        questionIndex = 0;
    }
    update();
}

function preFunc() {
    if (questionIndex > 0) {
        questionIndex--;
        isShowingAnswer = false;
    } else {
        questionIndex = cards.length - 1;
    }
    update();
}
