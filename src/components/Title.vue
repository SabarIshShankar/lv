<template>
  <div class="title">
    <h1>{{ msg }}</h1>
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
  position: absolute;
  right: 0;
  padding-right: 5px;
}

hr {
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 0.6px solid rgb(17, 17, 17);
}
</style>

