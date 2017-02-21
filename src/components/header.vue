<template>
	<div>
  <div class="header_head">
  		<div>
  			<a href="#/mine">
  			<span class="glyphicon glyphicon-user"></span>
  		</a>
  		</div>
  		<div><span>一
  			个</span></div>
  		<div>
  			<a href="#/search">
  			<span class="glyphicon glyphicon-search"></span>
  			</a>
  		</div>
  </div>
  <div class="konghead"></div>
  <!--获取图文数据-->
  <!--引用Swiper-->
  <div class="swiper-container">
      <div class="swiper-wrapper">
      	<!--分页1-->
        <div class="swiper-slide">          
				  <div class="head_ul">
				  	<div v-for='(data,index) in dateData' v-if='index<10' style="border-bottom:3px #eee solid;">
				  		<a href="#/filminit" class="film_init">
				  		
				  		<div class="head_firstdiv">
				  			<p>{{data.date}}</p>
				  			<p>{{data.title}}</p>
				  		</div>
				  		<div>
				  			<img :src="data.img_url"/>
				  		</div>
				  		<div class="head_secondfont">
				  			<p>{{data.picture_author}}</p>
				  			<p>{{data.content}}</p>
				  			<p>{{data.text_authors}}</p>
				  		</div> 
				  		</a>
				  	</div>
				  </div>  
        </div>
         <!--结束-->
          <!--分页2-->
        <div class="swiper-slide">        
			  <div class="head_ul">
			  	<div v-for='(prod,index) in dateData' v-if='index>=11&&index<21'  style="border-bottom:3px #eee solid;">
			  		<a href="#/filminit" class="film_init">
			  		
			  		<div class="head_firstdiv">
			  			<p>{{prod.date}}</p>
			  			<p>{{prod.title}}</p>
			  		</div>
			  		<div>
			  			<img :src="prod.img_url"/>
			  		</div>
			  		<div class="head_secondfont">
			  			<p>{{prod.picture_author}}</p>
			  			<p>{{prod.content}}</p>
			  			<p>{{prod.text_authors}}</p>
			  		</div> 
			  		</a>
			  	</div>
			  </div>
        </div>        
   <!--结束-->
   <!--分页3-->
        <div class="swiper-slide">
				  <div class="head_ul">
				  	<div v-for='(prods,index) in dateData' v-if='index>20'  style="border-bottom:3px #eee solid;">
				  		<a href="#/filminit" class="film_init">				  		
				  		<div class="head_firstdiv">
				  			<p>{{prods.date}}</p>
				  			<p>{{prods.title}}</p>
				  		</div>
				  		<div>
				  			<img :src="prods.img_url"/>
				  		</div>
				  		<div class="head_secondfont">
				  			<p>{{prods.picture_author}}</p>
				  			<p>{{prods.content}}</p>
				  			<p>{{prods.text_authors}}</p>
				  		</div> 
				  		</a>
				  	</div>
				  </div>
        </div>        				   
   <!--结束-->
      </div>
</div>
</template>

<script>
 import Swiper from '../../static/swiper-3.4.0.min.js';
 require('../../static/swiper-3.4.0.min.css');
export default {
  data () {
    return {
      dateData: '',
      }
        },
        created() {
        	this.$http.get('/api/tuwendata').then((response) => {
        		response = response.body
        		if(response.errno === 0) {
        			this.dateData = response.data
        			console.log(response)
        		}
        	})
        },
         mounted () {
     console.log('挂载好了')
     var mySwiper = new Swiper('.swiper-container', {
       direction: 'horizontal',
       loop: true,
       pagination: '.swiper-pagination',
       nextButton: '.swiper-button-next',
       prevButton: '.swiper-button-prev'
     })
     console.log(mySwiper)
   }	
    }
</script>
<style scoped lang="scss">
  @import '../common/scss/headcommon.scss';
 	.head_ul{
 		width: 100%; 
 		padding-left: 0;
 		
 			img{
 				width: 100%;
 			}
 	}
 	.head_firstdiv{
 			text-align: center;	
 			p:nth-child(1){
 				font-size:0.6rem;
 				color: #000;
 			}
 			p:nth-child(2){
 				font-size:0.3rem;
 				color: #666;
 			}
 			p{
 				line-height: 0.1rem;
 			}
 	}
 	.head_secondfont{
 		p:nth-child(1){
 				font-size:0.35rem;
 				text-align: center;
 				color: #000;
 			}
 		p:nth-child(2){
 				font-size:0.35rem;
 				color: #555;
 				text-indent: 0.3rem;
 			}
 			p:nth-child(3){
 				font-size:0.4rem;
 				text-align: center;
 				color: #777;
 			}
 	}
</style>
