//使用conmonjs的模块化规范
const{add,mul} = require('../src/js/mathUtils');
console.log(add(20,30));
console.log(add(40,50));

//使用ES6的模块化的规范
import { name,age, heigth } from '../src/js/info';
console.log("name");
console.log("age");
console.log("heigth")

//依赖css文件
//require("../src/css/normal.css")

//依赖less文件
//require("../src/css/special.less")
//document.writeln('<h1>你好啊</h1>')

//4.使用vue进行开发
import Vue from 'vue'
//import App from './vue/app.js'
import App from './vue/App.vue'

new Vue({
    el:'#app',
    template: `<App/>`,
    components:{
        App
    }
})
