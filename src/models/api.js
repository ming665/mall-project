import {get, post} from '@/utils/http';

export default {
  /**
   * 获取用户信息
   * @param options
   * @returns {*}
   */
  getFeed: function(options = {}) {
    return get('api/home/index', options);
  },
  getList: function(options = {}) {
    return get('api/home/category/list', options);
  },
  getGoods: function(options = {}) {
    return get('api/search/category', options);
  },
}
