<template>
  <div class="home">
    <HomeHeader/>
    <HeaderSelect/>
    <HomeSwiper :list="swiperList"/>
    <HomeDiscover :discover="discover"/>
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
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    AllFooter,
    HomeHeader,
    HomeDiscover,
    HomeSwiper,
    HeaderSelect
  },
  data () {
    return {
      swiperList: [],
      discover: {},
      ranking: {},
      dish: {},
      hot: {}
    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/home.json')
        .then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      if (res.ret && res.data) {
        const data = res.data
        this.swiperList = data.swiperList
        this.ranking = data.discover.ranking
        this.dish = data.discover.dish
        this.hot = data.discover.hot
        this.discover = data.discover
      }
    }
  },
  mounted () {
    this.getHomeInfo()
  }
}
</script>
<style lang="stylus" scoped>
  .home
    background #f5f5f5
</style>
