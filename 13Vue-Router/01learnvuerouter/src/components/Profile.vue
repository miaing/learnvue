<template>
  <div>
    <h1>我是Profile的标题</h1>
    <p>我是Profile的内容</p>
    <p>{{$route.query.name}}</p>
    <p>{{$route.query.age}}</p>
    <p>{{$route.query.heigth}}</p>
  </div>
</template>

<script>
export default {
    name:'Profile',
    created() {
      console.log('Profile created');
    },
    destroyed() {
      console.log('Profile destroyed')
    },

};
</script>

<style>
</style>