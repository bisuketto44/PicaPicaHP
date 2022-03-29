<template>
  <div id="app">
    <div class="nav">
      <div>
        <router-link to="/">
          <img
            alt="picapicalogo"
            src="./assets/PicapicaLogo-removebg-preview.png"
        /></router-link>
        <div class="selecter">
          <router-link to="/">ゆるり福祉会</router-link> |
          <router-link to="/store1">空港店</router-link> |
          <router-link to="/store2">市役所店</router-link>
        </div>
      </div>
    </div>
    <div class="maincontent"><router-view></router-view></div>
  </div>
</template>

<script>
</script>


<style>
/* id = # class = . で指定する */

* {
  box-sizing: border-box;
}

body {
  margin: 0;
  font-family: "Lato", "Hiragino Maru Gothic ProN", "ヒラギノ角ゴ ProN W3",
    "sans-serif", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
  max-width: 1980px;
}

.nav {
  padding: 30px;
  /* z-indexを10に指定してください */
}

.nav img {
  width: 300.75px;
  height: 75.75px;
}

.selecter {
  font-weight: bold;
  float: right;
  padding-top: 40px;
}

.selecter a {
  color: #312f31;
  text-decoration: none;
}

/* メインコンテンツの背景色を決定します */
.maincontent {
  background: #eeeeee;
  padding-top: 0px;
}

.nav a.router-link-exact-active {
  color: #52ca62;
}
</style>
