<template>
    <div id ="app-container">
        <TitleBar />
        <Landing v-if="this.$store.state.landingStatus === true"/>
        <Quiz v-if="this.$store.state.quizStatus === true" />
        <Result v-if="this.$store.state.resultStatus === true" />
        <Answers v-if="this.$store.state.answerStatus === true" />
    </div>
</template>

<script>
import TitleBar from './components/TitleBar.vue'
import Landing from './components/Landing.vue'
import Quiz from './components/Quiz.vue'
import Result from './components/Result.vue'
import Answers from './components/Answers.vue'

export default {
  name: 'App',
  components: {
      TitleBar,
      Landing,
      Quiz,
      Result,
      Answers
  },
  methods: {

  }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    font-family: sans-serif;
    background: url(../src/assets/quizbg.gif);
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    height: 100vh;
}

#answer {
    margin-top: 2.5rem;
}

button {
    border: none;
    padding: 0.5rem;
    background: red;
    color: white;
    outline: none;
    font-size: 3vh;
}



</style>
