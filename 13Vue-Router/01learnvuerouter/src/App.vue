<template>
  <div id="app">
    <!-- <button>按钮</button>
    <router-link to="/home" tag="button" replace="">首页</router-link>
    <router-link to="/about" tag="button" replace="">关于</router-link>
    <button @click="homeClick">首页</button>
     <button @click="aboutClick">关于</button>-->
    <router-link to="/home">首页</router-link>
    <router-link to="/about">关于</router-link>
    <router-link :to="'/user/'+userId">用户</router-link>
    <router-link :to="{path:'/Profile',query:{name:'luo',age:20,heigth:160}}">档案</router-link>
    <!--<router-view></router-view>-->
    <keep-alive exclude="User">
      <router-view></router-view>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      userId:'zhangsan'
    }
  },
  methods: {
    homeClick() {
      this.$router.push("./home");
      console.log("homeClick");
    },
    aboutClick() {
      this.$router.push("./about");
      console.log("aboutClick");
    },
  },
};
</script>

<style>
.active {
  color: crimson;
}
</style>
