<template>
  <div class="Cpn-color">
    <h2>我是Cpn中的标题</h2>
    <p>我是Cpn中的内容</p>
    <h2>{{name}}</h2>
  </div>
</template>

<script>
export default {
    name:"#Cpn",
    data(){
        return{
            name:'Cpn的组件name'
        }

    }
}
</script>

<style scope="">
    .Cpn-color{
        color: chartreuse;
    }
</style>