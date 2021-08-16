<template>
  <nav class="nav">
    <h1 class="nav__title">
      <router-link to="/">{{ content.title }}</router-link>
    </h1>
    <transition-group tag="menu" name="nav__item" class="nav__menu">
      <li
        v-for="label in labels"
        class="nav__item"
        :key="label"
        @click="navBack"
      >
        <i class="nav__item--icon"></i>
        <span class="nav__item--label">{{ label }}</span>
      </li>
    </transition-group>
  </nav>
</template>

<script>
export default {
  name: "blog-nav",
  props: {
    navs: Number,
    content: Object,
    filters: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    labels() {
      return Object.keys(this.filters).map(
        (filter) => this.content.labels[filter]
      );
    },
  },
  methods: {
    navBack() {
      if (this.navs && !this.filters.author) this.$router.go(-1);
      else this.$router.push("/");
    },
  },
};
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 0px;
}

.nav {
  height: 50px;
  width: 100%;
  background-color: #ffffff;
  position: relative;
}

.nav > .nav-header {
  display: inline;
}

.nav > .nav-header > .nav-title {
  display: inline-block;
  font-size: 22px;
  color: rgb(0, 0, 0);
  padding: 10px 10px 10px 10px;
  font-weight: 700;
  color: red;
}

.nav > .nav-btn {
  display: none;
}

.nav > .nav-links {
  display: inline;
  float: right;
  font-size: 18px;
}

.nav > .nav-links > a {
  display: inline-block;
  padding: 13px 10px 13px 10px;
  text-decoration: none;
  color: #000000;
  font-size: 18px;
}

.nav > .nav-links > a:hover {
  background-color: rgb(255, 255, 255);
  border-left: 6px solid red;
  transition: 0.4s;
}

.nav > #nav-check {
  display: none;
}

@media (max-width: 600px) {
  .nav > .nav-btn {
    display: inline-block;
    position: absolute;
    right: 0px;
    top: 0px;
  }
  .nav > .nav-btn > label {
    display: inline-block;
    width: 50px;
    height: 50px;
    padding: 13px;
  }
  .nav > .nav-btn > label:hover,
  .nav #nav-check:checked ~ .nav-btn > label {
    background-color: rgb(255, 255, 255);
  }
  .nav > .nav-btn > label > span {
    display: block;
    width: 25px;
    height: 10px;
    border-top: 2px solid rgb(0, 0, 0);
  }
  .nav > .nav-links {
    position: absolute;
    display: block;
    width: 100%;
    background-color: rgb(255, 255, 255);
    height: 0px;
    transition: all 0.3s ease-in;
    overflow-y: hidden;
    top: 50px;
    left: 0px;
  }
  .nav > .nav-links > a {
    display: block;
    width: 100%;
  }
  .nav > #nav-check:not(:checked) ~ .nav-links {
    height: 0px;
  }
  .nav > #nav-check:checked ~ .nav-links {
    height: calc(100vh - 50px);
    overflow-y: auto;
  }
}
::selection {
  color: rgb(0, 0, 0);
  background-color: red;
}
</style>
