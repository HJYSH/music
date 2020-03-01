<template>
  <div>
    <HomeHeader/>
    <HeaderSelect/>
    <HomeSwiper/>
    <HomeDiscover/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Home-header'
import HeaderSelect from '../components/header-select'
import HomeSwiper from '../components/home-swiper'
import HomeDiscover from '../components/home-discover'

export default {
  name: 'Home',
  components: {
    HomeDiscover,
    HomeSwiper,
    HomeHeader,
    HeaderSelect
  }
}
</script>
