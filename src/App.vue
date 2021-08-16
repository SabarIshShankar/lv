<template>
  <div id="app">
    <Title className="right " msg="DESIGN" />
    <Body />
  </div>
</template>

<script>
import Title from "./components/Title";
import Body from "./components/Body";

export default {
  name: "App",
  components: {
    Title,
    Body,
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
  margin: 4px;
  margin-top: 12px;
}
</style>
