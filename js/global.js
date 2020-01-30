$(function () {
    // 手机左边弹出菜单
    $(".menu_icon").click(function () {
        $(".black_cloth").show();
        $(".wrap_menu").animate({ "left": "0" }, 200);
        $("body").animate({ "left": "250px" }, 200);
        $("body").css("overflow", "hidden");
        $(".wrap_footer").animate({ "left": "250px" }, 200);
    })
    $(".black_cloth").click(function () {
        $(".black_cloth").hide();
        $(".wrap_menu").animate({ "left": "-250" }, 200);
        $("body").animate({ "left": "0" }, 200);
        $("body").css("overflow", "visible");
        $(".wrap_footer").animate({ "left": "0" }, 200);
    })
    // 手机左边弹出菜单下拉
    $(".wrap_menu>li.menu_lists>a").click(function () {
        if ($(this).parent().find(".wrap_menu_2").css("display") == "block") {
            $(this).parent().find(".wrap_menu_2").slideUp();
            $(this).parent().find("p").html("+");
            return;
        }
        $(".wrap_menu_2").slideUp();
        $(".wrap_menu li p").html("+");
        $(this).parent().find("p").html("-");
        $(this).parent().find(".wrap_menu_2").slideDown();
    })
    //点击导航弹出左边菜单
    $(".navigation").click(function () {
        $(".black_cloth").show();
        $(".wrap_menu").animate({ "left": "0" }, 200);
        $("body").animate({ "left": "250px" }, 200);
        $("body").css("overflow", "hidden");
        $(".wrap_footer").animate({ "left": "250px" }, 200);
    })
    //点击叉叉关闭左边弹出菜单
    $(".menu_close").click(function () {
        $(".black_cloth").hide();
        $(".wrap_menu").animate({ "left": "-250" }, 200);
        $("body").animate({ "left": "0" }, 200);
        $("body").css("overflow", "visible");
        $(".wrap_footer").animate({ "left": "0" }, 200);
    })
    //手机底部
    if ($(window).width() < 768) {
        var height = $(".wrap_footer").height() + 20;
        $(".pad").css("height", height + "px");
    }
    $(window).resize(function () {
        //手机底部
        if ($(window).width() < 768) {
            var height = $(".wrap_footer").height() + 20;
            $(".pad").css("height", height + "px");
        }
        // dtWidth();
    })
    function share() {
        var width = $(".wrap_share").width();
        var iconWidth = width * 0.2;
        var marginWidth = width * 0.04;
        var size = $(".wrap_share .wrap_share_box>div>a").size();
        var parentWidth = (iconWidth * size) + marginWidth * (size + 1);
        $(".wrap_share .wrap_share_box>div>a").css({ "width": iconWidth + "px", "marginLeft": marginWidth + "px" });
        $(".wrap_share .wrap_share_box>div").css("width", parentWidth + "px");
    }
    share();
    //手机底部点击搜索
    $(".w_searchButton").click(function () {
        var width = $(".wrap_footer").width();
        if ($(".wrap_search_input").css("left") == width + "px") {
            $(".wrap_search_input").animate({ "left": 0 }, 300);
        } else {
            $(".wrap_search_input").animate({ "left": "100%" }, 300);
        }
    })

    //手机菜单下拉
    var n = 0;
    $(".phone-menuicon").click(function () {
        $(".phone-menulist").slideToggle(200);
        n++;
        $(this).find("img").css("transform", "rotate(" + 180 * n + "deg)");
    })
    //  $(".phone_jia").append('<i class="jia">+</i><i class="jian">-</i>')
    $(".menu_list_body li a.sub1_a,.phone-menulist li a.sub1_a").click(function () {
        $(this).parent().siblings().find(".sub2").slideUp()
        $(this).parent().siblings().find("a.sub1_a").removeClass("cur")
        $(this).siblings(".sub2").slideToggle()
        $(this).toggleClass("cur");
        console.log($(this).find(".img1").hasClass("none"));
        if ($(this).find(".img1").hasClass("none")) {
            $(this).find(".img1").removeClass("none");
            $(this).find(".img2").addClass("none");
        } else {
            $(this).find(".img2").removeClass("none");
            $(this).find(".img1").addClass("none");
        }
        $(this).parent().siblings().find(".img1").removeClass("none");
        $(this).parent().siblings().find(".img2").addClass("none");
    })
    $(".sub2 li a.sub2_a").click(function () {
        $(this).parent().siblings().find(".sub3").slideUp()
        $(this).siblings(".sub3").slideToggle()

    })
    // function dtWidth() {
    //     var width = $(".pro_list dl dt").width();
    //     $(".pro_list dl dt").css("height", width + "px");
    // }
    // dtWidth();
    //模拟placeholder
    function inputplaceholder() {
        $('.feedback_list_box ').bind(' propertychange', function () {
            $(this).next().html("");
        });
        $(".feedback_list_box").each(function (i) {
                var self = $(".feedback_list_box:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        $(".feedback_list_box").focus(function () {
            $(".feedback_list_box").each(function (i) {
                var self = $(".feedback_list_box:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".feedback_list_box").blur(function () {
            $(".feedback_list_box").each(function (i) {
                var self = $(".feedback_list_box:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    inputplaceholder();
    function textareaplaceholder() {
        $('.feedback_list_box textarea').bind('input propertychange', "textarea", function () {
            $(this).next().html("");
        });
        $(".feedback_list_box textarea").each(function (i) {
                var self = $(".feedback_list_box textarea:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        $(".feedback_list_box textarea").focus(function () {
            $(".feedback_list_box textarea").each(function (i) {
                var self = $(".feedback_list_box textarea:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".feedback_list_box textarea").blur(function () {
            $(".feedback_list_box textarea").each(function (i) {
                var self = $(".feedback_list_box textarea:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    textareaplaceholder();
    function inputplaceholder1() {
        $(".ss input").each(function (i) {
                var self = $(".ss input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        $('.ss input').bind('input propertychange', function () {
            $(this).next().html("");
        });
        $(".ss input").focus(function () {
            $(".ss input").each(function (i) {
                var self = $(".ss input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
        $(".ss input").blur(function () {
            $(".ss input").each(function (i) {
                var self = $(".ss input:eq(" + i + ")");
                if (self.val() == null || self.val() == undefined || self.val() == "") {
                    self.next().html(self.attr("names"));
                } else {
                    self.next().html("");
                }
            })
        })
    }
    inputplaceholder1();
    //展开下一级
    $("ul.sidemenu li a").click(function () {
        $(this).parent().siblings().find(".sidemenu2").slideUp()//如果要点击其他缩上去则增加这句
        $(this).next("ul").slideToggle(300);
        setTimeout(function(){
        var height1=$(".inMian_left").height();
        var height2=$(".inMian_right").height();
             $(".inMian_right").css("height",height1);
        },300);
    })
    //当前选中项的所有父节点都显示出来，程序会将点击的li项默认添加.current
    $("ul.sidemenu li.current").parents().show();

    $('#owl-demo').owlCarousel({
        loop:true,
        items: 1,
        autoplay:true,
        autoplayTimeout:5000,
        autoplayHoverPause:true
    });
    $('#owl-demo1').owlCarousel({
            items: 1,
		});
    // 头部固定
    //  $(window).scroll(function () {
    //     var scrollHeight = $(window).scrollTop();
    //     if(scrollHeight>100){
    //        $("#header").addClass("fixed");
    //     }
    // }) 
})
// 鼠标点击特效
(function(){
            var a_idx = 0;
            window.onclick = function(event){
                 var a = new Array("❤富强❤","❤民主❤","❤文明❤","❤和谐❤","❤自由❤","❤平等❤","❤公正❤","❤法治❤","❤爱国❤","❤敬业❤","❤诚信❤","❤友善❤");

                var heart = document.createElement("b");    //创建b元素
                heart.onselectstart = new Function('event.returnValue=false');  //防止拖动

                document.body.appendChild(heart).innerHTML = a[a_idx];      //将b元素添加到页面上
                a_idx = (a_idx + 1) % a.length;
                heart.style.cssText = "position: fixed;left:-100%;z-index:999999999999999999999999999999999999999999999999999999999;";  //给p元素设置样式

                var f = 12,     // 字体大小
                    x = event.clientX - f / 2, // 横坐标
                    y = event.clientY - f, // 纵坐标
                    c = randomColor(),  // 随机颜色
                    a = 1,              // 透明度
                    s = 1.2;            // 放大缩小

                var timer = setInterval(function(){     //添加定时器
                    if(a <= 0){
                        document.body.removeChild(heart);
                        clearInterval(timer);
                    }else{
                        heart.style.cssText = "font-size:12px;cursor: default;position: fixed;color:" + c + ";left:" + x + "px;top:" + y + "px;opacity:" + a + ";transform:scale(" + s + ");z-index:999999999999999999999999999999999999999999999999999999999;";

                        y--;
                        a -= 0.016;
                        s += 0.002;
                    }
                },15)

            }
             // 随机颜色
            function randomColor() {

                return "rgb(" + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + "," + (~~(Math.random() * 255)) + ")";

            }
        }());