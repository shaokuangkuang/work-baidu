var   user= document.getElementById('user'),
      num= document.getElementById('num'),
      password= document.getElementById('password'),
      yanzheng= document.getElementById('yanzheng'),
      span=document.getElementsByClassName('span'),
      submit=document.getElementById('submit');

var test=false,test1=false,test2=false,test3=false;     

      console.log(span[0])
//用户名验证
      user.onblur=function(){
          //判断非空
        var unname = this.value.trim();
        if(unname==''){
            span[0].style.display='block';
            return;
        }
        //判断非法字符
        var regex = /^[a-zA-Z0-9_]*$/;
        var res =regex.test(unname)
        if(!res){
            span[0].style.display='block';
            return;
        }
        //判断纯数字
        var allnum = /\D/;
        var res =allnum.test(unname)
        if(!res){
            span[0].style.display='block';
            return;
        }else{
            span[0].style.display='none';
            test=true;
        }
      }
//电话号码验证
      num.onblur=function(){
        var number = /^\d{11}$/;
        if(!number.exec(num.value)){
            span[1].style.display='block';
            return;
        }else{
            span[1].style.display='none';
            test1=true;
        }
      }
//密码验证
      password.onblur = function(){
        var pw =this.value.trim();
        var reg=/(?!.*\s)(?!^[\u4e00-\u9fa5]+$)(?!^[0-9]+$)(?!^[A-z]+$)(?!^[^A-z0-9]+$)^.{8,14}$/;
        if(!reg.test(pw)){
            span[2].style.display='block';
            return;
        }else{
            span[2].style.display='none';
            test2=true;
        }
      }
//验证码验证
    var clock = '';
    var nums = 3;
    var btn;
    function sendCode(thisBtn)
    { 
        btn = thisBtn;
        btn.disabled = true; //将按钮置为不可点击
        btn.value = nums;
        clock = setInterval(()=>{
            nums--;
            if(nums > 0){
                btn.value = nums;
                span[3].style.display='none';
            }else if(nums==0 && yanzheng.value.trim()==''){  
                console.log(yanzheng)
                span[3].style.display='block';
                clearInterval(clock); //清除js定时器
                btn.disabled = false;
                btn.value = '获取验证码';
                nums = 3; 
            }else{
                test3=true;
                clearInterval(clock); //清除js定时器
                btn.disabled = false;
                btn.value = '获取验证码';
            }
        }, 1000); //一秒执行一次
    }
//注册
    submit.onclick =function(){
        if(test && test1 && test2 && test3){
            alert("注册成功");
        }else if(!test){
            alert("用户名不正确，用户名仅支持中英文，数字和下划线且不能为纯数字");
        }
        else if(!test1){
            alert("手机号码不正确");
        }
        else if(!test2){
            alert("密码设置不符合要求");
        }
        else if(!test3){
            alert("验证码错误或请求超时，请稍后再试");
        }
    }
