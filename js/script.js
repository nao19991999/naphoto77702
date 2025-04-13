// 　　*******************  drawer　アクション　*************
const navbutton01 = document.getElementById("drawerButton");
const navlist = document.querySelector("header nav ul");

function downbotton() {

    navlist.classList.toggle("open");
    navbutton01.classList.toggle("redesign");
}

navbutton01.addEventListener("click", downbotton);



//  ********************  ローディング　**************
const loadingScreen = document.querySelector(".loading-screen");

window.addEventListener("load", function () {
    loadingScreen.classList.add("active");
});

setTimeout(function () {
    if (!loadingScreen.classList.contains("active")) {
        loadingScreen.classList.add("active");
    }
}, 5000);

//  *********************  スクロールアニメーション　*********
const swiper = new Swiper(".swiper", {
    loop: true,
    slidesPerView: "auto",
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});


//   ********************　banner　アクション　**************
// const banner = document.querySelector("#sec01 .banner");

// function scrollcount() {
//     let scrollCheck = window.scrollY;
//     if (scrollCheck >= 1000) {
//         banner.classList.add("active");
//         console.log("1000ピクセル以上スクロールされました");
//         window.removeEventListener("scroll", scrollcount);
//     }
// }

// function closeBanner() {
//     banner.classList.remove("active");
//     console.log("バナーを閉じました");
// }

// window.addEventListener("scroll", scrollcount);

// const clickbutton = document.querySelector("#sec01 .banner span");
// function clickevent() {
//     banner.classList.remove("active");
// }
// clickbutton.addEventListener("click", clickevent);



// const banner = document.querySelector("#sec01 .banner");
// const clickbutton = document.querySelector("#sec01 .banner span");

// function scrollcount() {
//     let scrollCheck = window.scrollY;
//     if (scrollCheck >= 1000) {
//         banner.classList.add("active"); // バナーを表示
//         console.log("1000ピクセル以上スクロールされました");
//         window.removeEventListener("scroll", scrollcount); // イベントリスナーを削除（一度表示したら監視不要）
//     }
// }

// function clickevent() {
//     banner.classList.remove("active"); // バナーを非表示
// }

// // スクロールイベントリスナーを追加
// window.addEventListener("scroll", scrollcount);

// // ×ボタンのクリックイベントリスナーを追加
// clickbutton.addEventListener("click", clickevent);
