<template>
  <div class="rect_city">
    <div class="Recruit_Top">
      <img alt="image1" src="../assets/RecruteIcon.png" />
      <h1>Recruit <span>市役所店</span></h1>
    </div>

    <div class="recTOP">
      <h2>●メンバーさん募集</h2>
      <p>
        障がいを持たれた方で家で過ごされている方。<br />
        一歩外に出て ゆるり福祉会 cafe rest pica pica 市役所店で<br />一緒に働いてみませんか？<br />
        カフェ業務全般の中から個々にできる作業を探していきます。<br />
        気軽に作業見学にお申し込みください。<br /><br />℡ 072-999-9922
      </p>
    </div>

    <div class="rects">
      <h2>●作業風景</h2>

      <div class="Recruit">
        <img alt="image1" src="../assets/city_member01.png" />
        <img alt="image1" src="../assets/city_member02.png" />
      </div>

      <p>カフェ業務全般の中から個々にできる作業を探していきます。</p>
    </div>

    <div class="rects_foot">
      <h2>●他店について</h2>
      <p>
        空港店に関しての募集情報は以下をご覧ください。<br /><br />
        <router-link class="route2" to="/recruit-1">空港店募集情報</router-link>
      </p>
    </div>
  </div>
</template>

<style>
body {
  width: 100%;
}

.temp {
  top: 2000px;
}

.route2 {
  letter-spacing: 1.25px;
  color: #3b275e;
  font-weight: bold;
}

.rect_city h2 {
  margin-left: 15%;
  font-weight: bold;
  letter-spacing: 3px;
  color: #313031;
  border-bottom: 1.75px solid rgb(85, 82, 82);
  width: 70%;
  font-size: 25px;
}

.Recruit_Top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 225px;
  background-image: url(../assets/city_member01.png);
  background-color: rgba(255, 255, 255, 0.65);
  background-blend-mode: lighten;
  background-size: cover;
}

.Recruit_Top h1 {
  font-weight: bold;
  letter-spacing: 5px;
  color: #313031;
  font-size: 36px;
  margin-left: 23.5px;
}

.Recruit_Top img {
  width: 60px;
  height: 60px;
}

.Recruit {
  text-align: center;
  margin-top: 1.5%;
}

.Recruit a {
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  color: #3b275e;
  font-weight: bold;
}

.Recruit img {
  width: 220px;
  height: 280px;
  margin: 2%;
}

.Recruit .image1 {
  width: 580px;
  height: 230px;
}

.rect_city p {
  margin-top: 75px;
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.rect_cityTextFoot {
  height: 105px;
  align-items: center;
}

.rects {
  margin-top: 3.25%;
}

.rects_foot {
  margin-top: 3.25%;
  padding-bottom: 4.5%;
}

span {
  font-size: 20px;
  margin-left: 20px;
}

.recTOP {
  margin-top: 75px;
}

@media (max-width: 1919px) {
  .Recruit img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }

  .Recrui .air_02 {
    width: 290px;
    height: 250px;
  }

  .rect_city p {
    margin-top: 50px;
    text-align: center;
    font-size: 14.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }
}

@media (max-width: 900px) {
  .rect_city p {
    text-align: center;
    font-size: x-small;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .Recruit img {
    width: 160px;
    height: 220px;
    margin: 2%;
  }

  .Recrui .air_02 {
    width: 260px;
    height: 220px;
  }

  .rects {
    margin-top: 50px;
  }
}
</style>
