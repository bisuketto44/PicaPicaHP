<template>
  <div class="menu">
    <div class="City_Menu_Top">
      <img alt="image1" src="../assets/menuicon.png" />
      <h1>Menu<span>市役所店</span></h1>
    </div>

    <div class="menusTOP">
      <h2>●モーニングサービス<span>9:00 ~ 11:30</span></h2>
      <div class="menuBOX">
        <img alt="image1" src="../assets/city_morning01.png" />
        <img alt="image1" src="../assets/city_morning04.jpg" />
        <img alt="image1" src="../assets/city_morning02.png" />
        <img alt="image1" src="../assets/city_morning03.png" />
      </div>
      <div class="menuText">
        <p>
          無添加の食パンを毎日お店で焼いています。<br />ドレッシングやソースも自家製にこだわって提供しています。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●ランチタイム<span>11:30 ~ 15:00</span></h2>
      <div class="menuBOX">
        <img alt="image1" src="../assets/city_lunch01.png" />
        <img alt="image1" src="../assets/city_lunch02.png" />
        <img alt="image1" src="../assets/city_lunch03.png" />
        <img alt="image1" src="../assets/city_lunch04.png" />
      </div>
      <div class="menuText">
        <p>
          定番メニューから、季節の食材を使用したランチメニューを<br />週替わりで提供しております。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●おまかせの日替わり弁当<span>11:00 ~ 13:00</span></h2>
      <div class="menuBOX">
        <img alt="image1" src="../assets/city_bentou01.png" />
        <img alt="image1" src="../assets/city_bentou02.png" />
      </div>
      <div class="menuText">
        <p>
          日替わりで提供しております。<br />味、ボリューム、お値段、お得なお弁当です。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●カフェ<span>9:00 ~ 16:30 (ラストオーダー 16:00)</span></h2>
      <div class="menuBOX">
        <img alt="image1" src="../assets/city_cafe01.png" />
        <img alt="image1" src="../assets/city_cafe02.png" />
        <img alt="image1" src="../assets/city_cafe03.png" />
        <img alt="image1" src="../assets/city_cafe04.png" />
      </div>
      <div class="menuText">
        <p>
          スイーツはすべて店内で手作り。<br />旬のフルーツを使ったジュースは生絞り無添加です。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●今週のメニュー</h2>
      <div class="MenuTextFoot">
        <div class="menuBOX">
          <a
            href="https://www.facebook.com/picapicasiyakusyoten/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn facebook"
            ><span class="fa fa-facebook-square"></span>今週のメニュー詳細</a
          >
        </div>
        <div class="menuText">
          <p>市役所店Facebookをご参照下さい。</p>
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

.City_Menu_Top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 225px;
  background-image: url(../assets/City_Menu_Top.png);
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
}
</style>
