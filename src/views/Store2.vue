<template>
  <div class="store2">
    <div class="hooper-sample">
      <!-- itemsToShowは１マスの大きさ(※hoopersettingsを設定する) -->
      <hooper :settings="hooperSettings">
        <slide> <img alt="image1" src="../assets/city_1.png" /> </slide>
        <slide> <img alt="image1" src="../assets/city_2.png" /> </slide>
        <slide> <img alt="image1" src="../assets/city_3.png" /> </slide>
        <slide class="image4">
          <img alt="image1" src="../assets/city_4.png" />
        </slide>
        <slide> <img alt="image1" src="../assets/city_5.png" /> </slide>
        <slide> <img alt="image1" src="../assets/city_6.png" /> </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>

    <div class="contentsWarpper">
      <div class="Incontents">
        <h2>Infomation</h2>

        <div class="storeEXP2">
          <div class="EXP">
            <h3>cafe rest pica pica 市役所店</h3>
            <p>連絡先</p>
            <ul>
              <li>〒581-0003</li>
              <li>大阪府八尾市本町1丁目1番1号 八尾市役所地下1階</li>
              <li>TEL : 072-999-9922</li>
              <li>Mail : pica3@able.ocn.ne.jp</li>
            </ul>
            <p>パーキング</p>
            <ul>
              <li>
                cafe rest pica pica
                をご利用頂いてのサービス券の発行はございません。<br />※サービス券の発行は、八尾市役所をご利用の場合のみになります
              </li>
            </ul>
            <p>行き方</p>
            <ul>
              <li>
                近鉄大阪線 近鉄八尾駅下車。府道176号線を西南西へ。<br />本町1丁目交差点を左折、八尾市役所地下1F
              </li>
              <li>近鉄バス 八尾市役所前下車すぐ。</li>
            </ul>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3283.0992261887322!2d135.5987090655309!3d34.62693269467242!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x600120aa0d2a481f%3A0xc68936edf7c1b1aa!2z77yw772J772D772B77yw772J772D772BIOW4guW9ueaJgOW6lw!5e0!3m2!1sja!2sjp!4v1648110978453!5m2!1sja!2sjp"
              width="400"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>

        <h2>Vision</h2>
        <div class="vision">
          <p>
            「障がい者とともに働く場」「誰もがゆったりくつろげる場」<br />気軽に立ち寄っていただける
            cafe rest pica pica 市役所店<br />利用者 スタッフ
            一同お待ちしております。<br />
          </p>
        </div>

        <h2>More</h2>
        <div class="ToLink">
          <ul>
            <li>
              <router-link to="/store2_menu"
                >市役所店メニューはこちら</router-link
              >
            </li>
            <li>
              <router-link to="/store2_info"
                >その他の店舗内情報はこちら</router-link
              >
            </li>
            <li>
              <router-link to="/recruit-2"
                >市役所店募集情報はこちら</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { Hooper, Slide, Pagination as HooperPagination } from "hooper";
//以下をインポートすることでHooperをきれいにしてくれる
import "hooper/dist/hooper.css";

export default {
  components: {
    Hooper,
    Slide,
    HooperPagination,
  },
  data() {
    return {
      hooperSettings: {
        itemsToShow: 1.75,
        centerMode: true,
        infiniteScroll: true,
        breakpoints: {
          100: {
            //この数字は400以上の条件分岐を指す
            itemsToShow: 1,
          },
          1000: {
            itemsToShow: 1.45,
          },
          1900: {
            itemsToShow: 2.2,
          },
          1921: {
            itemsToShow: 1.5,
          },
        },
      },
    };
  },
};
</script>

<style>
/* id = # class = . で指定する */
/* 1980pxのCSS設定 */

/* h2にの設定 */
.store2 h2 {
  margin-left: 15%;
  font-weight: bold;
  letter-spacing: 3px;
  color: #313031;
  border-bottom: 1.75px solid rgb(85, 82, 82);
  width: 70%;
  font-size: 28px;
  margin-bottom: 2%;
}

.store2 h3 {
  font-size: 24.5px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

.store2 p {
  font-size: 17px;
  letter-spacing: 1.75px;
  color: #444344;
  font-weight: bold;
}

.vision p {
  font-size: 17px;
  letter-spacing: 2px;
  color: #444344;
  font-weight: bold;
}

li {
  font-size: 16px;
  letter-spacing: 1.25px;
  color: #444344;
  font-weight: bold;
}

/* 外側を囲うコンテンツです */
.contentsWarpper {
  height: 100%;
}

/* 実際の要素を配置するコンテンツです */
.Incontents {
  margin-top: 1%;
  padding: 2%;
}

.hooper {
  height: 400px;
  margin-bottom: 3%;
  background: #1a191a;
}

.hooper-pagination li {
  transform: scale(2.5);
  width: 40px;
  height: 35px;
}

.hooper img {
  width: 800px;
  border-radius: 45px;
}

.hooper-slide {
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  /* デバック用にボーダーを表示しておきます(最後に削除) */
  /* border: 2px solid rgb(255, 255, 255); */
  font-size: 30px;
}

.image4 {
  /* 4枚目の画像設定 */
  height: 0px;
}

.vision {
  text-align: center;
  /* 左右から見て中央寄せに */
  justify-content: center;
  /* 上下から見て中央寄せに */
  /* align-items: center; */
  display: flex;
}

.vision p {
  margin: 75px;
  font-size: 19px;
}

/* 親要素をflexにして、その配下のdivを2分割(横並びにします) */
.storeEXP2 {
  /* 左右から見て中央寄せに */
  justify-content: center;
  /* 上下から見て中央寄せに */
  /* align-items: center; */
  display: flex;
  height: 550px;
}

.storeEXP2 div {
  padding: 1.25%;
}

.map {
  display: flex;
  flex-direction: column;
  margin-top: 100px;
}

.ToLink {
  margin: 75px;
  font-size: 20px;
  text-align: center;
}

/* routerLinkはa要素 */
.ToLink a {
  color: #3b275e;
}

.ToLink li {
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 0.5%;
  list-style: none;
}

@media (max-width: 1919px) {
  .map {
    margin-top: 20px;
    margin-left: 70px;
  }

  .storeEXP2 {
    /* 左右から見て中央寄せに */
    /* 上下から見て中央寄せに */
    /* align-items: center; */
    margin-left: 28.5%;
    display: block;
    height: 900px;
  }
}

@media (max-width: 900px) {
  .map {
    margin-top: 20px;
    margin-left: 70px;
  }

  .storeEXP2 {
    /* 左右から見て中央寄せに */
    /* 上下から見て中央寄せに */
    /* align-items: center; */
    margin-left: 19.5%;
    display: block;
    height: 820px;
  }

  .store2 p {
    font-size: 15.5px;
    letter-spacing: 1.75px;
    color: #444344;
    font-weight: bold;
  }

  .vision p {
    font-size: 15.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
  }

  li {
    font-size: 15.5px;
    letter-spacing: 1.25px;
    color: #444344;
    font-weight: bold;
  }

  .store2 h3 {
    font-size: 24.5px;
    letter-spacing: 2px;
    color: #444344;
    font-weight: bold;
    margin-left: 60px;
  }

  .ToLink li {
    text-align: center;
    font-size: 16.5px;
    letter-spacing: 2px;
    font-weight: bold;
    padding: 0.5%;
    list-style: none;
  }
}
</style>