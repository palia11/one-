<template>
	<div>
  <div class="header_head">
  		<div>
  			<a href="#/mine">
  			<span class="glyphicon glyphicon-user"></span>
  		    </a>
  		</div>
  		<div><span>一
  			个音乐</span></div>
  		<div>
  			<a href="#/search">
  			<span class="glyphicon glyphicon-search"></span>
  			</a>
  		</div>
  </div>
  <div class="konghead"></div>
  <!--获取音乐数据-->
  
  <div class="music_ul">
  	<div v-for='musicdata in musicData' style="border-bottom:3px #eee solid;">
  		<a href="#/filminit" class="film_init">
  		<div class="music_firstdiv">
  			<p>-  音乐   -</p>
  			<p>{{musicdata.title}}</p>
  			<p>文  / {{musicdata.author.user_name}}</p>
  		</div>
  		<div class="music_img">
  			<span class="glyphicon glyphicon-play play"></span>
  			<img :src="musicdata.img_url"/>
  		</div>
  		<div class="music_secondfont">
  			<p>{{musicdata.music_name}}.{{musicdata.audio_author}}|{{musicdata.audio_album}}</p>
  			<p>{{musicdata.forward}}</p>
  			<p>{{musicdata.date}}</p>
  		</div>  
  		</a>
  	</div>
  </div>
 
</div>
</template>

<script>
export default {
	data () {
    return {
      musicData: ''
      }
        },
        created() {
        	this.$http.get('/api/yinyuedata').then((response) => {
        		response = response.body
        		if(response.errno === 0) {
        			this.musicData = response.data
//      			console.log(this.musicData)
        		}
        	})
        }
        
}
</script>
<style scoped lang="scss">
 @import '../common/scss/headcommon.scss';
 .music_ul{
 		width: 100%; 
 		padding-left: 0;
 		a{
 			color:#000;
 		}
 			img{
 				width: 100%;height: 100%;
 			}
 	}
 	.music_firstdiv{ 			
 			
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
 	.music_secondfont{
 		p:nth-child(1){
 				font-size:0.35rem;
 				text-align: center;
 				color: #777;
 			}
 		p:nth-child(2){
 				font-size:0.35rem;
 				color: #555;
 				text-align: center;
 			} 	
 			p:nth-child(3){
 				font-size:0.35rem;
 				color: #555;
 				text-align: center;
 			} 			
 	}
 	.music_img{
 		border: 0.01rem solid #fff;
 		margin-left: 0.8rem;
 		height: 8rem;
 		width: 8rem;
 		position: relative;
 		border-radius: 4rem 4rem 4rem 4rem;
 		overflow: hidden;
 		
 	}
 	.play{
 		color: #fff;
 		z-index: 100;
 		position: absolute;
 		opacity: 0.8;
 		border: 1px solid #fff;
 		border-radius: 100%;
 		font-size: 0.8rem;padding: 0.1rem;
 		top:4rem;left: 3.5rem;
 		
 	}
</style>
