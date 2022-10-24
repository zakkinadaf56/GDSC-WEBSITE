$(document).ready(function () {
  $("ul.tabs li").click(function () {
    var tab_id = $(this).attr("data-tab");
    console.log(tab_id);
    $("ul.tabs li").removeClass("current");
    $(".tab-content").removeClass("current");

    console.log($(this));
    $(this).addClass("current");
    $("#" + tab_id).addClass("current");
  });
});
