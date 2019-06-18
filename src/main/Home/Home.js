import Vue from 'vue'
import navBar from '../../components/NavBar/NavBar'
import imageLoad from '../../components/ImageLoad/ImageLoad'
import articleCard from '../../components/ArticleCard/ArticleCard'
import scroller from '../../components/Scroller/Scroller'
import error from '../../components/Error/Error'
import loading from '../../components/Loading/Loading'
import flexible from '../../utils/simple-flexible'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
//import "../../css/main.scss"
import  '../../resoures/css/main.scss'
import  '../../resoures/css/common.scss'
import  '../../resoures/font/iconfont.css'
import api from '../../models/api'
//import fastclick from 'fastclick';
import 'babel-polyfill';
//import 'lodash'
import 'swiper/dist/css/swiper.css'
flexible()

// 根据当前环境选择性加载 mock 包，发布的时候也不用注释和删除
// if(process.env.NODE_ENV === 'development') {
  require('./mock');
// }

// FOR H5 处理移动端click 延时 300ms的问题
//fastclick.attach(document.body);


/* eslint-disable no-new */
new Vue({
  el: '#app',
  data() {
  	return {
  		banner: {
  			imageUrls: [],
  			jumpUrls:[]
  		},
  		tabs: [],
  		isLoading: true,
  		feedList:[],
  		page: 1,
  		pageSize: 10,
  		isError: false,
  		isLoadError: false,
  		isFinish: false,
  		isEnd: false,
  		isRefresh:false,
        swiperOption: {
            notNextTick: !0,
            autoplay: {
	            delay: 5e3,
	            disableOnInteraction: false,
	          },
            pagination: {
	            el: '.swiper-pagination',
	            clickable: true
	          },
            slidesPerView: "auto",
            centeredSlides: !0,
            paginationClickable: !0,
            spaceBetween: 0
        },
        swiperSlides: [1, 2, 3, 4, 5]
  	}
  },
  components: { navBar, imageLoad, articleCard, scroller, error, loading, swiper, swiperSlide },
  mounted() {
  	this.getFeedList()
  },
  methods: {
  	gotoBanner(url) {
      return void 0
  		// window.location.href = url
  	},
  	goCategory(index) {
  		window.location.href = this.tabs[index].jumpUrl
  	},
  	getFeedList(callback = ()=> {}) {
  		const params = {
  			page: this.page++,
  			pageSize: this.pageSize,
  		}
  		api.getFeed(params).then(({status, vo, msg})=> {
  			if(1 === status ) {
  				this.isLoading = false;
  				this.isError = false;
  				this.isLoadError = false;
  				if(1 === params.page) {
  					this.banner = vo.banner;
  					this.tabs = vo.tabs
  				}
  				if(this.isRefresh) {
  					this.feedList = [];
  					this.isRefresh = false;
  				}
  				
  				this.feedList = [...this.feedList, ...vo.feeds.list];
          // 判断是否还有数据
  				0 !== vo.feeds.total ? this.isFinish = false : this.isEnd = true;

  			} else {
  				console.log(params)
  				this.isLoading = false;
  				if(1 === params.page) {
  					this.isError = true
  				} else {
  					this.isLoadError = true
  				}
  			}
  			callback();
  		}).catch(()=> {

  			this.isLoading = false;
			if(1 === params.page) {
				this.isError = true
			} else {
				this.isLoadError = true
			}
			callback();
  		})
  	},
  	refreshBottom() {
		this.isFinish = true;
  		if(this.isError || this.isLoadError) return false
  		this.getFeedList()
  	},
  	refresh(callback = ()=> {}) {
  		this.page = 1;
  		this.isEnd = false;
  		this.isFinish = false;
  		this.isRefresh = true;
  		this.getFeedList(callback)
  	},
  	errorRefresh() {
		this.isLoading = true;
		this.refresh();
  	},
  	refreshDown() {
  		this.refresh(()=> {
  			this.$refs.scroll.refreshEnd()
  		})
  	},
  	reload() {
  		this.isFinish = true;
  		this.isLoadError = false;
  		this.isEnd = false
  		this.getFeedList()
  	}
  }
})