const questions = [   
     {  question: "Which is the largest country by population?",      
     options: ["India", "China", "USA", "Russia"],
      answer: "b"
    },
    {
      question: "What is the capital city of Australia?",
      options: ["Sydney", "Melbourne", "Canberra", "Brisbane"],
      answer: "c"
    },
    {
      question: "What is the currency of Japan?",
      options: ["Yen", "Won", "Dollar", "Euro"],
      answer: "a"
    },
    {
      question: "Which actor played the character of James Bond in the most films?",
      options: ["Sean Connery", "Roger Moore", "Daniel Craig", "Pierce Brosnan"],
      answer: "a"
    },
    {
      question: "Which country has the longest coastline?",
      options: ["Canada", "USA", "Russia", "Australia"],
      answer: "a"
    },
    {
      question: "Which novel begins with the line 'Call me Ishmael'?",
      options: ["Moby-Dick", "Pride and Prejudice", "To Kill a Mockingbird", "The Great Gatsby"],
      answer: "a"
    },
    {
      question: "What is the tallest mountain in the world?",
      options: ["Kilimanjaro", "Everest", "Denali", "Mont Blanc"],
      answer: "b"
    },
    {
      question: "What is the capital of Spain?",
      options: ["Madrid", "Barcelona", "Valencia", "Seville"],
      answer: "a"
    },
    {
      question: "What is the largest ocean in the world?",
      options: ["Pacific", "Atlantic", "Indian", "Arctic"],
      answer: "a"
    },
    {
      question: "What is the currency of Brazil?",
      options: ["Peso", "Real", "Dollar", "Euro"],
      answer: "b"
    },
    {
      question: "Who wrote the play 'Hamlet'?",
      options: ["William Shakespeare", "Arthur Miller", "Tennessee Williams", "Samuel Beckett"],
      answer: "a"
    },
    {
      question: "Which country won the 2018 FIFA World Cup?",
      options: ["Germany", "Brazil", "France", "Argentina"],
      answer: "c"
    },
    {
      question: "What is the smallest continent in the world?",
      options: ["Europe", "North America", "Asia", "Australia"],
      answer: "d"
    },
    {
      question: "What is the capital city of China?",
      options: ["Beijing", "Shanghai", "Hong Kong", "Taipei"],
      answer: "a"
    },
    {
      question: "Which planet is closest to the sun?",
      options: ["Venus", "Mars", "Mercury", "Jupiter"],
      answer: "c"
    },
    {
      question: "What is the largest desert in the world?",
      options: ["Sahara", "Gobi", "Arabian", "Antarctic"],
      answer: "a"
    },
    {
      question: "Who painted the famous artwork 'The Starry Night'?",
      options: ["Vincent van Gogh", "Leonardo da Vinci", "Pablo Picasso", "Michelangelo"],
      answer: "a"
    },
    ]
  
  const optionA = document.querySelector('#option-a')
  const optionB = document.querySelector('#option-b')
  const optionC = document.querySelector('#option-c')
  const optionD = document.querySelector('#option-d')
  const questionText = document.querySelector('#question')
  const submitBtn = document.querySelector('#submit-btn')
  
  let currentQuestion = 0
  let score = 0
  
  function showRandomQuestion() {
    const randomIndex = Math.floor(Math.random() * questions.length)
    const questionObj = questions[randomIndex]
  
    questionText.textContent = questionObj.question
    optionA.textContent = questionObj.options[0]
    optionB.textContent = questionObj.options[1]
    optionC.textContent = questionObj.options[2]
    optionD.textContent = questionObj.options[3]
  }
  
  function showNextQuestion() {
    showRandomQuestion()
  }
  
  function showResults() {
    const resultText = `You got ${score} out of ${questions.length} questions correct.`
    questionText.textContent = resultText
    optionA.style.display = 'none'
    optionB.style.display = 'none'
    optionC.style.display = 'none'
    optionD.style.display = 'none'
    submitBtn.style.display = 'none'
  }
  
  function checkedAnswer() {
    const selectedOption = document.querySelector('input[name="answer"]:checked')
    if (!selectedOption) {
      alert('Please select an answer.')
      return
    }
  
    const answer = selectedOption.value
    if (answer === questions[currentQuestion].answer) {
      score++
    }
  
    selectedOption.checked = false
    currentQuestion++
  
    if (currentQuestion === questions.length) {
      showResults()
    } else {
      showNextQuestion()
    }
  }
  
  submitBtn.addEventListener('click', checkedAnswer)
  showRandomQuestion()
  
