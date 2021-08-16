<template>
  <div id="app">
    <Title msg="Hello Vue in CodeSandbox!" />
  </div>
</template>

<script>
import Title from "./components/Title";

export default {
  name: "App",
  components: {
    Title,
  },
};
</script>

<style>
* {
  font-family: Syncopate;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #fff;
  background-color: black;
}
* {
  box-sizing: border-box;
}
</style>
