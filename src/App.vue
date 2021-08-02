
<template>
  <div id="app">
    <Navbar />

    <div id="main">
      <MainPage />
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
  font-family: Poppins;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #000;
  margin-left: 10px;
  margin-right: 10px;
}
#main {
  margin: 20px;
}
</style>
