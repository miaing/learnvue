<template>
  <div>
    <h1>我是about的标题</h1>
    <p>我是about的段落</p>
  </div>
</template>

<script>
export default {
    name:"About",
    created() {
      console.log('About created');
    },
    destroyed() {
      console.log('About destroyed')
    },
};
</script>

<style>
</style>