const $body = window.opera
    ? document.compatMode == "CSS1Compat"
      ? $("html")
      : $("body")
    : $("html,body"),
  $section = $("section");

var numOfPages = $section.length - 1, //取得section的數量
  curPage = 0, //初始頁
  scrollLock = false;

function scrollPage() {
  //滑鼠滾動
  $(document).on("mousewheel DOMMouseScroll", function (e) {
    if (scrollLock) return;
    if (e.originalEvent.wheelDelta > 0 || e.originalEvent.detail < 0)
      navigateUp();
    else navigateDown();
  });
  //鍵盤上下鍵
  $(document).on("keydown", function (e) {
    if (scrollLock) return;
    if (e.which === 38) navigateUp();
    else if (e.which === 40) navigateDown();
  });
}

function pagination() {
  scrollLock = true;
  $body.stop().animate(
    {
      scrollTop: $section.eq(curPage).offset().top
    },
    1000,
    "swing",
    function () {
      scrollLock = false;
    }
  );
}

function navigateUp() {
  if (curPage === 0) return;
  curPage--;
  pagination();
}

function navigateDown() {
  if (curPage === numOfPages) return;
  curPage++;
  pagination();
}

$(function () {
  scrollPage();
});
