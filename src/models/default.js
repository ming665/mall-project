import axios from 'mihoyo-event-model';

export default {
  /**
   * 获取用户信息
   * @param options
   * @returns {*}
   */
  getHome: function(options = {}) {
    return axios.get('/index', options);
  },

  
}
