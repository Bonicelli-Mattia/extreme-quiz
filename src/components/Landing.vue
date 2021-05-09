<template>
<div id="landing-container">
  <input id="username-input" type="text" placeholder="Choose Username"/>
  <button id="start" @click="startGame">CLICK TO JOIN</button>
</div>
</template>

<script>
export default {
  name: 'Landing',
  methods: {
    startGame() {
      let userTextbox = document.getElementById('username-input');
      this.$store.commit("quizStart", userTextbox.value);
    }
  }
}
</script>

<style scoped>

#landing-container {
  display: flex;
  justify-content: center;
}

#start {
  width: 50vw;
  height: 22vh;
  margin-top: 10%;
  background: url(../../src/assets/gameOver.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  color:red;
  font-size: 10vh;
  border: none;
  border-radius: 3vw;
}

#username-input {
  z-index: 3;
  position: absolute;
  background: rgb(31, 31, 31);
  border: none;
  border-radius: 3vw;
  width: 30vh;
  height: 5vh;
  margin-top: 25%;
  font-size: 3vh;
  text-align: center;
  color: red;
}
</style>