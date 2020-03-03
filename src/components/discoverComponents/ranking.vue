<template>
  <div class="ranking">
    <div class="border"></div>
    <dl>
      <dt>ni hao </dt>
      <dd>
        <ul>
          <li style="display:flex"><span class="rank">1</span><p>无心</p></li>
        </ul>
      </dd>
    </dl>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .ranking
    position relative
    height:200px
    width:100%
    margin: 20px 0 20px 0
    border:1px solid #ccc
    .border
      position absolute
      z-index -1
      left:33%
      width:33%
      height:100%
      border-left:1px solid #ccc
      border-right:1px solid #ccc
</style>
