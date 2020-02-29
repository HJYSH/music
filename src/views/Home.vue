<template>
  <div>
    <HomeHeader/>
    <HeaderSelect/>
    <HomeSwiper/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Home-header'
import HeaderSelect from '../components/header-select'
import HomeSwiper from '../components/home-swiper'

export default {
  name: 'Home',
  components: {
    HomeSwiper,
    HomeHeader,
    HeaderSelect
  }
}
</script>
