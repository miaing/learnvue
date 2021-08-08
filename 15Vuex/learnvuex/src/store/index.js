import Vue from 'vue'
import Vuex from 'vuex'

//安装插件
Vue.use(Vuex)

//创建一个新的状态管理
const store = new Vuex.Store({
    state:{
        counter:1000,
        student:[
            {id:1,name:'luo',age:20},
            {id:2,name:'yu',age:30},
            {id:3,name:'ying',age:10},
            {id:4,name:'liu',age:80}
        ],
        info:{
            id:6,
            name:'kobe',
            age:40
        }
    },
    mutations:{
        increment(state){
            state.counter++
        },
        decrement(state){
            state.counter--
        },
        incrementcounter(state,counter){
            state.counter +=counter
           },
        incrementstu(state,stu){
            state.student.push(stu)
        },
        updateinfo(state){
            //state.info.name = 'coderwhy'
            //state.info['address'] = '洛杉矶'
            Vue.delete(state.info,'age')
        }
    },
    getters:{
        Powercounter(state){
            return state.counter * state.counter
        },
        more30student(state){
            return state.student.filter(s => s.age >=30)
        },
        
      
    }


})

//导出store独享
export default store