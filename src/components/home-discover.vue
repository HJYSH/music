<template>
  <div class="discover">
    <div class="content">
      <HotContent :list="hot"/>
      <NewDish :dish="dish"/>
      <Ranking :ranking="ranking"/>
    </div>
    <div class="right-side">
      <RightSide :side="side"/>
    </div>
  </div>
</template>

<script>
import HotContent from './discoverComponents/hot-content'
import Ranking from './discoverComponents/ranking'
import RightSide from './discoverComponents/right-side'
import NewDish from './discoverComponents/new-dish'
export default {
  name: 'HomeDiscover',
  components: { NewDish, RightSide, Ranking, HotContent },
  props: {
    discover: Object
  },
  computed: {
    ranking () {
      return this.discover.ranking
    },
    dish () {
      return this.discover.dish
    },
    hot () {
      return this.discover.hot
    },
    side () {
      return this.discover.side
    }
  }
}
</script>
<style lang="stylus" scoped>
  .discover
    width:980px
    margin: 0 auto
    border:1px solid #d3d3d3
    border-bottom: none
    display flex
    background: white
    .content
      width:689px
      padding: 20px 20px 40px 20px
      border-right: 1px solid #d3d3d3
    .right-side
      width:249px
</style>
