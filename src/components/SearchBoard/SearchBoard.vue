<template>
	<div v-show="visible" class="search-board" >
		<div class="header">
			<div class="search-header-container">
                    <div class="search">
                        <form>
                            <i class="anticon icon-category"></i>
                            <input type="search" class="search-input" placeholder="123456789" ref="searchInput" v-model="keyword"  />
                            <i v-if="''!== keyword" class="anticon icon-shopping-cart" @click="clearKeyword"></i>
                        </form>
                    </div>
                    <span class="cancel-btn" @click="()=>{back(1)}">取消</span>
                </div>
			</div>
			<div class="search-info-container">
				
			</div>
		</div>
	</div>
</template>
<script>
export default {
	props: {
		visible: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			keyword: ""
		}
	},
	methods: {
		back() {
			this.$nextTick(() =>{
                this.$emit("update:visible", false)
            })
		}, 
		clearKeyword() {
			this.keyword = "";
			this.$nextTick(()=> {
				this.$refs.searchInput.focus()
			})
		}
	}
}
</script>
<style scoped lang=scss>
.header {
	>.search-header-container{
		padding: 0 40px 0 0px;
	}
	.search {
		.icon-shopping-cart{
			font-size: 14px;
	        color: #c7c7c7;
	        position: absolute;
	        top: 1.5px;
	        right: 10px;
	        padding: 6px;
		}
	}
}

</style>
