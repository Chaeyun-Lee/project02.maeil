//jQuery

//드롭다운 메뉴
$(function () {
  $("#mainMenu").mouseover(function () {
    $("#topHeader").stop().css("background-color", "#ffffff");
    $(".subMenu").stop().slideDown(300);
    $("#subTab").stop().slideDown(300);
  });
  $("#mainMenu").mouseleave(function () {
    $("#topHeader").stop().css("background-color", "inherit");
    $(".subMenu").stop().slideUp(100);
    $("#subTab").stop().slideUp(100);
  });
});

// 풀페이지커버 캐러셀

$(function () {
  let num = 1;
  function slideCover() {
    if (num > $(".fullImgBox").length - 1) {
      num = 1;
      $(".fullImgBox")
        .eq(num - 1)
        .siblings()
        .removeClass("active");
      $(".fullImgBox")
        .eq(num - 1)
        .addClass("active");
      $(".textSet")
        .eq(num - 1)
        .siblings()
        .removeClass("textactive");
      $(".textSet")
        .eq(num - 1)
        .addClass("textactive");
      $(".slideSpan")
        .eq(num - 1)
        .siblings()
        .removeClass("activate");
      $(".slideSpan")
        .eq(num - 1)
        .addClass("activate");
      console.log(num);
      return;
    }
    $(".fullImgBox").eq(num).siblings().removeClass("active");
    $(".fullImgBox").eq(num).addClass("active");
    $(".textSet").eq(num).siblings().removeClass("textactive");
    $(".textSet").eq(num).addClass("textactive");
    $(".slideSpan").eq(num).siblings().removeClass("activate");
    $(".slideSpan").eq(num).addClass("activate");
    num += 1;
    console.log(num);
  }
  setInterval(slideCover, 5000);
});

//Brand 오토 캐러셀
$(".autoplay").slick({
  slidesToShow: 3,
  slidesToScroll: 3,
  autoplay: true,
  autoplaySpeed: 4000,
  prevArrow: $("#backArrow"),
  nextArrow: $("#forwardArrow"),
});

//javascript

window.onload = function () {
  //페이지 로드 시 잠깐 보이는 트랜지션 없애는 용도
  document.querySelector("body").classList.remove("preload");

  //Scroll 시 header fixed
  window.addEventListener("scroll", () => {
    const topMenu = document.querySelector("#topHeader");
    const topBtn = document.querySelector(".topBtn");
    if (window.scrollY > 0) {
      topMenu.style.position = "fixed";
      topMenu.style.top = "0";
      topMenu.style.zIndex = "10";
      topMenu.style.backgroundColor = "hsla(0, 0%, 99%, 0.1)";
      topMenu.style.backdropFilter = "blur(5px)";
      if(this.window.scrollY > 400){
        topBtn.style.visibility = "visible";
    } else if (this.window.scrollY < 400){
        topBtn.style.visibility = "hidden";
    }
    } else if (window.scrollY == 0) {
      topMenu.style.backgroundColor = "transparent";
    }
  });

  // 화살표 클릭 시 좌우로 슬라이드
  const brandsMoving = document.querySelector("#brandsMoving");

  const brandsBtn = document.querySelectorAll(".viewmore");
  const backArrow = document.querySelector("#backArrow");
  const forwardArrow = document.querySelector("#forwardArrow");
  const brandsSlide = document.querySelector("#brandsSlide");

  // let num = 0;

  // function disableBtn() {
  //   if (num === 0) {
  //     backArrow.classList.add("disable");
  //     forwardArrow.classList.remove("disable");
  //   } else if (num < 2) {
  //     backArrow.classList.remove("disable");

  //   } else if(num === 2){
  //     forwardArrow.classList.add("disable");
  //   }
  // }

  // disableBtn();

  // backArrow.addEventListener("click", function () {
  //   if (num === 0) return;
  //   num -= 1;
  //   brandsMoving.style.transform = `translateX(-${837 * num}px)`; //px로 작업하니까 브라우저 넓이 변경 시 문제생김

  //   disableBtn();
  // });

  // forwardArrow.addEventListener("click", function () {
  //   if (num === 2) return;
  //   num += 1;
  //   brandsMoving.style.transform = `translateX(-${837 * num}px)`;

  //   disableBtn();
  // });

  // //scroll 시 애니메이션
  const pages = document.querySelectorAll(".pages");

  const obsever = new IntersectionObserver(
    (e) => {
      e.forEach((pages) => {
        if (pages.isIntersecting) {
          console.log("seeit");
          pages.target.classList.add("visible");
        } else {
          console.log("cant see");
          pages.target.classList.remove("visible");
        }
      });
    },
    {
      threshold: 0.3,
    }
  );
  obsever.observe(pages[0]);
  obsever.observe(pages[1]);
  obsever.observe(pages[2]);

  //Brands 브랜드별로 hover 시 반응
  let brandsBox = document.getElementsByClassName("brandsBox");
  const brandsImg = document.querySelectorAll(".brandsInnerBox > img");
  const brandsText = document.querySelectorAll(".brandsText");

  console.log(brandsBox);
  for (let i = 0; i <= brandsBox.length; i++) {
    brandsBox[i].addEventListener("mouseover", boxOver);
    brandsBox[i].addEventListener("mouseout", boxOut);

    function boxOver() {
      brandsText[i].style.visibility = "visible";
      brandsText[i].style.opacity = "1";
      brandsText[i].style.bottom = "0";
      brandsBtn[i].style.visibility = "visible";
      brandsImg[i].style.transform = "translateY(-10%)";
    }
    function boxOut() {
      brandsText[i].style.visibility = "hidden";
      brandsText[i].style.opacity = "0";
      brandsText[i].style.bottom = "-20%";
      brandsBtn[i].style.visibility = "hidden";
      brandsImg[i].style.transform = "translateY(0%)";
    }
  }
};
