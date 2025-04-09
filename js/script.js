// 　　*******************  drawer　アクション　*************
const navbutton01 = document.getElementById("drawerButton");
const navlist = document.querySelector("header nav ul");

function downbotton() {
    navlist.classList.toggle("open");
    navbutton01.classList.toggle("redesign");
}

navbutton01.addEventListener("click", downbotton);

//   ********************　banner　アクション　**************
const banner = document.querySelector("#sec01 .banner");
function scrollcount() {
    let scrollCheck = window.scrollY;
    if (scrollCheck >= 1000) {
        banner.classList.add("active");
        console.log("1000ピクセル以上スクロールされました");
        window.removeEventListener("scroll", scrollcount);
    }
}

window.addEventListener("scroll", scrollcount);

const clickbutton = document.querySelector("#sec01 .banner span");
function clickevent() {
    banner.classList.remove("active");
}
clickbutton.addEventListener("click", clickevent);

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
    slidesPerView: 3,
    speed: 6000,
    allowTouchMove: false,
    autoplay: {
        delay: 0,
        disableOnInteraction: false,
    },
});
