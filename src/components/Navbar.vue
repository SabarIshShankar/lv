<template>
  <div id="navbar">
    <div class="nav">
      <input type="checkbox" id="nav-check" />
      <div class="nav-header">
        <div class="nav-title">CODER.</div>
      </div>
      <div class="nav-btn">
        <label for="nav-check">
          <span></span>
          <span></span>
          <span></span>
        </label>
      </div>

      <div class="nav-links">
        <a>Youtube</a>
        <a>Discord</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Navbar",
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
