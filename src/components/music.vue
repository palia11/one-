<template>
	<div>
  <div class="header_head">
  		<div><span class="glyphicon glyphicon-user"></span></div>
  		<div><span>一
  			个音乐</span></div>
  		<div><span class="glyphicon glyphicon-search"></span></div>
  </div>
  <div class="konghead"></div>
  <!--获取音乐数据-->
  <div class="music_ul">
  	<div v-for='musicdata in musicData' style="border-bottom:3px #eee solid;">
  		<div class="music_firstdiv">
  			<p>-  音乐   -</p>
  			<p>{{musicdata.title}}</p>
  			<p>文  / {{musicdata.author.user_name}}</p>
  		</div>
  		<div><img :src="musicdata.img_url"/></div>
  		<div class="music_secondfont">
  			<p>{{musicdata.music_name}}.{{musicdata.audio_author}}|{{musicdata.audio_album}}</p>
  			<p>{{musicdata.forward}}</p>
  			<p>{{musicdata.date}}</p>
  		</div>  		
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
 		
 			img{
 				width: 100%;
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
</style>
