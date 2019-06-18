<template>
	<div class="goods-list clearfix">
        <div class="goods-wrapper"  v-for="i in list">
            <div class="goods-item">
                <div class="top-container">
                    <image-load :isLazyLoad="true" url="//img.alicdn.com/bao/uploaded/i1/93031106/TB24frzXDlcwKJjSZFqXXc2kFXa_!!93031106.jpg_200x200q90.jpg_.webp" class="top-img-container"></image-load>
                </div>
                <div class="info-container">
                    <div class="desc">
                        <div class="desc-type">
                            <p class="word-ellipsis-2">Vue (读音 /vjuː/，类似于 view) 是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue 被设计为可以自底向上逐层应用。Vue 的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue 也完全能够为复杂的单页应用提供驱动。</p>
                        </div>
                        
                    </div>
                    <div class="bottom">
                        <div class="price">$99</div>
                    </div>

                </div>
            </div>
        </div>
        
        
    </div>
</template>
<script>
import imageLoad from '../../components/ImageLoad/ImageLoad';
export default {
	props: {
		list: {
			default: ()=>[],
			type: Array,
		}
	},
	data() {
		return {
		}
	},
	components: {
		imageLoad,
	},
	methods: {
		loadList() {
			
		}
	}
}

</script>
<style lang=scss>
.goods-list{
    display: flex;
    flex-wrap: wrap;
	width: 360px;
	margin: 0 auto;
	.goods-wrapper {
		margin-top: 10px;
		.goods-item {
			margin: 6px;
		    width: 168px;
		    position: relative;
		    background-color: #FFF;
		    .top-container {
				.top-img-container {
					width: 168px;
					height: 168px;
				}
		    }
		    .info-container {
		    	height: 75px;
		    	position: relative;
		    	overflow: hidden;
		    	.desc {
		    		padding: 8px;
		    		font-size: 14px;
		    		line-height: 16px;
		    		.desc-type {
		    			max-height: 32px;
		    			overflow: hidden;
		    			vertical-align: top;
						word-break: break-all;
		    		}
		    		
		    	}
		    	.bottom {
		    		padding: 0 8px 8px;
		    		display: flex;
		    		.price {
		    			display: inline-block;
		    			color: #2d2f33
		    		}
		    	}

		    }
		}
	}
	
}
</style>