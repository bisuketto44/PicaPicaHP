<template>
  <div class="menu">
    <div class="Recruit_Top">
      <img alt="image1" src="../assets/RecruteIcon.png" />
      <h1>Recruit <span>空港店</span></h1>
    </div>

    <div class="recTOP">
      <h2>●メンバーさん募集</h2>
      <div class="recToptext">
        <p>
          PicaPica作業所で一緒に働いてみませんか？
          接客、パン作り、弁当作り、クッキー作り、 陶芸、厨房作業、軽作業など、
          いろいろなお仕事があります。 気軽にお問い合わせください。<br /><br />℡
          072-997-7475
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>
        ●喫茶 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </h2>
      <div class="Recruit">
        <img alt="image1" src="../assets/air_kissa.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>
          カフェをメンバーさんとスタッフが一緒に運営しています。
          お花の水やり・清掃・お料理の仕込み・オープン・お客さまの対応・お料理・かたずけと、お客仕事は多岐にわたります。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>
        ●厨房 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </h2>
      <div class="Recruit">
        <img alt="image1" src="../assets/air_tyubou.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>お料理を行う厨房作業です。</p>
      </div>
    </div>

    <div class="menus">
      <h2>
        ●配食弁当 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </h2>
      <div class="Recruit">
        <img alt="image1" src="../assets/air_bento.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>
          メンバー・スタッフの毎日の昼食作りから始まったお弁当作りも、
          調理場や食材を吟味し地域の方々に宅配弁当として提供するまでになりました。仕込み作業・調理・弁当詰め・配達・回収・洗浄などを行います。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>
        ●パン &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </h2>
      <div class="Recruit">
        <img alt="image1" class="image2" src="../assets/air_pan.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>
          カフェPicaPicaのモーニング・ランチ・テイクアウトとカフェ営業で欠かすことのできないパンの製造・販売をします。
          小麦粉と材料の計量から練り・発酵・分割・成形・発酵・焼き、
          パンをお店に並べる・・・・パンの袋入れ シール貼り、
          パン作り以外にもオーブン用鉄板・道具の洗浄作業など。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>
        ●軽作業 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </h2>
      <div class="Recruit">
        <img alt="image1" class="image2" src="../assets/air_kei.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>
          内職仕事をはじめとし封入作業などいろいろな仕事をしています。
          はさみを使う仕事・数を数えて箱に入れる仕事、袋に入れる仕事・重さを量って箱に入れる仕事、段ボールを組み立てる仕事、
          仕事によっていろいろな動作を何度もくりかえします。何度も繰り返し、仕事になれ、上手になっていきます。仕事の原点ともいえる仕事だなと思います。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>
        ●陶芸 &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </h2>
      <div class="Recruit">
        <img alt="image1" src="../assets/air_tougei.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>
          カフェPicaPicaの食器を製作することを原点と、今では注文を受け製作するまでになっています。
          かわいいイラスト入りの陶器など、手作りの一点もの器を提供しています。
          粘土の練り作業・成形・素焼き・本焼き・イラストを画くなど芸術的な才能をいかしたお仕事です。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>
        ●クッキー &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
      </h2>
      <div class="Recruit">
        <img alt="image1" class="image1" src="../assets/airport_member01.jpg" />
      </div>
      <div class="Recrute_Texts">
        <p>
          PicaPica空港店では、クッキーやお菓子を製造しています。クッキーの仕上げラッピングは
          PicaPicaメンバーさんのイラストでかわいくなっています。
        </p>
      </div>
    </div>

    <div class="menus">
      <h2>●他店について</h2>
      <div class="MenuTextFoot">
        <div class="menuTextfotter">
          <p>
            市役所店に関しての募集情報は以下をご覧ください。<br /><br />
            <router-link class="route2" to="/recruit-2"
              >市役所店募集情報</router-link
            >
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

.route2 {
  color: #3b275e;
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

.Recruit .image2 {
  width: 380px;
  height: 230px;
}

.Recrute_Texts {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
  width: 800px;
  margin-left: 560px;
}

.menuTextfotter {
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
  width: 800px;
}

.recToptext {
  margin-top: 100px;
  text-align: center;
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
  width: 600px;
  margin-left: 650px;
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
    font-size: large;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 640px;
    margin-left: 390px;
  }

  .Recruit img {
    width: 190px;
    height: 250px;
    margin: 2%;
  }

  .Recruit .image2 {
    width: 280px;
    height: 170px;
  }

  .Recrui .air_02 {
    width: 290px;
    height: 250px;
  }

  .menuTextfotter {
    text-align: center;
    font-size: large;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 640px;
    margin-left: 40px;
  }

  .recToptext {
    margin-top: 100px;
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 740px;
    margin-left: 350px;
  }
}

@media (max-width: 900px) {
  .Recrute_Texts {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 380px;
    margin-left: 265px;
  }

  .recTOP .recToptext {
    margin-top: 100px;
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 380px;
    margin-left: 260px;
  }

  .menuTextfotter {
    text-align: center;
    font-size: large;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    width: 380px;
    margin-left: 30px;
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

  .menus {
    margin-top: 50px;
  }
}
</style>
