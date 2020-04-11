//打开字滑入效果
window.onload = function(){
	$(".connect p").eq(0).animate({"left":"0%"}, 600);
	$(".connect p").eq(1).animate({"left":"0%"}, 400);
};
//jquery.validate表单验证
$(document).ready(function(){
	//登陆表单验证
	$("#loginForm").validate({
		rules:{
			username:{
				required:true,//必填
				minlength:3, //最少6个字符
				maxlength:32,//最多20个字符
			},
			password:{
				required:true,
				minlength:3, 
				maxlength:32,
			},
		},
		//错误信息提示
		messages:{
			username:{
				required:"必须填写用户名",
				minlength:"用户名至少为3个字符",
				maxlength:"用户名至多为32个字符",
				remote: "用户名已存在",
			},
			password:{
				required:"必须填写密码",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为32个字符",
			},
		},
	//表单全部校验后执行
	submitHandler:
		function(){
			location.href="https://victoy-vision.github.io/DaMei/index.html";
		}
	});
	//注册表单验证
	$("#registerForm").validate({
		rules:{
			username:{
				required:true,//必填
				minlength:3, //最少6个字符
				maxlength:32,//最多20个字符
				remote:{
					url:"http://kouss.com/demo/Sharelink/remote.json",//用户名重复检查，别跨域调用
					type:"post",
				},
			},
			password:{
				required:true,
				minlength:3, 
				maxlength:32,
			},
			email:{
				required:true,
				email:true,
			},
			confirm_password:{
				required:true,
				minlength:3,
				equalTo:'.password'
			},
			phone_number:{
				required:true,
				phone_number:true,//自定义的规则
				digits:true,//整数
			}
		},
		//错误信息提示
		messages:{
			username:{
				required:"必须填写用户名",
				minlength:"用户名至少为3个字符",
				maxlength:"用户名至多为32个字符",
				remote: "用户名已存在",
			},
			password:{
				required:"必须填写密码",
				minlength:"密码至少为3个字符",
				maxlength:"密码至多为32个字符",
			},
			email:{
				required:"请输入邮箱地址",
				email: "请输入正确的email地址"
			},
			confirm_password:{
				required: "请再次输入密码",
				minlength: "确认密码不能少于3个字符",
				equalTo: "两次输入密码不一致",//与另一个元素相同
			},
			phone_number:{
				required:"请输入手机号码",
				digits:"请输入正确的手机号码",
			},
		
		},
	//表单全部校验后执行
	submitHandler:
		function(){
			location.href="https://victoy-vision.github.io/DaMei/Sign_in.html";
		}
	});
	//添加自定义验证规则
	jQuery.validator.addMethod("phone_number", function(value, element) { 
		var length = value.length; 
		var phone_number = /^(((13[0-9]{1})|(15[0-9]{1}))+\d{8})$/ 
		return this.optional(element) || (length == 11 && phone_number.test(value)); 
	}, "手机号码格式错误"); 
});

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