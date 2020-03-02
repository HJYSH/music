<template>
  <div class="discover">
    <div class="content">
      <ItemHeader/>
      <HotContent/>
    </div>
    <div class="right-side">
      123
    </div>
  </div>
</template>

<script>
import ItemHeader from './discoverComponents/item-header'
import HotContent from './discoverComponents/hot-content'
export default {
  name: 'HomeDiscover',
  components: { HotContent, ItemHeader },
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  .discover
    width:980px
    margin: 0 auto
    border:1px solid #d3d3d3
    display flex
    .content
      width:692px
      padding: 20px 20px 40px 20px
      border-right: 1px solid #d3d3d3
    .right-side
      width:251px
</style>
