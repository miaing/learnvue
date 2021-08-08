import Vue from 'vue'
import App from './App'
import axios from 'axios'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  render: h => h(App)
})


//这是axios最基本的使用方式
/*axios({
  url:'http://123.207.32.32:8000/home/multidata',
  methods: 'get'
}).then(res => {
  console.log(res)
})*/


//axios发送并请求

/*creact() {
  axios.all([axios.get('http://123.207.32.32:8000/home/multidata'),
  axios.get('http://httpbin.org/'
  )]).then(axios.spread((res1.res2) => {
console.log(res1);
console.log(res2);
//console.log(result[1]);

}))*/