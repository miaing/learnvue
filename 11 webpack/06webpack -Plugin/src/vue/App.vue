<template>
  <div>
        <h2 class="title">{{message}}</h2>
        <button @click="btnClick">按钮</button>
        <p>{{name}}</p>
        <Cpn/>
    </div>
</template>

<script>
import Cpn from './Cpn.vue'
export default {
    name:"App",
    components:{
        Cpn
    },
    data(){
        return {
            message:'你好啊，派大星',
            name:'luo'
        }
    },
    methods: {
        btnClick(){

        }
    },
}


</script>

<style scope="">
    .title{
        color: blue;
    }
    
</style>