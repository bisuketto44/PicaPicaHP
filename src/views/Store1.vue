<template>
  <div class="store3">
    <div class="hooper-sample">
      <!-- itemsToShowは１マスの大きさ(※hoopersettingsを設定する) -->
      <hooper :settings="hooperSettings">
        <slide> <img alt="image1" src="../assets/airport_23.png" /> </slide>
        <slide> <img alt="image1" src="../assets/airport_02.png" /> </slide>
        <slide> <img alt="image1" src="../assets/airport_18.png" /> </slide>
        <slide class="image4">
          <img alt="image1" src="../assets/airport_19.png" />
        </slide>
        <slide> <img alt="image1" src="../assets/airport_15.png" /> </slide>
        <slide> <img alt="image1" src="../assets/airport_26.png" /> </slide>
        <hooper-pagination slot="hooper-addons"></hooper-pagination>
      </hooper>
    </div>

    <div class="contentsWarpper">
      <div class="Incontents">
        <h2>Infomation</h2>
        <div class="storeExp">
          <div class="EXP">
            <h3>カフェ＆ベーカリー Pica Pica 空港店</h3>
            <p>連絡先</p>
            <ul>
              <li>〒581-0043</li>
              <li>大阪府八尾市空港1-146-2 大阪府中部広域防災拠点前</li>
              <li>TEL : 072-997-7475</li>
              <li>Mail : pica2@eco.ocn.ne.jp</li>
            </ul>
            <p>パーキング</p>
            <ul>
              <li>あり</li>
            </ul>
            <p>行き方</p>
            <ul>
              <li>電車・JR関西線志紀駅より<br />徒歩約20分</li>
              <li>
                バス<br />近鉄バス(近鉄八尾～藤井寺路線)<br />南木の本下車徒歩約15分
              </li>
            </ul>
             <p>来店されるお客様へのお願い</p>
            <ul>
              <li>
                駐車可能台数に限りがありますので<br />複数人でご来店される際はお車の乗り合わせをご検討下さい。
              </li>
            </ul>
          </div>

          <div class="map">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1161.102931153374!2d135.59860845893877!3d34.60175854948188!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6000d89e4af0afeb%3A0x831ff7e81a5e309a!2z44CSNTgxLTAwNDMg5aSn6Ziq5bqc5YWr5bC-5biC56m65riv77yR5LiB55uu77yR77yU77yW4oiS77ySIO-8sO-9ie-9g--9ge-8sO-9ie-9g--9geS9nOalreaJgA!5e0!3m2!1sja!2sjp!4v1649116237656!5m2!1sja!2sjp"
              width="400"
              height="300"
              style="border: 0"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>

        <h2>Floor Maps</h2>
        <div class="vision">
          <div class="BaseImg">
            <img alt="image1" src="../assets/air_port_map.png" />
          </div>

          <div class="popup_wrap">
            <input id="trigger" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_17.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger2" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger2" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger2" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_18.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger3" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger3" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger3" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_19.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger4" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger4" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger4" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_20.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger5" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger5" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger5" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_21.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger6" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger6" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger6" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_22.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger7" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger7" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger7" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_23.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger8" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger8" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger8" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_24.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger9" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger9" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger9" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_25.png" />
              </div>
            </div>
          </div>

          <div class="popup_wrap">
            <input id="trigger0" type="checkbox" />
            <div class="popup_overlay">
              <label for="trigger0" class="popup_trigger"></label>
              <div class="popup_content">
                <label for="trigger0" class="close_btn">×</label>
                <img alt="image1" width="400" src="../assets/airport_26.png" />
              </div>
            </div>
          </div>

          <label for="trigger" class="open_btn" id="img17"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger2" class="open_btn" id="img18"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger3" class="open_btn" id="img19"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger4" class="open_btn" id="img20"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger5" class="open_btn" id="img21"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger6" class="open_btn" id="img22"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger7" class="open_btn" id="img23"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger8" class="open_btn" id="img24"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger9" class="open_btn" id="img25"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>

          <label for="trigger0" class="open_btn" id="img26"
            ><img alt="image1" width="" src="../assets/Upto.png"
          /></label>
        </div>

        <h2>More</h2>
        <div class="ToLink_1">
          <ul>
            <li>
              <router-link to="/store1_menu"
                >空港店メニューはこちら</router-link
              >
            </li>
            <li>
              <router-link to="/recruit-1">空港店募集情報はこちら</router-link>
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
.store3 h2 {
  margin-left: 15%;
  font-weight: bold;
  letter-spacing: 3px;
  color: #313031;
  border-bottom: 1.75px solid rgb(85, 82, 82);
  width: 70%;
  font-size: 28px;
  margin-bottom: 2%;
}

.store3 h3 {
  font-size: 24.5px;
  letter-spacing: 2px;
  margin-left: 30px;
  margin-bottom: 40px;
  color: #444344;
  font-weight: bold;
}

