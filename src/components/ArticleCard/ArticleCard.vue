<template>
	<div class="article-container" >
		<div class="article-head">
			<i class="anticon icon-order"></i>
			<span class="article-head-title">article1</span>
		</div>
		<div class="article-content">
			<image-load :isLazyLoad="true"  url="//gw.alicdn.com/tfs/TB1PjjNa21H3KVjSZFBXXbSMXXa-750-386.png_790x10000.jpg_.webp" class="cover-container" :isVerticalCenter="true"></image-load>
			
			<p class="title word-ellipsis-2">vue.js</p>
			<p class="info word-ellipsis-2">Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
		</div>
	</div>
</template>
<script>
import imageLoad from '../../components/ImageLoad/ImageLoad'
export default {
	data() {
		return {}
	},
	components: {
		imageLoad
	},
	methods: {
		go() {

		}
	}
}
</script>
<style lang="scss">
.article-container {
	position: relative;
	width: 100%;
	padding: 0 10px;
	background-color: #FFF;
	margin-bottom: 12px;
	.article-head{
		font-size: 18px;
		height: 32px;
		.icon-order{
			font-size: 14px;
		}
		.article-head-title{
			font-size: 12px;
			color: #757575;
			line-height: 32px;
			padding-left: 2px;
		}
	}
	.article-content {
		padding: 0 0 15px;
		.cover-container {
			height: 150px;
			position: relative;
			width: 100%;
			margin-bottom: 10px;
		}
		.title{
			font-size: 16px;
			line-height: 24px;
			margin-bottom: 8px;
		}
		.info {
			font-size: 12px;
			color: #999;
			line-height: 17px;
			margin-bottom: 5px
		}
	}
}
</style>