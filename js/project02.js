 //Scroll 시 header fixed

 window.addEventListener("scroll", () => {
    const topMenu = document.querySelector("#topHeader");
    if (window.scrollY > 0) {
      topMenu.style.position = "fixed";
      topMenu.style.top = "0";
      topMenu.style.zIndex = "50";
      topMenu.style.backgroundColor = "#ffffff";
    } else if (window.scrollY == 0) {
      topMenu.style.backgroundColor = "transparent";
    }
  });


//Brands 브랜드별로 hover 시 반응
  const brandsBox = document.querySelectorAll(".brandsBox");
  const brandsImg = document.querySelectorAll(".brandsInnerBox > img");
  const brandsText = document.querySelectorAll(".brandsText");
  const brandsBtn = document.querySelectorAll(".viewmore");

  for (let i = 0; i <= brandsBox.length; i++) {
    brandsBox[i].addEventListener("mouseover", function () {
      brandsText[i].style.visibility = "visible";
      brandsText[i].style.opacity = "1";
      brandsText[i].style.bottom = "0";
      brandsBtn[i].style.visibility = "visible";
      brandsImg[i].style.transform = "translateY(-10%)";
    });
    brandsBox[i].addEventListener("mouseout", function () {
      brandsText[i].style.opacity = "0";
      brandsText[i].style.visibility = "hidden";
      brandsText[i].style.bottom = "-20%";
      brandsBtn[i].style.visibility = "hidden";
      brandsImg[i].style.transform = "translateY(0%)";
    });
  }

  // 화살표 클릭 시 좌우로 슬라이드
  
  const backArrow = document.querySelector('.backArrow');
  const forwardArrow = document.querySelector('.forwardArrow');
  const brandsSlide = document.querySelector('#brandsSlide');

  forwardArrow.addEventListener('click',function(){
    brandsSlide.style.transform='translateX(-800px)';
  })

  backArrow.addEventListener('click',function(){
    brandsSlide.style.transform='translateX(800px)';
  })
