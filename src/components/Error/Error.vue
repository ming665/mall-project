<template>
	<div class="error-container">
		<div class="error-img"></div>
		<div class="error-info">{{text}}</div>
		<div class="error-button" @click="refresh">
			<span>点击重试</span>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		text: {
			type: String,
			default: "服务器崩溃了，请重试"
		},
		isRefreshShow: {
			type: Boolean,
			default: true
		}
	},
	methods: {
		refresh() {
			this.$emit("refresh")
		}
	}

}
</script>
<style lang=scss>
.error-container {
	z-index: 50;
	position: fixed;
	width: 100%;
	height: 100%;
	top: 0;
	bottom: 0;
	left: 0;
	right: 0;
	background-color: #f4f4f4;
	.error-img {
		margin: 200px auto 40px;
		width: 280px;
		height: 100px;
		background-image: url(../../resoures/images/loadFailed.png);
		background-repeat: no-repeat;
		background-size: 100%;
	}
	.error-info {
		text-align: center;
		font-size: 14px;
		line-height: 14px;
		margin-bottom: 40px;
		color: #555
	}
	.error-button {
		margin: 0 auto;
		width: 140px;
		height: 45px;
		border: 1px #c7c7c7 solid;
		border-radius: 4px;
		color: #999;
		font-size: 14px;
		line-height: 45px;
		text-align: center;
	}
}
</style>