import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({

  state: {
    landingStatus: true,
    quizStatus: false,
    resultStatus: false,
    answerStatus: false,
    userName: "boring_person",
    score: 0,
    round: 0,
    questionList: [
      {
        question: "What color was Napoleon's white horse?",
        option: ['Brown', "White", "White is a shade",'Grey'],
        answer: 1
      },
      {
        question: 'What is the correct reading of the following Kanji: 鼠?',
        option: ['さる','きりん','へび','ねずみ'],
        answer: 3
      },
      {
        question: 'How many dalmatians are there?',
        option: ['99','100','101','About tree fiddy'],
        answer: 2
      },
      {
        question: 'How many weeks does it take to become a fullstack developer?',
        option: ['5','It depends','12','Hey Google...'],
        answer: 1
      },
      {
        question: 'Is this a valid MVP?',
        option: ['No','Sure','Maybe','Ask again'],
        answer: 1
      }
  ]
  },

  mutations: {
    quizStart(state, payload) {
      state.landingStatus = false;
      state.quizStatus = true;
      if (payload) {
        state.userName = payload;
      }
    },
    displayQuestion(state) {
      let question = document.getElementById('question');
      let option0 = document.getElementById('option0');
      let option1 = document.getElementById('option1');
      let option2 = document.getElementById('option2');
      let option3 = document.getElementById('option3');
      let stat = document.getElementById('stat');

      question.innerHTML = state.questionList[state.round].question;
      option0.innerHTML = state.questionList[state.round].option[0];
      option1.innerHTML = state.questionList[state.round].option[1];
      option2.innerHTML = state.questionList[state.round].option[2];
      option3.innerHTML = state.questionList[state.round].option[3];
      stat.innerHTML = "Question " + (state.round + 1) + " of " + state.questionList.length;
    },
    answerCheck(state, selectedAnswer) {
      let accScore = document.getElementById('accScore');

      if (selectedAnswer === state.questionList[state.round].answer) {
        if (state.round < state.questionList.length -1) {
          let sfx = new Audio(require("./assets/radical.mp3"));
          sfx.play();
        }
        state.score += 100;
        accScore.innerHTML =
          state.userName
          + "'s current score: "
          + state.score;
      } else {
        if (state.round < state.questionList.length -1) {
          let sfx = new Audio(require("./assets/youSuck.mp3"));
          sfx.play();
        }
      }
      this.commit("newQuestion");
    },
    newQuestion(state) {
      if (state.round < state.questionList.length -1) {
        state.round ++
        this.commit("displayQuestion");
      } else {
        state.quizStatus = false;
        state.resultStatus = true;
        let sfx = new Audio(require("./assets/gameOver.mp3"));
        sfx.play();
      }
    },
    startOver(state) {
      state.resultStatus = false;
      state.answerStatus = false,
      state.landingStatus = true;
      state.userName = "boring_person";
      state.score = 0;
      state.round = 0;
    },

    checkAnswers(state) {
      state.resultStatus = false;
      state.answerStatus = true;
    },

    loadAnswers(state) {
      let answers = document.getElementById('answers');

      for (let j = 0; j < state.questionList.length; j++) {
        let list = document.createElement('li');
        let correctAnswer = state.questionList[j].answer
        console.log(correctAnswer)
        list.innerHTML = state.questionList[j].option[correctAnswer];
        answers.appendChild(list);
      }
    }
  }
 
});
