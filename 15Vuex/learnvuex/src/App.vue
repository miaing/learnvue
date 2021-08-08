<template>
  <div id="app">
    <h2>{{$store.state.info}}</h2>
    <button @click="updateinfo">点击按钮添加资料 </button>
    <h2>{{$store.state.counter}}</h2>
    <button @click="addiction">+</button>
    <button @click="subtraction">-</button>
    <button @click="addcounter(5)">+5</button>
    <button @click="addcounter(10)">+10</button>
    <button @click="addStudent">添加学生</button>
    <h2>{{$store.getters.Powercounter}}</h2>
    <h2>{{$store.getters.more30student}}</h2>
    
  <hello-vuex></hello-vuex>
  </div>
</template>

<script>

import HelloVuex from './components/HelloVuex';

export default {
  components:{
    HelloVuex
  },
  name: "App",
  data() {
    return {
      message: "当前计数是多少",
    }
    
  },
  methods: {
      addiction() {
        this.$store.commit('increment')
      },
      subtraction(){
        this.$store.commit('decrement')
      
      },
      addcounter(counter){
        this.$store.commit('incrementcounter',counter)
      },
      addStudent(){
        const stu = {id:5,name:'xiao',age:45}
        this.$store.commit('incrementstu',stu)
      },
      updateinfo(){
        this.$store.commit('updateinfo')
      }
  }
  }
</script>

<style>
</style>