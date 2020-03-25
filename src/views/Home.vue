<template>
  <div class="home">
    <HomeHeader/>
    <HeaderSelect/>
    <HomeSwiper :list="swiperList"/>
    <HomeDiscover :discover="discover"/>
    <AllFooter/>
    <div class="toTop" @click="handleTop" v-show="show">top</div>
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
      hot: {},
      show: false
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
    },
    // 回到页面的顶部
    handleTop () {
      window.pageYOffset = 0
      document.documentElement.scrollTop = 0
      document.body.scrollTop = 0
    },
    // 获取当前页面的滚动高度，根据滚动高度决定show的值
    handleScroll () {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.show = scrollTop > 0 ? 'true' : false
    }
  },
  mounted () {
    this.getHomeInfo()
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    document.removeEventListener('scroll', this.handleScroll)
  }
}
</script>
<style lang="stylus" scoped>
  .home
    background #f5f5f5
    .toTop
      position:fixed
      bottom: 180px
      left:50%
      margin-left 510px
      border: 1px solid
      text-align center
      width:50px
      height 50px
      line-height 50px
</style>
