<template>
  <div class="menu">
    <div class="City_Menu_Top">
      <img alt="image1" src="../assets/menuicon.png" />
      <h1>Menu<span>空港店</span></h1>
    </div>

    <div class="menusTOP">
      <h2>●モーニングサービス<span>8:00 ~ 11:00</span></h2>
      <div class="menuBOX">
        <img alt="image1" src="../assets/airport_01.png" />
        <img alt="image1" class="air_02" src="../assets/airport_02.png" />
        <img alt="image1" src="../assets/airport_03.png" />
      </div>
      <div class="menuText">
        <p>
          ①[モーニングAセット] <br />
          ②[モーニングBセット] <br />
          ③[モーニングCセット]
        </p>
      </div>

      <div class="menuBOX">
        <img alt="image1" src="../assets/airport_04.png" />
        <img alt="image1" src="../assets/airport_05.png" />
      </div>
      <div class="menuText">
        <p>①[ピザトーストセット] <br />②[サンドイッチセット]</p>
      </div>
    </div>

    <div class="menus">
      <h2>●ランチタイム<span>11:30 ~ 14:15</span></h2>
      <div class="menuBOX">
        <img alt="image1" src="../assets/airport_06.png" />
        <img alt="image1" src="../assets/airport_07.png" />
        <img alt="image1" src="../assets/airport_08.png" />
        <img alt="image1" src="../assets/airport_09.png" />
      </div>
      <div class="menuText">
        <p>
          ①[日替わりランチ] <br />②[パスタ] <br />
          ③[週替わりハンバーグランチ] <br />④[週替わりドリアランチ]
        </p>
      </div>

      <div class="menuBOX">
        <img alt="image1" src="../assets/airport_10.png" />
        <img alt="image1" src="../assets/airport_11.png" />
        <img alt="image1" src="../assets/airport_12.jpg" />
        <img alt="image1" src="../assets/airport_13.png" />
      </div>
      <div class="menuText">
        <p>
          ①[週替わりカレーランチ] <br />②[週替わりオムライスランチ]
          <br />③[週替わりミニハンバーグとミニドリアのコンビネーションランチ]
          <br />
          ④[週替わりミニパスタとミニドリアのコンビネーションランチ]
        </p>
      </div>
    </div>
    <!-- ここバグっぽい？ -->
    <div class="menus">
      <h2>
        ●その他<span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
        >
      </h2>
      <div class="menuBOX">
        <img alt="image1" src="../assets/airport_14.png" />
        <img alt="image1" src="../assets/airport_15.png" />
        <img alt="image1" src="../assets/airport_16.png" />
      </div>
      <div class="menuText">
        <p>
          その他、焼き菓子やプリン、パン、お子様ランチ等もご用意しております<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
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

.City_Menu_Top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 225px;
  background-image: url(../assets/airport_02.png);
  background-color: rgba(255, 255, 255, 0.65);
  background-blend-mode: lighten;
  background-size: cover;
}

.City_Menu_Top h1 {
  font-weight: bold;
  letter-spacing: 5px;
  color: #313031;
  font-size: 36px;
  margin-left: 23.5px;
}

.City_Menu_Top img {
  width: 60px;
  height: 60px;
}

.menuBOX {
  text-align: center;
  margin-top: 1.5%;
}

.menuBOX .air_02 {
  width: 320px;
  height: 280px;
}

.menuBOX a {
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  color: #3b275e;
  font-weight: bold;
}

.menuBOX img {
  width: 220px;
  height: 280px;
  margin: 2%;
}

.menuText {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.MenuTextFoot {
  height: 300px;
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

.menusTOP {
  margin-top: 75px;
}

@media (max-width: 1919px) {
  .menuText {
    text-align: center;
    font-size: 14.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .menuBOX img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }

  .menuBOX .air_02 {
    width: 290px;
    height: 250px;
  }
}

@media (max-width: 900px) {
  .menuText {
    text-align: center;
    font-size: x-small;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .MenuTextFoot {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .menus {
    margin-top: 35px;
  }

  .menuBOX img {
    width: 160px;
    height: 220px;
    margin: 2%;
  }

  .menuBOX .air_02 {
    width: 260px;
    height: 220px;
  }
}
</style>
