<template>
   <div>
    <h1>我是home的标题</h1>
    <p>我是home的段落</p>
    <router-link to="/home/message">消息</router-link>
    <router-link to="/home/new">新闻</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
    name:"Home",
    created() {
      console.log('Home created');
    },
    destroyed() {
      console.log('Home destroyed')
    },
};

    
</script>

<style>

</style>