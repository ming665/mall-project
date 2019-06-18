<template>
	<div class="img-container" ref="imgContainer">
		<!-- 当图片希望居中显示 -->
		<template v-if="isAllCenter || isVerticalCenter || isContain">
			<div class="center-img-container">
				<img v-show="false" :src="url" alt="" class="center-img" @load="onImgLoad" @error="onImgError">
				<div v-if="isError" class="failed-img-container" :style='`background:${failedBackgroundColor} url(${failedImgUrl}) no-repeat center center;`' ></div>
				<div v-if="isLoaded" class="success-img-container" :style='`background: ${successfulBackgroundColor} url(${url}) no-repeat center center;background-size: ${isVerticalCenter ? "cover" : isContain ? "contain" : ""}`' ></div>
			</div>
		</template>
		<template v-else>
			<div class="normal-img-container" ref="normalImg" :style='
				[{
					background: isError 
					? `${failedBackgroundColor} url(${failedImgUrl}) no-repeat center center` 
					: isLoaded 
						? successfulBackgroundColor
						:`${loadingBackgroundColor} url(${loadingImgUrl}) no-repeat center center` ,
					backgroundSize:"100%"

				}]
			'>
				<template v-if="isLazyLoad">
					<img v-show="isLoaded && !isError"  class="img" ref="img" @load="onImgLoad" @error="onImgError">
				</template>
				<template v-else>
					<img v-show="isLoaded && !isError" class="img" :src="url" @load="onImgLoad" @error="onImgError">
				</template>
				
			</div>
		</template>
	</div>
</template>
<script>
export default {
	props: {
		failedBackgroundColor: {
            type: String,
            default: "#EEE"
        },
        successfulBackgroundColor: {
            type: String,
            default: "#FFF"
        },
        loadingBackgroundColor: {
            type: String,
            default: "#EEE"
        },
		url: {
			default: "",
			type: String
		},
		isLazyLoad: {
			default: false,
			type: Boolean,
		},
		isAllCenter: {
			default: false,
			type: Boolean
		},
		isVerticalCenter: {
			default: false,
			type: Boolean
		},
		isContain: {
			default: false,
			type: Boolean
		},
	},
	data() {
		return {
				isLoaded: false,
                isError: false,
                failedImgUrl: require('../../resoures/images/failed-img.svg'),
                loadingImgUrl: require('../../resoures/images/loading-img.png'),
                isShow: !1,
                imgOffsetTop: 0
		}
	},
	mounted(){
		//this.init()
		if(this.isLazyLoad) {
			 window.addEventListener("scroll", this.onScroll);
			 const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;

			 this.imgOffsetTop = this.$refs.imgContainer.getBoundingClientRect().top + scrollTop;
			 if(!this.isShow && window.innerHeight + scrollTop > this.imgOffsetTop) {
			 	this.isShow = true;
			 	setTimeout(()=> {this.$refs.img && (this.$refs.img.src = this.url)}, 100)
			 }
		}
	},
	methods: {
		init() {
			const nodeW = parseInt(getComputedStyle(this.$refs.imgContainer, null).height) + 'px'
            const pNodeW = parseInt(getComputedStyle(this.$refs.imgContainer.parentNode, null).height) + 'px'
            // 根据计算父节点调整大小
            this.isVerticalCenter || this.isAllCenter || this.isContain ? this.$refs.centerImg.style.height = "0px" === pNodeW ? "" : pNodeW : this.$refs.normalImg.style.height = "0px" === nodeW ? "" : nodeW
		},
		onImgLoad() {
			this.isLoaded = true;
		},
		onScroll() {
			const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(!this.isShow && window.innerHeight + scrollTop > this.imgOffsetTop) {
			 	this.isShow = true;
			 	setTimeout(()=> {this.$refs.img && (this.$refs.img.src = this.url)}, 100)
			 }
		},
		onImgError() {
			// 为懒加载且显示时
			// 和非懒加载时
			((this.isLazyLoad && this.isShow && this.url) || (!this.isLazyLoad && this.url )) && (this.isError = true)


		}
	}	
}
</script>
<style lang="scss">
.img-container {
	overflow: hidden;
	.center-img-container {
		position: absolute;
	    top: 0;
	    left: 0;
	    overflow: hidden;
	    width: 100%;
	    height: 100%;
	    background: #eee url(../../resoures/images/loading-img.svg) no-repeat 50%;
    	background-size: 40px;
	    .success-img-container {
	    	width: 100%;
	    	height: 100%;
	    }
	    .failed-img-container {
	    	width: 100%;
	    	height: 100%;
	    }
	}
	.normal-img-container{
		overflow: hidden;
		width: 100%;
		height: 100%;
		background-size: 40px;
		.img {
			width: 100%;
			height: 100%;
			display: block;
		}
	}
}
</style>