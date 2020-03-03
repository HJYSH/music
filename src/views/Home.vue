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
import HeaderSelect from '../components/header-select'
import HomeSwiper from '../components/home-swiper'
import HomeDiscover from '../components/home-discover'
import HomeHeader from '../components/Home-header'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HomeDiscover,
    HomeSwiper,
    HeaderSelect
  }
}
</script>
