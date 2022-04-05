<template>
  <div class="app">
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
          <router-link to="/store2">市役所店</router-link> |
          <router-link to="/recruit">募集情報</router-link>
        </div>
      </div>
    </div>
    <div class="maincontent"><router-view></router-view></div>
    <div class="footer">© 2022 社会福祉法人ゆるり福祉会 Pica Pica</div>
  </div>
</template>

<script>
</script>


<style>
/* id = # class = . で指定する */

* {
  box-sizing: border-box;
}

.app {
  min-height: 100vh; /* ←コンテンツの高さの最小値＝ブラウザの高さに指定 */
  position: relative; /* ←相対位置 */
  padding-bottom: 70px; /* ←フッターの高さを指定 */
  box-sizing: border-box;

  margin: 0;
  font-family: "Lato", "Hiragino Maru Gothic ProN", "ヒラギノ角ゴ ProN W3",
    "sans-serif", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;

  width: 100%;
}

.footer {
  position: absolute; /* ←絶対位置 */
  display: flex;
  justify-content: center;
  align-items: center;

  bottom: 0;
  left: 0;
  width: 100%;
  height: 60px;

  font-size: 14px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

/* HTMLの幅を固定するとそこに合わせないとダメ */

.nav {
  padding: 15px;
  /* z-indexを10に指定してください */
  width: 100%;
  height: 110px;
  background-color: rgba(255, 255, 255, 0.5);
  position: fixed;
  top: 0;
  z-index: 10;
  border-bottom: 1.5px solid rgba(85, 82, 82, 0.425);
}

body {
  margin: 0;
  font-family: "Lato", "Hiragino Maru Gothic ProN", "ヒラギノ角ゴ ProN W3",
    "sans-serif", "sans-serif";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 0 auto;
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
  margin-top: 110px;
  background: #eeeeee;
  padding-top: 0px;
}

.nav a.router-link-exact-active {
  color: #52ca62;
}

@media (max-width: 9999px) {
  .app {
    width: 1400px;
    min-width: 1400px;
  }
  .nav {
    width: 1400px;
    min-width: 1400px;
  }
}

@media (max-width: 900px) {
  .app {
    width: 900px;
    min-width: 900px;
  }
  .nav {
    width: 900px;
    min-width: 900px;
  }
}
</style>
