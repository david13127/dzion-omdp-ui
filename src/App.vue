<template>
  <div id="app">
    <router-link :to="{ path: '/home' }">home</router-link>
    <router-link :to="{ path: '/about' }" style="margin-left: 20px">about</router-link>
    <router-link :to="{ path: '/aggrid' }" style="margin-left: 20px">aggrid</router-link>
    <router-view> </router-view>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
