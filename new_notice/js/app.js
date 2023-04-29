window.addEvent("domready", function (e) {
    // Make All Itemmall links open in a New Window

    $$(".item-title a").each(function (element) {
      element.setProperty("target", "_blank");
    });

    $$(".item-image a").each(function (element) {
      element.setProperty("target", "_blank");
    });

    $("theEvents").setStyle("display", "none");
    $("theOffers").setStyle("display", "none");
    $("hideNews").addClass("active");

    $("hideEvents").addEvent("click", function (e) {
      if (!this.hasClass("active")) {
        $("hideEvents").toggleClass("active");
        if ($("hideNews").hasClass("active")) {
          $("hideNews").toggleClass("active");
        }
        if ($("hideOffers").hasClass("active")) {
          $("hideOffers").toggleClass("active");
        }
      }
      $("theOffers").setStyle("display", "none");
      $("theNews").setStyle("display", "none");
      $("theEvents").setStyle("display", "block");
    });

    $("hideNews").addEvent("click", function (e) {
      if (!this.hasClass("active")) {
        if ($("hideEvents").hasClass("active")) {
          $("hideEvents").toggleClass("active");
        }
        $("hideNews").toggleClass("active");
        if ($("hideOffers").hasClass("active")) {
          $("hideOffers").toggleClass("active");
        }
      }
      $("theNews").setStyle("display", "block");
      $("theEvents").setStyle("display", "none");
      $("theOffers").setStyle("display", "none");
    });

    $("hideOffers").addEvent("click", function (e) {
      if (!this.hasClass("active")) {
        if ($("hideEvents").hasClass("active")) {
          $("hideEvents").toggleClass("active");
        }
        if ($("hideNews").hasClass("active")) {
          $("hideNews").toggleClass("active");
        }
        $("hideOffers").toggleClass("active");
      }
      $("theNews").setStyle("display", "none");
      $("theEvents").setStyle("display", "none");
      $("theOffers").setStyle("display", "block");
    });

    // Do Fade
    function doFade() {
      $("loading").setStyles({ opacity: "1", visibility: "visible" });
      $("loading").fade(0);
    }
    doFade();
  });