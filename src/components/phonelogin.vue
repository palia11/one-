<template>
   <div>
   	<div class="header_head">
  		<div>
  		  <a href="#/login">
  			<span class="glyphicon glyphicon-arrow-left"></span>
  		  </a>  
  		</div>
  		<div><span>登录</span></div>
  		<div><span class="glyphicon glyphicon-search"></span></div>
  </div>
  	
      <div class="plog_first">
          <p>一个搜索</p>
          <p>搜索引擎就是把字典塞进硅片里</p>
      </div>
      <div class="search_second">
      	<input type="text" name="" id="" value="" />
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
    @import '../common/scss/headcommon.scss';
    .search_first{
    	text-align: center;
    	margin-top: 3rem;
    	p:nth-child(1){
    		font-size:0.8rem;
    	}
    	p:nth-child(2){
    		font-size:0.5rem;
    		color: #aaa;
    	}
    }
    .search_second{
    	text-align: center;
    	position: fixed;
    	bottom: 0;
    	width: 100%;
    	height: 60%;
    	background: #fff;
    	input{
    		width: 80%;
    		line-height: 0.8rem;
    		border: 0;
    		text-align: center;
    		outline: none;
    		border-bottom: 0.05rem solid;
    	}
    }
</style>