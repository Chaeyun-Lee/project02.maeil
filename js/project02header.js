  //Scroll 시 header fixed
  window.addEventListener("scroll", () => {
    const topMenu = document.querySelector("#topHeader");
    const header = document.querySelector("header");
    if (window.scrollY > 0) {
      topMenu.style.position = "fixed";
      topMenu.style.top = "0";
      topMenu.style.zIndex = "10";
      topMenu.style.backgroundColor = "hsla(0, 0%, 99%, 0.1)";
      topMenu.style.backdropFilter = "blur(5px)"
    } else if (window.scrollY == 0) {
      topMenu.style.backgroundColor = "#ffffff";
      topMenu.style.backdropFilter = "blur(0px)"
    }
  });

  //jQuery

//드롭다운 메뉴
$(function () {
    $("#mainMenu").mouseover(function () {
      $("#topHeader").stop().css("background-color", "#ffffff");
      $(".subMenu").stop().slideDown(300);
      $("#subTab").stop().slideDown(300);
    });
    $("#mainMenu").mouseleave(function () {
      $("#topHeader").stop().css("background-color", "#ffffff");
      $(".subMenu").stop().slideUp(100);
      $("#subTab").stop().slideUp(100);
    });
  });