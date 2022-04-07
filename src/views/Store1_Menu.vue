<template>
  <div class="menu">
    <div class="Airport_Top">
      <img alt="image1" src="../assets/menuicon.png" />
      <h1>Menu<span>空港店</span></h1>
    </div>

    <div class="menusTOP">
      <h2>●モーニングサービス<span>8:00 ~ 11:00</span></h2>
      <div class="Store1_MenuBOX">
        <img alt="image1" src="../assets/airport_01.png" />
        <img alt="image1" class="air_02" src="../assets/airport_02.png" />
        <img alt="image1" src="../assets/airport_03.png" />
      </div>
      <div class="Store1_MenuText">
        <p class="p_1">
          ①トースト、サラダ、フルーツ、スクランブルエッグ or ゆで卵 +
          ドリンク<br />
          ②焼きたてパン2個、サラダ、フルーツ、スクランブルエッグ or ゆで卵 +
          ドリンク<br />
          ③トースト&焼き立てパン1個、サラダ、フルーツ、スクランブルエッグ or
          ゆで卵 + ドリンク
        </p>
      </div>
      <div class="Store1_MenuBOX">
        <img alt="image1" src="../assets/airport_04.png" />
        <img alt="image1" src="../assets/airport_05.png" />
      </div>
      <div class="Store1_MenuText">
        <p class="p_2">
          ④ピザトースト、サラダ、フルーツ、スクランブルエッグ or ゆで卵 +
          ドリンク<br />
          ⑤ピサンド、サラダ、フルーツ、スクランブルエッグ or ゆで卵 +
          ドリンク<br />
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●ランチタイム<span>11:30 ~ 14:15</span></h2>
      <div class="Store1_MenuBOX">
        <img alt="image1" src="../assets/airport_06.png" />
        <img alt="image1" src="../assets/airport_07.png" />
        <img alt="image1" src="../assets/airport_08.png" />
        <img alt="image1" src="../assets/airport_09.png" />
      </div>
      <div class="Store1_MenuText">
        <p class="p_3">
          ①[日替わりランチ] 本日のメイン、4種の副菜、味噌汁、ごはん<br />
          ②[パスタ] パスタ、お好きなパン2個、サラダ<br />
          ③[週替わりハンバーグランチ] ハンバーグ、小鉢、味噌汁、ごはん<br />
          ④[週替わりドリアンランチ] ドリア、お好きなパン1個、スープ、サラダ
        </p>
      </div>
      <div class="Store1_MenuBOX">
        <img alt="image1" src="../assets/airport_10.png" />
        <img alt="image1" src="../assets/airport_11.png" />
        <img alt="image1" src="../assets/airport_12.jpg" />
        <img alt="image1" src="../assets/airport_13.png" />
      </div>
      <div class="Store1_MenuText">
        <p class="p_4">
          ⑤[日替カレーランチ]
          カレー、サラダ、とんかつ、ごはん、自家製ヨーグルト、らっきょ、福神漬け<br />
          ⑥[週替わりオムライスランチ] オムライス、スープ、サラダ<br />
          ⑦[週替わりハンバーグとミニドリアのコンビネーションランチ]
          ミニハンバーグ、ミニドリア<br />
          サラダ、小ごはん&味噌汁 or お好きなパン1個&スープ<br />
          ⑧[週替わりミニパスタ、ミニドリアのコンビネーションランチ]
          ミニパスタ、ミニドリア<br />
          お好きなパン1個、スープ、サラダ
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●その他</h2>
      <div class="MenuAirFoot">
        <div class="Store1_MenuBOX">
          <img alt="image1" src="../assets/airport_14.png" />
          <img alt="image1" src="../assets/airport_15.png" />
          <img alt="image1" src="../assets/airport_16.png" />
        </div>
        <div class="Store1_MenuText">
          <p>
            その他、焼き菓子やプリン、パン、お子様ランチ等もご用意しております
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

.Airport_Top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 225px;
  background-image: url(../assets/airport_02.png);
  background-color: rgba(255, 255, 255, 0.65);
  background-blend-mode: lighten;
  background-size: cover;
}

.Airport_Top h1 {
  font-weight: bold;
  letter-spacing: 5px;
  color: #313031;
  font-size: 36px;
  margin-left: 23.5px;
}

.Airport_Top img {
  width: 60px;
  height: 60px;
}

.Store1_MenuBOX {
  text-align: center;
  margin-top: 1.5%;
}

.Store1_MenuBOX a {
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  color: #3b275e;
  font-weight: bold;
}

.Store1_MenuBOX img {
  width: 220px;
  height: 280px;
  margin: 2%;
}

.Store1_MenuBOX .air_02 {
  width: 320px;
  height: 280px;
}

.Store1_MenuText {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.MenuAirFoot {
  height: 470px;
}

.menus {
  margin-top: 3.25%;
}

.menu_02 {
  width: 320px;
  height: 280px;
  margin: 2%;
}

span {
  font-size: 20px;
  margin-left: 20px;
}

.menusTOP {
  margin-top: 75px;
}

@media (max-width: 1919px) {
  .Store1_MenuText {
    text-align: center;
    font-size: 14.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  .Store1_MenuBOX img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }

  .Store1_MenuBOX .air_02 {
    width: 290px;
    height: 250px;
  }
}

@media (max-width: 900px) {
  .Store1_MenuText {
    text-align: center;
    font-size: 10.5px;
    letter-spacing: 1px;
    color: #444344;
    font-weight: bold;
  }

  .Store1_MenuBOX img {
    width: 130px;
    height: 190px;
    margin: 2%;
  }

  .Store1_MenuBOX .air_02 {
    width: 230px;
    height: 190px;
  }

  .MenuAirFoot {
    height: 320px;
  }

  .p_1 {
    font-size: 0;
  }

  .p_2 {
    font-size: 0;
  }

  .p_3 {
    font-size: 0;
  }

  .p_4 {
    font-size: 0;
  }

  .p_1:before {
    font-size: 14.5px;
    white-space: pre;
    content: "[モーニングAセット]\A[モーニングBセット]\A[モーニングCセット]";
  }

  .p_2:before {
    font-size: 14.5px;
    white-space: pre;
    content: "[ピザトーストセット]\A[サンドイッチセット]";
  }

  .p_3:before {
    font-size: 14.5px;
    white-space: pre;
    content: "[日替わりランチ]\A[パスタ]\A[週替わりハンバーグランチ]\A[週替わりドリアランチ]";
  }

  .p_4:before {
    font-size: 14.5px;
    white-space: pre;
    content: "[週替わりカレーランチ]\A[週替わりオムライスランチ]\A[週替わりミニハンバーグとミニドリアのコンビネーションランチ]\A[週替わりミニパスタとミニドリアのコンビネーションランチ]";
  }
}
</style>

