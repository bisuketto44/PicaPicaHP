<template>
  <div class="menu">
    <div class="City_Menu_Top">
      <img alt="image1" src="../assets/menuicon.png" />
      <h1>Menu<span>空港店</span></h1>
    </div>

    <div class="menusTOP">
      <h2>●モーニングサービス<span>8:00 ~ 11:00</span></h2>
      <div class="menuBOX">
        <div class="floatmenus">
          <p class="menuText_Z">[モーニングAセット]</p>
          <img alt="image1" src="../assets/airport_01.png" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">[モーニングBセット]</p>
          <img alt="image1" class="air_02" src="../assets/airport_02.png" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">[モーニングCセット]</p>
          <img alt="image1" src="../assets/airport_03.png" />
        </div>
      </div>

      <div class="menuBOX">
        <div class="floatmenus">
          <p class="menuText_Z">[ピザトーストセット]</p>
          <img alt="image1" src="../assets/airport_04.png" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">[サンドイッチセット]</p>
          <img alt="image1" src="../assets/airport_05.png" />
        </div>
      </div>
    </div>

    <div class="menus">
      <h2>●ランチタイム<span>11:30 ~ 14:15</span></h2>

      <div class="menuBOX_Z">
        <div class="floatmenus">
          <p class="menuText_Z">[日替わりランチ]</p>
          <img alt="image1" src="../assets/airport_06.png" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">[週替わりパスタランチ]</p>
          <img alt="image1" src="../assets/airport_07.png" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">[週替わりハンバーグランチ]</p>
          <img alt="image1" src="../assets/airport_08.png" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">[自家製ミートソースドリアランチ]</p>
          <img alt="image1" src="../assets/airport_09.png" />
        </div>
      </div>

      <div class="menuBOX_Z">
        <div class="floatmenus">
          <p class="menuText_Z">[自家製カツカレーランチ]</p>
          <img alt="image1" src="../assets/airport_10.png" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">[週替わりオムライスランチ]</p>
          <img alt="image1" src="../assets/airport_11.png" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">
            [週替わりミニハンバーグとミニドリアのコンビネーションランチ]
          </p>
          <img alt="image1" src="../assets/airport_12.jpg" />
        </div>

        <div class="floatmenus">
          <p class="menuText_Z">
            [週替わりミニパスタとミニドリアのコンビネーションランチ]
          </p>
          <img alt="image1" src="../assets/airport_13.png" />
        </div>
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
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>
        ●SNS<span>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
        >
      </h2>
      <div class="menuText">
        <p>
          <br />
          今週のメニュー 定休日
          お知らせ等などの詳しい情報は以下をご参照ください<br />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<br />
          <a
            href="https://www.facebook.com/picapicasagyousyo"
            target="_blank"
            rel="noopener noreferrer"
            class="btn facebook"
            ><span class="fa fa-facebook-square"></span>FaceBook</a
          ><br />
          <a
            href="https://instagram.com/picapica7475?igshid=YmMyMTA2M2Y="
            target="_blank"
            rel="noopener noreferrer"
            class="btn instagram"
            ><span class="fa fa-instagram"></span>Instagram</a
          >
          <br /><br /><br />
        </p>
      </div>
    </div>
  </div>
</template>

<style>
.menu a {
  text-align: center;
  letter-spacing: 2px;
  color: #3b275e;
  font-weight: bold;
}

body {
  width: 100%;
}

.floatmenus {
  display: inline-block;
  margin: 1%;
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

.menuBOX_Z {
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

.menuBOX_Z a {
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

.menuBOX_Z img {
  width: 220px;
  height: 280px;
  margin: 2%;
}

.menuBOX_Z .floatmenus {
  width: 220px;
}

.menuText {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.menuText_Z {
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

  .menuText_Z {
    text-align: center;
    font-size: 14.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .menu a {
    text-align: center;
    font-size: 14.5px;
    letter-spacing: 2px;
    color: #3b275e;
    font-weight: bold;
  }

  .menuBOX img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }

  .menuBOX_Z img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }

  .menuBOX_Z .floatmenus {
    width: 190px;
  }

  .menuBOX .air_02 {
    width: 290px;
    height: 250px;
  }
}

@media (max-width: 900px) {
  .menuText {
    text-align: center;
    font-size: small;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

   .menuText_Z {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .menu a {
    text-align: center;
    font-size: small;
    letter-spacing: 2px;
    color: #3b275e;
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

  .menuBOX_Z img {
    width: 160px;
    height: 220px;
    margin: 2%;
  }

  .menuBOX_Z .floatmenus {
    width: 160px;
  }

  .menuBOX .air_02 {
    width: 260px;
    height: 220px;
  }
}
</style>
