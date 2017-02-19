<template>
	<div>
  <div class="header_head">
  		<div><span class="glyphicon glyphicon-user"></span></div>
  		<div><span>一
  			个阅读</span></div>
  		<div><span class="glyphicon glyphicon-search"></span></div>
  </div>
  <div class="konghead"></div>
  <!--获取阅读数据-->
  <div class="read_ul">
  	<div v-for='readdata in readData' style="border-bottom:3px #eee solid;">
  		<div class="read_firstdiv">
  			<p>-  阅读   -</p>
  			<p>{{readdata.title}}</p>
  			<p>文  / {{readdata.author.user_name}}</p>
  		</div>
  		<div><img :src="readdata.img_url"/></div>
  		<div class="read_secondfont">
  			<p>{{readdata.forward}}</p>
  			<p>{{readdata.date}}</p>
  			<!--<p>{{readdata.date}}</p>-->
  		</div>  		
  	</div>
  </div>
</div>
</template>

<script>
export default {
	data () {
    return {
      readData: ''
      }
        },
        created() {
        	this.$http.get('/api/yuedudata').then((response) => {
        		response = response.body
        		if(response.errno === 0) {
        			this.readData = response.data
//      			console.log(this.readData)
        		}
        	})
        }
        
}
</script>
<style scoped lang="scss">
 @import '../common/scss/headcommon.scss';
 .read_ul{
 		width: 100%; 
 		padding-left: 0;
 		
 			img{
 				width: 100%;
 			}
 	}
 	.read_firstdiv{ 			
 			
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
 	.read_secondfont{
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
