import Vue from 'vue'
import error from '../../components/Error/Error'
import loading from '../../components/Loading/Loading'
import flexible from '../../utils/simple-flexible'
import navBar from '../../components/NavBar/NavBar'
import sideBar from '../../components/SideBar/SideBar'
import imageLoad from '../../components/ImageLoad/ImageLoad'
import searchBoard from '../../components/SearchBoard/SearchBoard'
import './Category.scss'
import  '../../resoures/css/main.scss'
import  '../../resoures/css/common.scss'
import  '../../resoures/font/iconfont.css'
import api from '../../models/api'
//import fastclick from 'fastclick';
import 'babel-polyfill';
//import 'lodash'
flexible()

// 根据当前环境选择性加载 mock 包，发布的时候也不用注释和删除
// if(process.env.NODE_ENV === 'development') {
  require('./mock');
// }
new Vue({
  el: '#app',
  components: {
  	navBar,
  	searchBoard,
  	sideBar,
  	imageLoad,
  	error,
  	loading
  },
  data() {
  	return {
  		isLoading: false,
  		isError: false,
  		searchBoardVisible: false,
  		list: [],
  		sideList: [],
  		activeIndex: 0,
  		cateMain: null,
  		content: null,
  		allHeight: 0,
  		mainOffsetHeight:0
  	}
  },
  mounted() {
  	this.getList();
  	document.addEventListener("focus",  ()=> {
        this.$refs.searchBoard.$refs.searchInput.focus()
    }, !0)
  	this.$refs.cateMain.style.height= window.innerHeight - 44 + 'px';

  },
  methods: {
  	initView() {
  		
  		this.list.map(e=> {
  			
			e.categoryLogicVOList && this.sideList.push(e.typeName);

			e.categoryLogicVOList = [{
				attr: null,
				id: null,
				url: null,
				mapType: null,
				img: null,
				categoryLogicVOS: [...e.categoryLogicVOList],
				name: e.typeName,
			}]
			return e
  		})
  		this.$nextTick(()=>{
  			this.cateMain = this.$refs.cateMain, this.content = this.$refs.content, this.allHeight = 0, this.content.forEach( (e, i) => {
                this.allHeight += e.offsetHeight, i > 0 && (this.allHeight += 20)
            }), this.mainOffsetHeight = this.cateMain.offsetHeight
  		})

  		
  	},
  	getList() {
  		api.getList().then(({status, vo, msg})=> {
  			this.list = vo;
  			this.isLoading = false;
  			this.isError = false;
  			this.initView()
  		})
  	},
  	onHeadTouchmove(e) {
		e.preventDefault()
  	},
  	onScroll() {
  		//if(this.activeClick) return this.activeClick = false, void(this.scrollTop = this.$refs.cate.scrollTop)
		//console.log(this.allHeight)
  	},
	onSideNavClick(index) {

		//this.activeClick = true;
		let scrollTop = 0 ;
		for(let i=0; i< index; i++){ 
			scrollTop += this.$refs.content[i].offsetHeight + 20;
		}
		console.log(scrollTop)
		console.log(index)
		//this.$refs.cate.scrollTop = scrollTop;
		this.activeIndex = index
	},

  	onSearchFocus() {
  		this.searchBoardVisible = true;
  		this.$nextTick(()=> {
  			this.$refs.searchBoard.$refs.searchInput.focus()
  		})
  	},
  	initImage: function (t) {
  		// 每3个元素为一行
  		// col, col, col, col, ...
  		// => 
  		// row 
  		// 	col, col, col
  		// row 
  		// 	col, ...
  		const row = [];
  		for(let i=0; i<t.length; i++){
  			if(0 === i % 3){
  				row.push([]);
  			} 
  			row[row.length -1].push(t[i])
  			
  		}
  		return row
    }
  }
})