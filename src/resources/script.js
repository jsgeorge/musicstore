var windowSize = "";
var windowWidth = 0;
var actualSize = 0;
var firstRun = true;

$(document).ready(function() {
  checkBrowserSize();
  $("a.logo").on("click", function() {
    $(".topnav li a").removeClass("topnavSel");
    $("nav li a").removeClass("navSel");
    $("#home").addClass("topnavSel");
    windowWidth = window.outerWidth;
    var contentWidth = $("body").width();
    var sizeDiff = windowWidth - contentWidth;
    actualSize = windowWidth - sizeDiff;

    if (actualSize <= 500) {
      var navHeight = $("nav").height();
      var mobilenavHeight = $("mobilenav").height();
      if (mobilenavHeight > 0) $("mobilenav").animate({ height: "0px" }, 500);
      if (navHeight > 0) $("nav").animate({ height: "0px" }, 500);
    }
  });
  $("#home").on("click", function() {
    $("topnav2 li a").removeClass("topnavSel");
    $(this).css({ color: "#fff" });
  });
  $("#newProducts").on("click", function() {
    $("topnav2 li a").removeClass("topnavSel");
    $(this).addClass("topnavSel");
  });
  $("#specials").on("click", function() {
    $("topnav2 li a").removeClass("topnavSel");
    $(this).addClass("topnavSel");
  });
  $("#allProducts").on("click", function() {
    $("topnav2 li a").removeClass("topnavSel");
    $(this).addClass("topnavSel");
  });
  $("#reviews").on("click", function() {
    $("topnav2 li a").removeClass("topnavSel");
    $(this).addClass("topnavSel");
  });

  $("#guitars").on("click", function() {
    $("nav li a").removeClass("navSel");
    $(this).addClass("navSel");
    $(this).css({ color: "#fff", textdecoration: "none" });
  });
  $("#basses").on("click", function() {
    $("nav li a").removeClass("navSel");
    $(this).addClass("navSel");
  });
  $("#drums").on("click", function() {
    $("nav li a").removeClass("navSel");
    $(this).addClass("navSel");
  });
  $("#livesound").on("click", function() {
    $("nav li a").removeClass("navSel");
    $(this).addClass("navSel");
  });
  $("#keyboards").on("click", function() {
    $("nav li a").removeClass("navSel");
    $(this).addClass("navSel");
  });
  $("#recording").on("click", function() {
    $("nav li a").removeClass("navSel");
    $(this).addClass("navSel");
  });
  //loadHero();
  $("a.menu_mobile").on("click", function() {
    var navHeight = $("mobilenav").height();
    var newNavHeight = $("mobilenav div").height();

    if (navHeight == 0) {
      $("mobilenav").animate({ height: newNavHeight + "px" }, 500);
      $(this).addClass("selected");
    } else {
      $("mobilenav").animate({ height: "0px" }, 500);
      $(this).removeClass("selected");
    }
  });

  $("mobilenav li a").on("click", function() {
    $("mobilenav").animate({ height: "0px" }, 500);
    var navHeight = $("mobilenav").height();
    var newNavHeight = $("mobilenav div").height();
    alert(navHeight);
  });

  $("a.shopStore").on("click", function() {
    var navHeight = $("nav").height();
    var newNavHeight = $("nav div").height();
    if (navHeight == 0) {
      $("nav").animate({ height: newNavHeight + "px" }, 500);
      $(this).addClass("selected");
    } else {
      $("nav").animate({ height: "0px" }, 500);
      $(this).removeClass("selected");
    }
  });

  $("shopLinkBack").on("click", function() {
    alert("ok");
    var navHeight = $("nav").height();
    var newNavHeight = $("nav div").height();
    $("nav").animate({ height: newNavHeight + "px" }, 500);
    $(this).addClass("selected");
  });

  $("nav li a").on("click", function() {
    windowWidth = window.outerWidth;
    var contentWidth = $("body").width();
    var sizeDiff = windowWidth - contentWidth;
    actualSize = windowWidth - sizeDiff;

    if (actualSize <= 500) {
      $("nav").animate({ height: "0px" }, 500);
      $("mobilenav").animate({ height: "0px" }, 500);
    }
  });

  $("a.shopLink").on("click", function() {
    var navHeight = $("mobilenav").height();
    var newNavHeight = $("mobilenav div").height();
    if (navHeight == 0) {
      $("mobilenav").animate({ height: newNavHeight + "px" }, 500);
      $(this).addClass("selected");
    }
  });
});

function checkBrowserSize() {
  windowWidth = window.outerWidth;
  var contentWidth = $("body").width();
  var sizeDiff = windowWidth - contentWidth;
  actualSize = windowWidth - sizeDiff;

  if (actualSize > 800) {
    newWindowSize = "large";
  }
  if (actualSize <= 800 && actualSize > 500) {
    newWindowSize = "medium";
  }
  if (actualSize <= 500) {
    newWindowSize = "small";
  }

  if (windowSize != newWindowSize) {
    windowSize = newWindowSize;
    loadHero();
  } else {
    $("h1").append(" -- no change");
  }
}

function loadHero() {
  //$('#hero').load('content/content_large.html');
  if (windowSize == "large") {
    $("mobilenav").css("height", "0");
    $("nav").css("height", "auto");
  }

  if (windowSize == "medium") {
    if (actualSize > 500) {
      $("mobilenav").css("height", "0");
      $("nav").css("height", "auto");
    }
  }

  if (windowSize == "small") {
    if (actualSize <= 500) {
      $("mobilenav").css("height", "0px");
      $("nav").css("height", "0px");
    }
    $("#hero").html("");
    $("a.mobile_menu").removeClass("selected");
    firstRun = false;
  }
}
