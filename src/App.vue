<template>
   <div id="app">   	
    <footer>
    	<ul class="footer_pointer">
    		<li>
    			<a href="#/" :class="{active:num==0}" @click="num=0">
    			<span class="glyphicon glyphicon-home"></span>
    		  <p class="footer_font">首页</p>
    		  </a>
    		</li>
    		<li>
    			<a href="#/read" :class="{active:num==1}" @click="num=1">
    			<span class="glyphicon glyphicon-book"></span>
    		  <p class="footer_font">阅读</p>
    		</li>
    		  </a>
    		<li>
    			<a href="#/music" :class="{active:num==2}" @click="num=2">
    			<span class="glyphicon glyphicon-music"></span>
    		  <p class="footer_font">音乐</p>
    		  </a>
    		</li>
    		<li>
    			<a href="#/film" :class="{active:num==3}" @click="num=3">
    			<span class="glyphicon glyphicon-film span_color"></span>
    		  <p class="footer_font">影视</p>
    		  </a>
    		</li>
    	</ul>
    </footer>
    <router-view></router-view>
  </div>
</template>

<script>
    export default {
        data() {
        	return {
        		num: 0        		
        	}
        }        	
    }
</script>

<style lang="scss">
@import './common/scss/footer.scss'
</style>
