<template>
<div id="quiz-container">
    <div class="questions">
        <h4 id="stat"></h4>
        <h2 id="question"></h2>
        <ul id="options-container">
            <li class="option"><span id="option0" @click="answerCheck0"></span></li>
            <li class="option"><span id="option1" @click="answerCheck1"></span></li>
            <li class="option"><span id="option2" @click="answerCheck2"></span></li>
            <li class="option"><span id="option3" @click="answerCheck3"></span></li>
        </ul>
    </div>
    <button id="accScore" />
    <button id ="giveUp" type="button" @click="skipQuestion">SKIP IT</button>
</div>
</template>

<script>

export default {
    name: 'Quiz',
    methods: {
        answerCheck0() {
            this.$store.commit("answerCheck", 0);
        },
        answerCheck1() {
            let snd = new Audio("radical.mp3");
            snd.play();
            this.$store.commit("answerCheck", 1);
            
        },
        answerCheck2() {
            this.$store.commit("answerCheck", 2);
        },
        answerCheck3() {
            this.$store.commit("answerCheck", 3);
        },
        skipQuestion() {
            this.$store.commit("newQuestion")
        }
    },
    mounted() {
        let accScore = document.getElementById('accScore');
        accScore.innerHTML = 
            this.$store.state.userName
            + "'s current score: "
            + this.$store.state.score;
        this.$store.commit("displayQuestion");
    }
}
</script>

<style scoped>
#quiz-container {
    display: flex;
    flex-flow: column;
    justify-content: center;
}

#stat {
    padding: 10px;
    font-size: 30px;
    margin-left: 43%;
    color: white;
}

.questions {
    align-self: center;
    margin-top: 5vh;
    margin-bottom: 10vh;
    width: 85vw;
    height: 65vh;
    padding: 2vw;
    background: url(../../src/assets/skulls.jpg);
    background-size: cover;
    border-radius: 3vw;
    opacity: .95; 
}

#question {
    margin-bottom: 5rem;
    font-size: 50px;
    color: orange;
    text-align: center;
}

ul {
    columns: 2;
    -webkit-columns: 2;
    -moz-columns: 2;
    list-style: none
}

.option {
    margin-bottom: 5vh;
    width: 60%;
    height: 20%;
    background: rgb(46, 46, 46);
    color: white;
    text-align: center;
    font-size: 4vh;
    border-radius: 3vw;
}

.option:hover {
    background: orange;
}

li {
    margin-right: auto;
    margin-left: auto;
}

#accScore {
    position: absolute;
    align-self: center;
    margin-top: 15%;
    border-radius: 3vw;
}

#giveUp {
    position: absolute;
    align-self: center;
    margin-top: 25%;
    border-radius: 3vw;
}
</style>