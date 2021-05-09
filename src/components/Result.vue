<template>
<div id="result-container">
    <h2 id="score-title"></h2>
    <h2 id="score"></h2>
    <div id="button-container">
        <button type="button" id="restart-btn" @click="startOver">Start Over</button>
        <button type="button" id="check-answers" @click="checkAnswers">Check Answers</button>
    </div>
</div>
</template>

<script>

export default {
    name: 'Result',
    methods: {
        startOver() {
            this.$store.commit("startOver");
        },
        checkAnswers() {
            this.$store.commit("checkAnswers");
        }
    },
    mounted() {
        let scoreTitle = document.getElementById("score-title");
        scoreTitle.innerHTML =
            this.$store.state.userName
            + "'s score: "
            + this.$store.state.score;
    }
}

</script>
<style scoped>
#result-container {
    position: relative;
    margin: auto;
    top: 3rem;
    background: url(../../src/assets/gameOver.jpg);
    background-size: cover;
    opacity: .9; 
    width: 90vh;
    text-align: center;
    color: yellow;
    font-size: 3vh;
    padding: 1vw;
}

#button-container {
    display: flex;
    justify-content: space-evenly;
}

#restart-btn, #check-answers {
    margin-top: 55vh;
    border-radius: 3vw;
}
</style>