<template>
  <div id="app">
    <Navbar />

    <div id="main">
      <MainPage msg="Hello Vue in CodeSandbox!" />
    </div>
  </div>
</template>

<script>
import MainPage from "./components/MainPage";
import Navbar from "./components/Navbar";

export default {
  name: "App",
  components: {
    MainPage,
    Navbar,
  },
};
</script>

<style>
#app {
  font-family: Inter;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
}
#main {
  margin: 20px;
}
</style>
