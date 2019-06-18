import Vue from 'vue'
import vm from '../../globalVM'
import error from '../../components/Error/Error'
import loading from '../../components/Loading/Loading'
import flexible from '../../utils/simple-flexible'
import navBar from '../../components/NavBar/NavBar'
import imageLoad from '../../components/ImageLoad/ImageLoad'
import searchBoard from '../../components/SearchBoard/SearchBoard'
import mainGoodsList from '../../components/MainGoodsList/MainGoodsList'
import  '../../resoures/css/main.scss'
import  '../../resoures/css/common.scss'
import  '../../resoures/font/iconfont.css'
import './List.scss'
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
  	imageLoad,
  	error,
  	loading,
    mainGoodsList
  },
  data() {
  	return {
      searchBoardVisible: false,
  		isError: false,
  	}
  },
  computed: {
    isLoading() {
      return vm.isLoading
    }
  },
  mounted() {

  },
  methods: {
  	
  }
})