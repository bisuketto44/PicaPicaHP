<template>
  <div class="menu_City">
    <div class="City_Menu_Top">
      <img alt="image1" src="../assets/menuicon.png" />
      <h1>Menu<span>市役所店</span></h1>
    </div>

    <div class="menuTop_City">
      <h2>●モーニングサービス<span>9:00 ~ 11:30</span></h2>
      <div class="menuBox_city">
        <img alt="image1" src="../assets/city_morning01.png" />
        <img alt="image1" src="../assets/city_morning04.jpg" />
        <img alt="image1" src="../assets/city_morning02.png" />
        <img alt="image1" src="../assets/city_morning03.png" />
      </div>
      <div class="menutext_city">
        <p>
          無添加の食パンを毎日お店で焼いています。<br />ドレッシングやソースも自家製にこだわって提供しています。
        </p>
      </div>
    </div>

    <div class="menus_city">
      <h2>●ランチタイム<span>11:30 ~ 15:00</span></h2>
      <div class="menuBox_city">
        <img alt="image1" src="../assets/city_lunch01.png" />
        <img alt="image1" src="../assets/city_lunch02.png" />
        <img alt="image1" src="../assets/city_lunch03.png" />
        <img alt="image1" src="../assets/city_lunch04.png" />
      </div>
      <div class="menutext_city">
        <p>
          定番メニューから、季節の食材を使用したランチメニューを<br />週替わりで提供しております。
        </p>
      </div>
    </div>

    <div class="menus_city">
      <h2>●おまかせの日替わり弁当<span>11:00 ~ 13:00</span></h2>
      <div class="menuBox_city">
        <img alt="image1" src="../assets/city_bentou01.png" />
        <img alt="image1" src="../assets/city_bentou02.png" />
      </div>
      <div class="menutext_city">
        <p>
          日替わりで提供しております。<br />味、ボリューム、お値段、お得なお弁当です。
        </p>
      </div>
    </div>

    <div class="menus_city">
      <h2>●カフェ<span>9:00 ~ 16:30 (ラストオーダー 16:00)</span></h2>
      <div class="menuBox_city">
        <img alt="image1" src="../assets/city_cafe01.png" />
        <img alt="image1" src="../assets/city_cafe02.png" />
        <img alt="image1" src="../assets/city_cafe03.png" />
        <img alt="image1" src="../assets/city_cafe04.png" />
      </div>
      <div class="menutext_city">
        <p>
          スイーツはすべて店内で手作り。<br />旬のフルーツを使ったジュースは生絞り無添加です。
        </p>
      </div>
    </div>

    <div class="menus_city">
      <h2>●今週のメニュー</h2>
      <div class="menutext_cityFoot">
        <div class="menuBox_city">
          <a
            href="https://www.facebook.com/picapicasiyakusyoten/"
            target="_blank"
            rel="noopener noreferrer"
            class="btn facebook"
            ><span class="fa fa-facebook-square"></span>今週のメニュー詳細(FaceBook)</a
          ><br>
          <a
            href="https://www.instagram.com/cafe_pica_pica/?r=nametag"
            target="_blank"
            rel="noopener noreferrer"
            class="btn instagram"
            ><span class="fa fa-instagram"></span>Instagram</a
          >
        </div>
        <div class="menutext_city2">
          <p>市役所店SNSをご参照下さい。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
body {
  width: 100%;
}

.menu_City h2 {
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

.menutext_city2 {
  text-align: center;
  font-size: medium;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
  margin-left: 35px;
}

.City_Menu_Top img {
  width: 60px;
  height: 60px;
}

.menuBox_city {
  text-align: center;
  margin-top: 1.5%;
}

.menuBox_city a {
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  color: #3b275e;
  font-weight: bold;
}

.menuBox_city img {
  width: 220px;
  height: 280px;
  margin: 2%;
}

.menutext_city {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.menutext_cityFoot {
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

.menus_city {
  margin-top: 3.25%;
}

span {
  font-size: 20px;
  margin-left: 20px;
}

.menuTop_City {
  margin-top: 75px;
}

@media (max-width: 1919px) {
  .menutext_city {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 740px;
    margin-left: 250px;
  }

  .menutext_city2 {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    margin-left: 50px;
  }

  .menuBox_city img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }
}

@media (max-width: 900px) {
  .menutext_city {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 480px;
    margin-left: 200px;
  }

  .menutext_cityFoot {
    height: 200px;
    display: flex;
    width: 480px;
    margin-left: 200px;
  }

  .menutext_city2 {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    margin-left: 50px;
  }

  .menus_city {
    margin-top: 35px;
  }

  .menuBox_city img {
    width: 160px;
    height: 220px;
    margin: 2%;
  }
}
</style>
