$(function() {
    /* Smooth scrolling */
    $("a[href*=#]:not([href=#])").on("click", function() {
        if (location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && location.hostname === this.hostname) {
            var target = $(this.hash);
            if (target) {
                $("html, body").animate({
                    //Scroll to target's top minus the header's height
                    scrollTop: target.offset().top - $("header").outerHeight()
                }, 1000);
            }
            return false;
        }
    });

    /* Tracks the scroll position and create effects */
    $(window).on("scroll", function() {
        var curPos = $(window).scrollTop();
        if (curPos > $("#about").outerHeight() / 1.5) {
            $("header").slideDown("1000");
        } else {
            $("header").slideUp("1000");
        }
    });
});

$(function(){
  /* 非表示 */
  $(".show-item").hide();
  /* クリックしたときに処理 */
  $(".item").click(function(){
  /* 削除 */
  $('.back-end').removeClass("active-show");
  /* 追加 */
  $('.back-end', this).addClass("active-show");
  $(".show-item .single").addClass("show-single");
  /* html要素を取得 */
  $(".show-item .single").html($(".active-show").html());
    $(".show-item").fadeIn(600);
    $(".show-item-close").addClass("show-close");
    $("html,body").addClass("overflow");
  });
  $(".show-item-close").click(function(){
    $(".show-item").fadeOut(600);
    $(".show-item-close").removeClass("show-close");
  $(".show-item .single").removeClass("show-single");
    $("html,body").removeClass("overflow");
  });
  $(".show-item-back-top").click(function(){
    $(".show-item").animate({
      scrollTop: 0
    }, 1000);
  });
});
