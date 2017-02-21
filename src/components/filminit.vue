<template>
	<div>
  <div class="header_head">
  		<div>
  			<a href="#/mine">
  			<span class="glyphicon glyphicon-user"></span>
  		    </a>
  		</div>
  		<div><span>一
  			个影视</span></div>
  		<div>
  			<a href="#/search">
  			<span class="glyphicon glyphicon-search"></span>
  			</a>
  		</div>
  </div>
  <div class="konghead"></div>
  <!--获取数据-->
  <div class="film_ul">
  	<div v-for='filmdata in filmData' style="border-bottom:3px #eee solid;">
  			
  		<div><img :src="filmdata.share_info.image"/></div>
  		<div class="film_secondfont">
  			<p>{{filmdata.title}}</p>
  			<p>——《{{filmdata.subtitle}}》</p>
  			<p>{{filmdata.share_info.content}}</p>
  		</div>
  		
  	</div>
  </div>
</div>
</template>

<script>
export default {
	data () {
    return {
      filmData: ''
      }
        },
        created() {
        	this.$http.get('/api/yingshidata').then((response) => {
        		response = response.body
        		if(response.errno === 0) {
        			this.filmData = response.data
//      			console.log(this.filmData)
        		}
        	})
        }
        
}
</script>
<style scoped lang="scss">
 @import '../common/scss/headcommon.scss';
 .film_ul{
 		width: 100%; 
 		padding-left: 0;
 		
 			img{
 				width: 100%;
 			}
 	}
 	
 	.film_secondfont{
 		p:nth-child(1){
 				font-size:0.8rem;
 				text-indent: 0.5rem;
 				color: #000;
 			}
 		p:nth-child(2){
 				font-size:0.35rem;
 				color: #555;
 				text-indent: 0.5rem;
 			} 	
 			p:nth-child(3){
 				font-size:0.45rem;
 				color: #555;
 				text-align: center;
 			} 			
 	}
</style>
