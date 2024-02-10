
let questionBank = [
  {
    "questionNo": '1',
    "question": "Who is Prime Minister of India?",
    "options": [
      "Narendra Modi",
      "Rahul Gandhi",
      "Amit Jain",
      "Nirmala Sitaraman ji"
    ],
    "correct": "Narendra Modi",
  },
  {
    "questionNo": '2',
    "question": "Who is President  of India?",
    "options": [
      "Modi Ji",
      "Rahul Gandhi",
      "Draupadi Murmu",
      "Nirmala Sitaraman"
    ],
    "correct": "Draupadi Murmu",
  },
  {
    "questionNo": 3,
    "question": "Who is first Prime Minister of India?",
    "options": [
      "Modi Ji",
      "Jawarhar Lal Nehru",
      "Amit Jain",
      "Nirmala Sitaraman"
    ],
    "correct": "Jawarhar Lal Nehru",
  },
  {
    "questionNo": 4,
    "question": "Who is second Prime Minister of India?",
    "options": [
      "Modi Ji",
      "Rahul Gandhi",
      "Amit Jain",
      "Lal Bahadur Shastri"
    ],
    "correct": "Lal Bahadur Shastri",
  },
  {
    "questionNo": 5,
    "question": "Who is first President of India?",
    "options": [
      "Modi Ji",
      "Rahul Gandhi",
      "Rajendra Prasad",
      "Nirmala Sitaraman"
    ],
    "correct": "Rajendra Prasad",
  },
  {
    "questionNo": "1",
    "question": "Who is the current President of the United States?",
    "options": [
      "Joe Biden",
      "Donald Trump",
      "Barack Obama",
      "Hillary Clinton"
    ],
    "correct": "Joe Biden"
  },
  {
    "questionNo": "10",
    "question": "What is the capital city of Australia?",
    "options": [
      "Sydney",
      "Melbourne",
      "Canberra",
      "Brisbane"
    ],
    "correct": "Canberra"
  },
  {
    "questionNo": "9",
    "question": "Which element has the chemical symbol 'O'?",
    "options": [
      "Oxygen",
      "Gold",
      "Osmium",
      "Radon"
    ],
    "correct": "Oxygen"
  },
  {
    "questionNo": "8",
    "question": "Who wrote 'To Kill a Mockingbird'?",
    "options": [
      "J.K. Rowling",
      "George Orwell",
      "Harper Lee",
      "Ernest Hemingway"
    ],
    "correct": "Harper Lee"
  },
  {
    "questionNo": "7",
    "question": "Which ocean is the largest in the world?",
    "options": [
      "Atlantic Ocean",
      "Indian Ocean",
      "Southern Ocean",
      "Pacific Ocean"
    ],
    "correct": "Pacific Ocean"
  },
  {
    "questionNo": "6",
    "question": "Who painted the Mona Lisa?",
    "options": [
      "Vincent van Gogh",
      "Pablo Picasso",
      "Leonardo da Vinci",
      "Claude Monet"
    ],
    "correct": "Leonardo da Vinci"
  }  
]
let currentIndex = 0;
showQuestion(currentIndex);
let score = 0;
function showQuestion(index) {
  QNo.innerText = `${index + 1}-`;
  question.innerText = questionBank[index].question;
  let optionsContainer = document.querySelectorAll(".question>button");
  optionsContainer = Array.from(optionsContainer)
  optionsContainer.forEach((elem, i) => {
    elem.innerText = questionBank[index].options[i];
  })
}
next.addEventListener("click", () => nextQuestion(currentIndex + 1));
function nextQuestion(index) {
  reset();
  if (index >= questionBank.length) {
    document.querySelector(".content").innerHTML = `<p>Quiz Over</p><p>You had Scored ${score} out of ${questionBank.length}`;
    document.getElementById("next").style.display = "none";
    // next.addEventListener("click", () => showQuestion(0));

    return;
  }
  currentIndex = index;
  showQuestion(currentIndex);
}
let buttonArr = Array.from(document.querySelectorAll(".question>button"));

function isCorrectAns(e){
  let userClickedValue = e.target.innerText;
  if (userClickedValue === questionBank[currentIndex].correct) {
    return true;
  }
  else{
    return false;
  }
}

document.querySelector(".question").addEventListener("click", (e) => {
  // check for the correct answer
  let userClickedValue = e.target.innerText;

  if (isCorrectAns(e)) {
    score++;
    let id = e.target.id;
    buttonArr.forEach((item, i) => {
      let id = item.id;
      document.getElementById(id).disabled = true;
    })
    e.target.style.background = "rgb(127, 255, 178)";
  }
  else {
    let arr=questionBank[currentIndex].options;
    let correctAnsIndex=arr.indexOf(questionBank[currentIndex].correct);
   document.getElementById(`option${correctAnsIndex+1}`).style.background = "rgb(127, 255, 178)";
    e.target.style.background = "rgb(250, 124, 124)";
    buttonArr.forEach((item, i) => {
      let id = item.id;
      document.getElementById(id).disabled = true;
    })
  }
})

function reset() {
  buttonArr.forEach(elem => {
    let id = elem.id;
    document.getElementById(id).disabled = false;
    elem.style.background = "none";
  })
}
