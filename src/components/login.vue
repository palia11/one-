<template>
  <div class="login_all">
  	<div class="login_float">
  		
  	
    <div class="login_back">
  		  <a href="#/">
  			<span class="glyphicon glyphicon-arrow-left"></span>
  			<span style="margin-left: 2.5rem">登录ONE</span>
  		  </a>  
  		</div>
 	<div class="login_mess">
 		<button>
 			微信
 		</button>
 		<button>
 			微博
 		</button>
 		<button>
 			QQ
 		</button>
 		<a href="#" class="login_jump">
 			<p>
 				或者
 			</p>
 			<p>
 				<a href="#/">
 				<span class="glyphicon glyphicon-phone"></span>
 				使用手机号登录
 				</a>
 			</p>
 		</a>
 	</div>
 	<div class="login_agree">
 		<p>创建用户即代表您同意</p>
 		<p>使用条款和隐私政策</p>
 	</div>
 	 
 	
  </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>
<style scoped lang="scss">
.login_all{
	position: fixed;
	top:0;bottom: 0;
	height: 100%;
	width: 110%;
	left:-1rem;	
	z-index: 120;	
	background: url(../assets/4.jpg) no-repeat;
	background-size: cover;
            filter: blur(15px);	
}
.login_float{
	position: fixed;
	top:0;bottom: 0;
	height: 100%;
	width: 110%;
	background:rgba(0,0,0,0.5);
	left:-1rem;
	z-index: 130;
}
.login_back{
	width: 100%;
	height:1rem;
	text-indent: 0.8rem;
	a{
		color: #ccc;
		font-size: 0.5rem;
	}
}
.login_mess{
	margin-top: 1rem;
	button{
		width: 70%;
		height: 1rem;
		margin-left:2rem ;
		background: rgba(255,255,255,0.4);
		border: 1px solid #fff;
		color: #fff;
		margin-bottom: 0.2rem;
		border-radius:5% 5% 5% 5%;
	}
}
.login_jump{
	color:#fff;
	font-size: 0.35rem;
	text-align: center;
	a{
		color:#fff;
	}
}
.login_agree{
	position: absolute;
	width: 110%;
	bottom: 0.5rem;
	color:#fff;
	font-size: 0.35rem;
	text-align: center;
	text-decoration: underline;
}
</style>