<template>
	<div class="loading-container">
		<div>
			<div class="loading-img"></div>
			<div class="loading-text">正在玩命加载中</div>
		</div>
		
	</div>
</template>
<style lang="scss">
.loading-container {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    z-index: 10000;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: #f4f4f4;
    > div {
    	padding-bottom:  60px
    }
    .loading-img {
    	background-image: url(../../resoures/images/refresh.gif);
    	background-repeat: no-repeat;
    	width: 180px;
    	height: 60px;
    	background-size: 100%;
    	margin-bottom:  10px;
    }
    .loading-text {
    	font-size: 12px;
    	line-height: 14px;
    	text-align: center;
    	color: #555;
    }
}
</style>