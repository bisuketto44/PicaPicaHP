<template>
  <div class="menu">
    <div class="Recruit_Top">
      <img alt="image1" src="../assets/RecruteIcon.png" />
      <h1>Recruit</h1>
    </div>

    <div class="recTOP">
      <h2>●利用者さん募集</h2>
      <div class="recToptext">
        <p>
          PicaPica作業所で一緒に働いてみませんか？<br />
          お店の接客・パン作り・弁当作り・厨房作業・軽作業など<br>色々なお仕事があります。
          お気軽にお問い合わせください。<br /><br />℡ 072-997-7475
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●カフェ業務</h2>
      <div class="Recruit">
        <img alt="image1" src="../assets/city_member01.png" />
        <img alt="image1" src="../assets/city_member02.png" />
      </div>
      <div class="Recrute_Texts">
        <p>カフェ業務全般の中から個々にできる作業を探していきます。</p>
      </div>
    </div>

    <div class="menus">
      <h2>●クッキー・焼き菓子作り</h2>
      <div class="Recruit">
        <img alt="image1" class="image1" src="../assets/airport_member01.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>
          PicaPica空港店では、クッキーやお菓子を製造しています。<br />クッキーの仕上げラッピングは牛乳パック再生かみすき和紙と<br />PicaPicaメンバーさんのイラストでかわいくなっています。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●手作り弁当・宅配弁当</h2>
      <div class="Recruit">
        <img alt="image1" class="image1" src="../assets/airport_member03.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>
          メンバー・スタッフの毎日の昼食作りから始まったお弁当作りも<br />調理場や食材を吟味し地域の方々に<br>宅配弁当として提供するまでになりました。<br />仕込み作業・調理・弁当詰め・配達・回収・洗浄などを行います。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●その他</h2>
      <div class="MenuTextFoot">
        <div class="menuTextfotter">
          <p>
            その他、パン作りや軽作業、畑仕事などの業務もあります。
            <br />
            気軽に作業見学にお申し込みください。
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  width: 100%;
}

.menu h2 {
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

.Recrute_Texts {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.menuTextfotter {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.recToptext {
  margin-top: 100px;
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.MenuTextFoot {
  height: 235px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.menus {
  margin-top: 3.25%;
}

span {
  font-size: 20px;
  margin-left: 20px;
}

.recTOP {
  margin-top: 75px;
}

@media (max-width: 1919px) {
  .Recrute_Texts {
    text-align: center;
    font-size: 14.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .Recruit img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }

  .Recrui .air_02 {
    width: 290px;
    height: 250px;
  }

  .recToptext {
    margin-top: 100px;
    text-align: center;
    font-size: 14.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }
}

@media (max-width: 900px) {
  .Recrute_Texts {
    text-align: center;
    font-size: 12.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .recTOP .recToptext {
    margin-top: 100px;
    text-align: center;
    font-size: 10.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .menuTextfotter {
    text-align: center;
    font-size: 20.5px;
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

  .recToptext {
    margin-top: 100px;
    text-align: center;
    font-size: 14.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .menus{
    margin-top: 50px;
  }
}
</style>
