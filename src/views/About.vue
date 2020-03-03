<template>
  <div class="about">
    <HomeHeader/>
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
