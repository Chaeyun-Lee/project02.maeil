 //Scroll 시 header fixed

 window.addEventListener("scroll", () => {
    const topMenu = document.querySelector("#topHeader");
    const header = document.querySelector('header');
    if (window.scrollY > 0) {
      topMenu.style.position = "fixed";
      topMenu.style.top = "0";
      topMenu.style.zIndex = "10";
      topMenu.style.backgroundColor = "#ffffff";
    } else if (window.scrollY == 0) {
      topMenu.style.backgroundColor = "transparent";
    }
  });
  // 화살표 클릭 시 좌우로 슬라이드

  const brandsBox = document.getElementsByClassName("brandsBox");
  const brandsMoving = document.querySelector('#brandsMoving');
  const brandsImg = document.querySelectorAll(".brandsInnerBox > img");
  const brandsText = document.querySelectorAll(".brandsText");
  const brandsBtn = document.querySelectorAll(".viewmore");
  const backArrow = document.querySelector('#backArrow');
  const forwardArrow = document.querySelector('#forwardArrow');
  const brandsSlide = document.querySelector('#brandsSlide');

    let num = 0; 
    
    function disableBtn(){
      if(num === 0){
      backArrow.classList.add('disable');
      forwardArrow.classList.remove('disable');
    } else if(num === 2){
      backArrow.classList.remove('disable');
      forwardArrow.classList.add('disable');
    }}

    disableBtn();

    backArrow.addEventListener('click',function(){
      if(num === 0) return;
      num -= 1;
      brandsMoving.style.transform = `translateX(-${837*num}px)`;
      
      disableBtn();
    })
    
    forwardArrow.addEventListener('click',function(){
      if(num === 2) return;
      num += 1;
      brandsMoving.style.transform = `translateX(-${837*num}px)`;
      
      disableBtn();
    })

//Brands 브랜드별로 hover 시 반응

  for (let i = 0; i <= brandsBox.length; i++) {
    function boxOver(){
      brandsText[i].style.visibility = "visible";
      brandsText[i].style.opacity = "1";
      brandsText[i].style.bottom = "0";
      brandsBtn[i].style.visibility = "visible";
      brandsImg[i].style.transform = "translateY(-10%)";
  }
  function boxOut(){
    brandsText[i].style.visibility = "hidden";
    brandsText[i].style.opacity = "0";
    brandsText[i].style.bottom = "-20%";
    brandsBtn[i].style.visibility = "hidden";
    brandsImg[i].style.transform = "translateY(0%)";
}
    brandsBox[i].addEventListener("mouseover", boxOver);
    brandsBox[i].addEventListener("mouseout", boxOut);
  }

  //landing page animation

  const coverP1 = document.querySelectorAll('.coverP');
