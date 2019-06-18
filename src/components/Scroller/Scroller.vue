<template>
	
	<div class="scroll-wrapper">
		<div class="scroll-container" ref="scrollparent">
			<div class="scroll-content" ref="scroll" @touchstart="touchStart" @touchmove="touchMove" @touchend="touchEnd">
				<div class="pull-to-refresh-layer" ref="refresh">
					<div class="before-pull-down-img">
						<!-- <img :src="require('../../resoures/images/loading-img.svg')"/> -->
					</div>
					<div class="before-pull-down-info">
						<i class="anticon icon-category"></i>{{refreshInfo}}
					</div>
				</div>
				<slot></slot>
			</div>
		</div>
	</div>
</template>
<script>
export default {
	data() {
		return {
			showToTop: false,
			isBottom: false,
			showImg: true,
			prevEnd: true,
			refreshInfo: "default",
			refreshInfoList: ["default", "down", "fin"],
			startTranslateY: -6,
			refreshDown: true, 
			basicData: {
				start: {},
				end: {},
				//begin: {},
				tracking: false,
				prev: 0
			},

		}
	},
	mounted() {
		 this.$refs.scroll.style.marginTop = this.startTranslateY + "px";
		 this.offsetTop = this.$refs.scrollparent.offsetTop;
		 window.addEventListener("scroll", this.onScroll)
	},
	methods: {
		onScroll() {
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			if(scrollTop > 4 * window.innerHeight) {
				this.showToTop = true;
			} else {
				this.showToTop = false
			}
			// 手机上scrollTop数值可能使两个不相等 
			if(Math.ceil(scrollTop) + window.innerHeight >= document.body.clientHeight ) {
				this.isBottom = true;
				this.prevEnd = false;
				this.$emit("scroll-bottom")
			} else {
				this.isBottom = false;
			}
		},
		getMarginTop(e) {
			const marginTop = e.style.marginTop;
			return parseFloat(marginTop) || 0

		},
		touchMove(e) {
			this.type = e.type
			const marginTop = parseFloat(this.getMarginTop(this.$refs.scroll))
			if("touchmove" === e.type){
				this.basicData.end.x = e.targetTouches[0].clientX;
				this.basicData.end.y = e.targetTouches[0].clientY;
			} else {
				this.basicData.end.x = e.clientX;
				this.basicData.end.y = e.clientY;
			}
			if(!this.basicData.prev) this.basicData.prev = this.basicData.start.y;
			const touchDistance = this.basicData.end.y - this.basicData.prev;
			this.basicData.prev = this.basicData.end.y;
			if(this.basicData.tracking && this.$refs.scrollparent.scrollTop <= 0) {
				if(this.basicData.end.y - this.basicData.start.y - this.basicData.start.scrollTop > 0) {
					event.preventDefault()
					// 已经满足刷新条件后不往下执行
					if(this.refreshInfo === this.refreshInfoList[2]) return
					// -webkit-overflow-scrolling 属性控制元素在移动设备上是否使用滚动回弹效果.
					// auto
					// 使用普通滚动, 当手指从触摸屏上移开，滚动会立即停止。
					// touch
					// 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。
					this.$refs.scrollparent.style.webkitOverflowScrolling = "auto";
					const moveDistance = touchDistance * 0.4 + marginTop;
					this.$refs.scroll.style.transition = "";
					this.$refs.scroll.style.marginTop = moveDistance + "px";
					if(moveDistance > 86) {
						this.refreshInfo = this.refreshInfoList[1];
						this.refreshDown = false;
					} else{
						this.refreshInfo !== this.refreshInfoList[0] && (this.refreshInfo = this.refreshInfoList[0], this.refreshDown = true)
					}

				}
			}
		},
		touchStart(e) {
			this.type = e.type
			var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
			// 判断是移动端还是端，移动端使用e.targetTouches[0].clientX,e.targetTouches[0].clientY,pc端获取为e.clientX, e.clientY
			if("touchstart" === e.type){
				// 多指触控时
				if(e.touches.length > 1) return void(this.basicData.tracking = false )
				if(0 === scrollTop){
					this.basicData.tracking = true;
					this.basicData.start.x = e.targetTouches[0].clientX;
					this.basicData.start.y = e.targetTouches[0].clientY;
					this.basicData.start.scrollTop = this.$refs.scrollparent.scrollTop;
					this.basicData.prev = e.targetTouches[0].clientY;
					this.basicData.end.x = e.targetTouches[0].clientX;
					this.basicData.end.y = e.targetTouches[0].clientY;
				} else {
					this.basicData.tracking = false
				}

			} else {
				if(0 === scrollTop) {
					this.basicData.tracking = true;
					this.basicData.start.x = e.clientX;
					this.basicData.start.y = e.clientY;
					this.basicData.start.scrollTop = this.$refs.scrollparent.scrollTop;
					this.basicData.prev = e.clientY;
					this.basicData.end.x = e.clientX;
					this.basicData.end.y = e.clientY;
				} else {
					this.basicData.tracking = false
				}
			}
		},
		touchEnd() {
			const marginTop = parseFloat(this.getMarginTop(this.$refs.scroll))
			// touch
			// 使用具有回弹效果的滚动, 当手指从触摸屏上移开，内容会继续保持一段时间的滚动效果。继续滚动的速度和持续的时间和滚动手势的强烈程度成正比。
			this.$refs.scrollparent.style.webkitOverflowScrolling = "touch";

			if(this.basicData.tracking && parseFloat(this.startTranslateY) <= marginTop && 0 == this.$el.scrollTop){
				
				this.refreshInfo = this.refreshInfoList[2];
				if(!this.refreshDown && this.showImg ) {

					this.showImg = false;
					this.$emit("refresh")
				} else {
					this.refreshDown && this.showImg && this.refreshEnd();
					this.basicData.tracking = false;
				} 
			} else {
				this.refreshEnd()
			}
		}, 
		refreshEnd() {
			//重置状态
			this.refreshInfo = this.refreshInfoList[0];
			this.showImg = !0; 
			this.$refs.scroll.style.marginTop = this.startTranslateY + "px";
			this.$refs.scroll.style.transition = "margin-top 0.5s";
			this.refreshDown = !0
		}
	}

}
</script>
<style lang="scss">
.scroll-wrapper{
	position: relative;
	height: 100%;
	width: 100%;
	overflow: hidden;
	.scroll-container{
		height: 100%;
	    width: 100%;
	    -webkit-overflow-scrolling: touch;
	}

}
.pull-to-refresh-layer{
	width: 100%;
    height: 50px;
    color: #999;
    font-size: 12px;
    line-height: 32px;
    text-align: center;
    .before-pull-down-info {
	    text-align: center;
	    line-height: 16px;
	    color: #999;
	    font-size: 14px;
    }
}
</style>