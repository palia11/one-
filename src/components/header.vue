<template>
	<div>
  <div class="header_head">
  		<div><span class="glyphicon glyphicon-user"></span></div>
  		<div><span>一
  			个</span></div>
  		<div><span class="glyphicon glyphicon-search"></span></div>
  </div>
  <div class="konghead"></div>
  <!--获取图文数据-->
  <div class="head_ul">
  	<div v-for='data in dateData' style="border-bottom:3px #eee solid;">
  		<div class="head_firstdiv">
  			<p>{{data.date}}</p>
  			<p>{{data.title}}</p>
  		</div>
  		<div><img :src="data.img_url"/></div>
  		<div class="head_secondfont">
  			<p>{{data.picture_author}}</p>
  			<p>{{data.content}}</p>
  			<p>{{data.text_authors}}</p>
  		</div>  		
  	</div>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      dateData: ''
      }
        },
        created() {
        	this.$http.get('/api/tuwendata').then((response) => {
        		response = response.body
        		if(response.errno === 0) {
        			this.dateData = response.data
//      			console.log(this.dateData)
        		}
        	})
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
