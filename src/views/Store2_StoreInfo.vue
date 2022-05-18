<template>
  <div class="Other">
    <div class="City_Other_Top">
      <img alt="image1" src="../assets/StoreIcon.png" />
      <h1>Others<span>市役所店</span></h1>
    </div>

    <div class="OthersTOP">
      <h2>●お子様とご一緒に</h2>
      <div class="OtherBOX">
        <div class="okosama">
          <img alt="image1" src="../assets/city_okosama01.png" />
        </div>
      </div>
      <div class="OtherText">
        <p>
          cafe rest pica pica
          市役所店では、赤ちゃんベッド・子供椅子をご利用いただけます。
          はじめて赤ちゃんとお出かけ、お子様と八尾図書館をご利用する、そんなお母さん方に安心してごゆっくりしていただければと思っております。
          お子様と一緒だとなかなかcafeなどにいけないと思われるお母さんを応援しています。
        </p>
      </div>
    </div>

    <div class="Others">
      <h2>●焼きたてパン＆クッキー</h2>
      <div class="OtherBOX">
        <img alt="image1" src="../assets/city_pan01.png" />
        <img alt="image1" src="../assets/city_pan02.png" />
      </div>
      <div class="OtherText">
        <p>
          Cafe & Bakery Pica Pica 空港店の焼き立てパンを
          12時頃から販売しています。(※月曜日のパン販売はお休みです)
          パンの種類は日替わりで様々な種類のパンを販売しています。
        </p>
      </div>
    </div>

    <div class="Others">
      <h2>●雑貨販売</h2>
      <div class="OtherBOX">
        <img alt="image1" src="../assets/city_zakka01.png" />
        <img alt="image1" src="../assets/city_zakka02.png" />
      </div>
      <div class="OtherText">
        <p>
          個性あふれる創作作家の方、作業所で働く障がい者の方などによる
          様々な雑貨の販売を行っております。<br /><br />
          <a
            href="http://blog.livedoor.jp/yumusi221/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="fa fa-gratipay"></span>皮物手作り SATOKOさん</a
          >
          <br />
          <a
            href="https://www.instagram.com/syachiask/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="fa fa-gratipay"></span>アクセサリー A*skさん</a
          ><br />
          <a
            href="https://ameblo.jp/hiro-sav0/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="fa fa-gratipay"></span>手作り石鹸 hiroさん</a
          >
          <br />
          <a
            href="https://www.instagram.com/pandasannomemo/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="fa fa-gratipay"></span>ハンドメイド 32pandaさん</a
          >
          <br />
          <a
            href="https://www.instagram.com/1043lanualidesign/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="fa fa-gratipay"></span>アクセサリー 乾 利美さん</a
          >
          <br />
          <a
            href="https://www.lincle-link-circle.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="fa fa-gratipay"></span>リンクルさん</a
          >
          <br />
          <a
            href="http://kara-kara-tei.com/"
            target="_blank"
            rel="noopener noreferrer"
            ><span class="fa fa-gratipay"></span>八尾から味噌本舗さん</a
          >
        </p>
      </div>
    </div>

    <div class="Others">
      <h2>●フルーツ販売</h2>
      <div class="OtherBOX">
        <img alt="image1" src="../assets/city_fruit01.png" />
        <img alt="image1" src="../assets/city_fruit02.png" />
      </div>
      <div class="OtherText">
        <p>
          中央市場より不定期ではありますが季節のフルーツが届きます。<br />
          安くておいしいと評判です。
        </p>
      </div>
    </div>

    <div class="footerContent">
      <div class="Others">
        <h2>●イベントスペースのご利用<span>(土・祝)</span></h2>
        <div class="OtherBOX">
          <img class="event" alt="image1" src="../assets/city_event01.png" />
          <img alt="image1" src="../assets/city_event02.png" />
          <img alt="image1" src="../assets/city_event03.png" />
        </div>
        <div class="OtherText">
          <p>
            cafe rest pica pica 市役所店では、営業日以外の日(土・祝)を
            空港店の手作りクッキー&ドリンクセットを
            人数分(※要相談)でお召し上がり頂きながら、貸し切りとしてご利用頂けます。(※1日1団体)
            詳しくは当店までお問い合わせください。
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

.Other h2 {
  margin-left: 15%;
  font-weight: bold;
  letter-spacing: 3px;
  color: #313031;
  border-bottom: 1.75px solid rgb(85, 82, 82);
  width: 70%;
  font-size: 25px;
}

.City_Other_Top {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 225px;
  background-image: url(../assets/city_okosama01.png);
  background-color: rgba(255, 255, 255, 0.65);
  background-blend-mode: lighten;
  background-size: cover;
}

.City_Other_Top h1 {
  font-weight: bold;
  letter-spacing: 5px;
  color: #313031;
  font-size: 36px;
  margin-left: 23.5px;
}

.City_Other_Top img {
  width: 60px;
  height: 60px;
}

.OtherBOX {
  text-align: center;
  margin-top: 1.5%;
}
.OtherBOX a {
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  color: #3b275e;
  font-weight: bold;
}

.OtherBOX img {
  width: 220px;
  height: 280px;
  margin: 2%;
}

.OtherBOX .event {
  width: 400px;
  height: 280px;
  margin: 2%;
}

.OtherText {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
  width: 800px;
  margin-left: 560px;
}

.OtherText a {
  color: #614261;
}

.Others {
  margin-top: 3.25%;
}

span {
  font-size: 20px;
  margin-left: 20px;
}

.okosama img {
  width: 410px;
  height: 280px;
  margin: 2%;
}

.footerContent {
  padding-bottom: 50px;
}

.OthersTOP {
  margin-top: 75px;
}

@media (max-width: 1919px) {
  .OtherText {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 640px;
    margin-left: 280px;
  }

  .OtherBOX img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }

  .OtherBOX .air_02 {
    width: 290px;
    height: 250px;
  }

  .okosama img {
    width: 250px;
    height: 200px;
    margin: 2%;
  }
}

@media (max-width: 900px) {
  .OtherText {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 380px;
    margin-left: 250px;
  }

  .OtherTextFoot {
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .Others {
    margin-top: 45px;
  }

  .OtherBOX img {
    width: 140px;
    height: 200px;
    margin: 2%;
  }

  .OtherBOX .event {
    width: 300px;
    height: 200px;
    margin: 2%;
  }

  .okosama img {
    width: 250px;
    height: 200px;
    margin: 2%;
  }
}
</style>
