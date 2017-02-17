<template>
   <div id="app">   	
    <footer>
    	<ul class="footer_pointer">
    		<li>
    			<a href="#/">
    			<span class="glyphicon glyphicon-home"></span>
    		  <p class="footer_font">首页</p>
    		  </a>
    		</li>
    		<li>
    			<a href="#/read">
    			<span class="glyphicon glyphicon-book"></span>
    		  <p class="footer_font">阅读</p>
    		</li>
    		  </a>
    		<li>
    			<a href="#/music">
    			<span class="glyphicon glyphicon-music"></span>
    		  <p class="footer_font">音乐</p>
    		  </a>
    		</li>
    		<li>
    			<a href="#/film">
    			<span class="glyphicon glyphicon-film"></span>
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
  name: 'app'
}
</script>

<style lang="scss">
@import './common/scss/footer.scss';

</style>
