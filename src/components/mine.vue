<template>
  <div style="position: fixed;top:0;bottom: 0;height: 100%;width: 100%;background: #fff;z-index: 120;">
	<div class="mine_head">
		<div>
			<a href="#/">
  			<span class="glyphicon glyphicon-arrow-left"></span>
  		  </a> 
		</div>
			<div class="mine_login">
				<a href="#/login" class="mine_wating">
				<div>
					<span class="glyphicon glyphicon-user"></span>
				    
				</div>
				<p>					
					未登录					
				</p>
				</a>
			</div>
			<div class="search_set">设置</div>
			<ul class="search_it">
				<li>
					<span class="glyphicon glyphicon-adjust" style="color:#dcdea9;"></span>
					夜间模式
				</li>
				<li>
					<span class="glyphicon glyphicon-wrench" style="color:#dcdea9;"></span>
					其他设置
				</li>
				<li>
					<span class="glyphicon glyphicon-list-alt" style="color:#dcdea9;"></span>
					用户反馈
				</li>
			</ul>
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
   .mine_head{
   	width: 110%;   	
   	position: absolute;
   	top:0;
   	left: -0.5rem;
   	height: 30%;
   	background: url(../assets/2.jpg)no-repeat;
   	background-size:100%;
   	opacity: 0.9;
   	div:nth-child(1){
   		margin-left: 0.7rem;
   		margin-top:-0.3rem;
   		a{
   			color: #fff;
   			font-size: 0.5rem;
   		}
   	}   	
   }
   .mine_login{
   		
   		width: 30%;color: #fff;
   		margin: 0.3rem auto;
   		text-align: center;
   		div{
   			border: 0.055rem solid #fff;
   			height: 2rem;
   			width: 2rem;
   			background: #9CB3C3;
   			border-radius: 1rem 1rem 1rem 1rem;
   		}
   		span{
   			margin-top: 0.5rem;
   			color: #fff;
   			font-size:0.85rem ;
   		}
   		p{
   			margin-top: 0.1rem;
   			font-size:0.55rem ;
   		}
   	}
   	.search_set{
   		text-indent: 0.8rem;
   		font-size:0.4rem ;
   		width: 110%;
   		margin-top: 1rem;
   		line-height: 0.8rem;
   		color: #777777;
   		height: 0.8rem;
   		background: #f0f1df;
   	}
   	.search_it{
   		font-size:0.45rem;
   		width: 110%;
   		position: absolute;   	
   	     left: -0.8rem;
   		li{
   			width: 100%;line-height: 0.9rem;
   			text-indent: 0.25rem;
   			border-bottom: 0.01rem solid #eee;
   			span{
   				margin-right: 0.2rem;
   			}
   		}
   	}
   	.mine_wating{
   		color: #fff;
   	}
</style>
