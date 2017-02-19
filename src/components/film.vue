<template>
	<div>
  <div class="header_head">
  		<div><span class="glyphicon glyphicon-user"></span></div>
  		<div><span>一
  			个影视</span></div>
  		<div><span class="glyphicon glyphicon-search"></span></div>
  </div>
  <div class="konghead"></div>
  <!--获取音乐数据-->
  <div class="film_ul">
  	<div v-for='filmdata in filmData' style="border-bottom:3px #eee solid;">
  		<div class="film_firstdiv">
  			<p>-  影视   -</p>
  			<p>{{filmdata.title}}</p>
  			<p>文  / {{filmdata.author.user_name}}</p>
  		</div>
  		<div><img :src="filmdata.img_url"/></div>
  		<div class="film_secondfont">
  			<p>{{filmdata.forward}}</p>
  			<p>——《{{filmdata.subtitle}}》</p>
  			<p>{{filmdata.data}}</p>
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
 	.film_firstdiv{ 			
 			
 			p:nth-child(1){
 				font-size:0.4rem;
 				color: #666;
 				text-align: center;	
 			}
 			p:nth-child(2){
 				font-size:0.55rem;
 				text-indent: 0.3rem;
 			}
 			p:nth-child(3){
 				font-size:0.4rem;
 				text-indent: 0.3rem;
 			}
 			 	}
 	.film_secondfont{
 		p:nth-child(1){
 				font-size:0.35rem;
 				text-align: center;
 				color: #777;
 			}
 		p:nth-child(2){
 				font-size:0.35rem;
 				color: #555;
 				text-align: right;
 			} 	
 			p:nth-child(3){
 				font-size:0.35rem;
 				color: #555;
 				text-align: center;
 			} 			
 	}
</style>
