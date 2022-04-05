var baseW = 900; //基準となるブレークポイント
var iOSviewportW = 0;
var ua = navigator.userAgent.toLowerCase();
var isiOS = (ua.indexOf("iphone") > -1) || (ua.indexOf("ipod") > -1) || (ua.indexOf("ipad") > -1);

if (isiOS) {
    iOSviewportW = document.documentElement.clientWidth;
}

function updateMetaViewport() {
    var viewportContent;
    var w = window.outerWidth;
    if (isiOS) {
        w = iOSviewportW;
    }
    //700px以下で900widthに固定 
    if (w <= 900) {
        viewportContent = "width=" + 900 + "px,user-scalable=no,shrink-to-fit=yes";
        //それより上は1600widthに固定 
    } else if (w >= 901 && w <= 1919) {
        viewportContent = "width=" + 1400 + "px,user-scalable=no,shrink-to-fit=yes";
    } else if (w == 1920) {
        viewportContent = "width=" + 1903 + "px,user-scalable=no,shrink-to-fit=yes";
    } else if (w >= 1921) {
        viewportContent = "width=" + 1300 + "px,user-scalable=no,shrink-to-fit=yes";
    }

    document.querySelector("meta[name='viewport']").setAttribute("content", viewportContent);
}
//イベントハンドラ登録
window.addEventListener("resize", updateMetaViewport, false);
window.addEventListener("orientationchange", updateMetaViewport, false);
//初回イベント強制発動
var ev = document.createEvent("UIEvent");
ev.initEvent("resize", true, true)
window.dispatchEvent(ev);