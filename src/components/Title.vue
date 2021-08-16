<template>
  <div class="title">
    <h1>{{ msg }}</h1>
    <h3>Installed CLI Plugins</h3>
  </div>
</template>

<script>
export default {
  name: "Title",
  props: {
    msg: String,
  },
};
</script>
<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Syncopate:wght@700&display=swap");
*,
.title,
h3 {
  font-family: "Syncopate";
  color: #fff;
}
</style>
