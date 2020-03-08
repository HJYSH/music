<template>
  <div class="about">
    <HomeHeader/>
    <div class="red-bottom"></div>
    <router-link to="/">This is an about page</router-link>
  </div>
</template>
<script>
import HomeHeader from '../components/Home-header'
export default {
  name: 'Home',
  components: {
    HomeHeader
  }
}
</script>
<style lang="stylus" scoped>
  .red-bottom
    height:5px
    background:#C20C0C
</style>