.store3 p {
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
.storeExp {
  /* 左右から見て中央寄せに */
  justify-content: center;
  /* 上下から見て中央寄せに */
  /* align-items: center; */
  display: flex;
  height: 650px;
}

.storeExp div {
  padding: 1.25%;
}

.map {
  margin-top: 100px;
}

.ToLink_1 {
  margin: 75px;
  font-size: 20px;
  text-align: center;
}

/* routerLinkはa要素 */
.ToLink_1 a {
  color: #3b275e;
}

.ToLink_1 li {
  text-align: center;
  font-size: 20px;
  letter-spacing: 2px;
  font-weight: bold;
  padding: 0.5%;
  list-style: none;
}

/*ポップアップここから*/
.popup_wrap input {
  display: none;
}

.popup_overlay {
  display: flex;
  justify-content: center;
  overflow: auto;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  opacity: 0;
  transition: opacity 0.5s, transform 0s 0.5s;
  transform: scale(0);
}

.popup_trigger {
  position: absolute;
  width: 100%;
  height: 100%;
}

.popup_content {
  position: relative;
  align-self: center;
  width: 90%;
  max-width: 800px;
  padding: 30px 30px 15px;
  box-sizing: border-box;
  background: #fff;
  line-height: 1.4em;
  transition: 0.5s;
  background: rgb(0, 0, 0);
}

.close_btn {
  position: absolute;
  top: 14px;
  right: 16px;
  font-size: 30px;
  cursor: pointer;
}

.popup_wrap input:checked ~ .popup_overlay {
  opacity: 1;
  transform: scale(1);
  transition: opacity 0.5s;
}

.open_btn img {
  width: 38px;
  height: 38px;
}

.open_btn {
  cursor: pointer;
  opacity: 0.5;
  width: 48px;
  height: 48px;
}

.open_btn:hover {
  transform: scale(1.2) rotate(9deg);
  transition: 0.3s ease;
}
/*ポップアップココまで*/

.BaseImg {
  position: relative;
}

#img17 {
  position: absolute;
  left: 30%;
  top: 62%;
}

#img18 {
  position: absolute;
  left: 36.5%;
  top: 62%;
}

#img19 {
  position: absolute;
  left: 47%;
  top: 62%;
}

#img20 {
  position: absolute;
  left: 55%;
  top: 62%;
}

#img21 {
  position: absolute;
  left: 58%;
  top: 62%;
}

#img22 {
  position: absolute;
  left: 60%;
  top: 68%;
}

#img23 {
  position: absolute;
  left: 65%;
  top: 62%;
}

#img24 {
  position: absolute;
  left: 65%;
  top: 68%;
}

#img25 {
  position: absolute;
  left: 30%;
  top: 75%;
}

#img26 {
  position: absolute;
  left: 34.5%;
  top: 75%;
}

@media (max-width: 1919px) {
  .map {
    margin-top: 20px;
    margin-left: 70px;
  }

  .BaseImg img {
    width: 800px;
  }

  .storeExp {
    /* 左右から見て中央寄せに */
    /* 上下から見て中央寄せに */
    /* align-items: center; */
    margin-left: 24.5%;
    display: block;
    height: 1000px;
  }

  #img17 {
    position: absolute;
    left: 22.5%;
    top: 68%;
  }

  #img18 {
    position: absolute;
    left: 30.5%;
    top: 68%;
  }

  #img19 {
    position: absolute;
    left: 47%;
    top: 68%;
  }

  #img20 {
    position: absolute;
    left: 57%;
    top: 68%;
  }

  #img21 {
    position: absolute;
    left: 62%;
    top: 68%;
  }

  #img22 {
    position: absolute;
    left: 62.5%;
    top: 71%;
  }

  #img23 {
    position: absolute;
    left: 70%;
    top: 68%;
  }

  #img24 {
    position: absolute;
    left: 70%;
    top: 72%;
  }

  #img25 {
    position: absolute;
    left: 18%;
    top: 80%;
  }

  #img26 {
    position: absolute;
    left: 25.5%;
    top: 80%;
  }
}

@media (max-width: 900px) {
  .map {
    margin-top: 20px;
    margin-left: 70px;
  }

  .storeExp {
    /* 左右から見て中央寄せに */
    /* 上下から見て中央寄せに */
    /* align-items: center; */
    margin-left: 19.5%;
    display: block;
    height: 970px;
  }

  .store3 p {
    font-size: 18px;
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

  .ToLink_1 li {
    text-align: center;
    font-size: medium;
    letter-spacing: 2px;
    font-weight: bold;
    padding: 0.5%;
    list-style: none;
  }

  .BaseImg img {
    height: 320px;
    width: 620px;
  }

  #img17 {
    position: absolute;
    left: 19.5%;
    top: 69%;
  }

  #img18 {
    position: absolute;
    left: 29.5%;
    top: 69%;
  }

  #img19 {
    position: absolute;
    left: 47%;
    top: 69%;
  }

  #img20 {
    position: absolute;
    left: 57%;
    top: 69%;
  }

  #img21 {
    position: absolute;
    left: 62%;
    top: 69%;
  }

  #img22 {
    position: absolute;
    left: 62.5%;
    top: 73%;
  }

  #img23 {
    position: absolute;
    left: 73%;
    top: 69%;
  }

  #img24 {
    position: absolute;
    left: 70%;
    top: 73%;
  }

  #img25 {
    position: absolute;
    left: 18%;
    top: 80%;
  }

  #img26 {
    position: absolute;
    left: 24.5%;
    top: 80%;
  }
}
</style>