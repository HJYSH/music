<template>
  <div class="home">
    <HomeHeader/>
    <HeaderSelect/>
    <HomeSwiper/>
    <HomeDiscover/>
    <AllFooter/>
  </div>
</template>

<script>
// @ is an alias to /src
import HeaderSelect from '../components/header-select'
import HomeSwiper from '../components/home-swiper'
import HomeDiscover from '../components/home-discover'
import HomeHeader from '../components/Home-header'
import AllFooter from './components/footer'

export default {
  name: 'Home',
  components: {
    AllFooter,
    HomeHeader,
    HomeDiscover,
    HomeSwiper,
    HeaderSelect
  }
}
</script>
<style lang="stylus" scoped>
  .home
    background #f5f5f5
</style>
