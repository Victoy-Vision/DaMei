$(function () {
    // pc菜单hover事件
    $(".menu>li").hover(function () {
        $(this).find(".menu_2").slideDown(200);
    }, function () {
        $(this).find(".menu_2").hide();
    })
    function type() {
        $(".pc_type .type_children").each(function (i) {
            var index = i + 1;
            if (i % 2 == 0) {
                $(".pc_type .type_children").eq(i).children("span").addClass("left");
                $(".pc_type .type_children").eq(i).children("i").addClass("left");
                $(".pc_type .type_children").eq(i).css("left", "-150px");
            } else {
                $(".pc_type .type_children").eq(i).children("span").addClass("right");
                $(".pc_type .type_children").eq(i).children("i").addClass("right");
                $(".pc_type .type_children").eq(i).css("right", "-151px");
            }
            if (i == 0) {
                $(".pc_type .type_children").eq(i).css("top", "106px");
            } else {
                var a = i - 0;
                $(".pc_type .type_children").eq(i).css("top", (a * 78 + 106) + "px");
            }
        })
    }
    type();
    function height() {
        var size = $(".pc_type .type_children").size();
        var top = parseInt($(".pc_type .type_children").eq(size - 1).css("top")) + 50;
        $(".pc_type").css("height", top + "px");
    }
    height();
    function wrapType() {
        var width = $(".wrap_type_box").width();
        var size = $(".wrap_type_box a").size();
        $(".wrap_type_box a").css("width", width * 0.25 + "px");
        $(".wrap_type_box .wrap_type").css("width", width * 0.25 * size + "px");
    }
    wrapType();
    $(window).resize(function () {
        wrapType();
    })
    if (document.body.clientWidth < 1012) {
        $(".pro_list>dl").each(function (i) {
            var index = i + 1;
            if (index % 2 == 0) {
                $(".pro_list>dl").eq(i).css("marginRight", 0);
            }
        })
    } else {
        $(".pro_list>dl").each(function (i) {
            var index = i + 1;
            if (index % 3 == 0) {
                $(".pro_list>dl").eq(i).css("marginRight", 0);
            }
        })
    }
    function main() {
        var height1 = $(".inMian_left").height();
        var height2 = $(".inMian_right").height();
        console.log("1", height1);
        console.log("2", height2);
        if (document.body.clientWidth > 972) {
            if (height1 > (height2 + 110)) {
                $(".inMian_right").css("height", height1);
            } else {
                $(".inMian_right").css("height", "auto");
            }
        }else if(document.body.clientWidth < 972&&document.body.clientWidth > 658){
             if (height1 > (height2 + 10)) {
                $(".inMian_right").css("height", height1);
            } else {
                $(".inMian_right").css("height", "auto");
            }
        }else{
             $(".inMian_right").css("height", "auto");
        }
    }
    window.onload = main;
    $(window).resize(function () {
        main();
        if (document.body.clientWidth < 972) {
            $(".pro_list>dl").each(function (i) {
                var index = i + 1;
                if (index % 2 == 0) {
                    $(".pro_list>dl").eq(i).css("marginRight", 0);
                }
            })
        } else {
            $(".pro_list>dl").each(function (i) {
                var index = i + 1;
                if (index % 3 == 0) {
                    $(".pro_list>dl").eq(i).css("marginRight", 0);
                }
            })
        }
    })
    $(".pro_list dl").hover(function () {
        $(this).find(".pro_more").show();
        $(this).find(".pro_more").addClass("fadeInLeft animated");
    }, function () {
        $(this).find(".pro_more").hide();
        $(this).find(".pro_more").removeClass("fadeInLeft animated");
    })
})