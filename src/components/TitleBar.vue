<template>
<div id="title-container">
    <img id="firstImage" src="../assets/logo.png" alt="skull thing" class="skull">
    <img id="secondImage" src="../assets/logo.png" alt="skull thing" class="skull">
    <h1 id="title">EXTREME QUIZ</h1>
</div>
</template>

<script>
export default {
  name: 'TitleBar',
}
</script>

<style scoped>

#title {
  text-align: center;
  padding: 50px;
  font-size: 5vh;
  background: url(../../src/assets/containerBG.gif);
  background-size: contain;
  color: lightgreen;
}

#firstImage {
  margin-left: 31%;
}

#secondImage {
  margin-left: 65%;
}

.skull {
  z-index: 2;
  position: fixed;
  width: 4%;
  margin-top: 1.5%;
}

</style>