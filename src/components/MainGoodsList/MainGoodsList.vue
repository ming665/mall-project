<template>
	<div class="goods-container add-padding-top-44">
        <goods-list :list="list"></goods-list>
        <infinite-loading ref=infiniteLoading @infinite="loadList"></infinite-loading>
    </div>
    
</template>
<script>
import InfiniteLoading from 'vue-infinite-loading';
import goodsList from '../../components/GoodsList/GoodsList';
import api from '../../models/api'
import vm from '../../globalVM'
export default {
	data() {
		return {
			isError: false,
			page:1,
			pageSize: 10,
			list: [],
			isMount: true, // loading
			shouldShowEnd: true, //首次加载时只有两个数据时设为false,不显示end isEnd && shouldShowEnd

		}
	},
	components: {
		goodsList,
		InfiniteLoading
	},
	methods: {
		loadList(node) {
			this.getListByCategory(node)
		},
		ErrorHander() {},
		getListByCategory(node) {
			setTimeout(()=>{api.getGoods().then(({status, msg, data})=> {
				vm.isLoading = false;
				this.isError = false;
				this.page++;
				this.isMount && (this.isMount = false);
				// 当数据为空
				if(!data || !data.list || !data.list.length) {
					// 判断是否第一次加载是数据为空, 则加载推荐列表
					// this.isFirst && ()
					this.ErrorHander();
					this.isEnd = true;
					return void node.complete()
				}
				this.shouldShowEnd = true;
				if(1 === this.page) {
					data.list && 2 >= data.list.lenght && (this.shouldShowEnd = false)
				}
				this.isFirst = false;
				this.list = [...this.list, ...data.list]
				node.loaded();



			})}, 1000)
		}
	}
}
</script>
