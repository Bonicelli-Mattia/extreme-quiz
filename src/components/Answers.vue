<template>
    <div id="answers-container">
        <h2>Answers</h2>
        <ol id="answers">
        </ol>
        <button type="button" id="restart-btn" @click="startOver">Restart</button>
    </div>
</template>

<script>
export default {
    name: 'Answers',
    methods: {
        startOver() {
            this.$store.commit("startOver");
        }
    },
    mounted() {
        this.$store.commit("loadAnswers");
    }
}
</script>

<style scoped>
#answers-container {
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

#answers {
    margin-top: 3vh;
    margin-bottom: 25vh;
}

#restart-btn {
    border-radius: 3vw;
}
</style>