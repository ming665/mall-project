<template>
	<div class="menu-bar-container">
		<div class="scroll-outer-wrapper">
			<div class="scroll-inner-wrapper">
				<ul class="menu-bar">
					<li v-for="(item, index) in list" :class="{'active': index === activeIndex}" @click="()=>{setActive(index)}" class="menu-item word-ellipsis-1">{{item}}</li>
				</ul>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		list: {
			type: Array,
			default: ()=>[]
		},
		activeIndex: {
			type: Number,
			default: 0
		}
	},
	mounted() {
		console.log(this.activeIndex)
	},
	methods: {
		setActive(index) {
			if(this.activeIndex === index ) return false
			this.$emit("click", index)
		}
	}
}
</script>
<style lang=scss>
.menu-bar-container{
	position: fixed;
	top: 44px;
	left: 0;
	bottom: 60px;
	* {
		box-sizing: initial;
	}
	.scroll-outer-wrapper{
		
		width: 92px;
		background-color: #f2f4f5;
	    text-align: center;
	    height: 100%;
	    overflow-x: hidden;
	    .scroll-inner-wrapper {
	    	overflow-y: auto;
	    	overflow-x: hidden;
		    -webkit-overflow-scrolling: touch;
		    width: 92px;
		    height: 100%;
		    /*往右加宽，以致滚动跳被父层overflow-x:hidden裁剪达到改变pc滚动条的样式*/
		    padding-right: 8px;
	    	.menu-bar {
	    		width: 92px;
	    		.menu-item{
	    			line-height: 49px;
	    			&.active {
	    				background-color: #fff;
	    			}
	    		}
	    	}
	    }
	}
}
</style>