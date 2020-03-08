<template>
  <div class="header">
    <h1>{{title}}</h1>
    <div class="tab">
      <div class="tab-item" v-for="(item, index) of tab" :key="item.id">
        <router-link :to="'/' + item.name" >{{item.name}}</router-link>
        <span v-if="index!==length">|</span>
      </div>
    </div>
    <div class="more">
      <router-link to="/about">更多</router-link>
      <i>&nbsp;</i>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ItemHeader',
  data () {
    return {
      title: '热门推荐',
      tab: [
        {
          name: '华语',
          href: '',
          id: 1
        },
        {
          name: '华语',
          href: '',
          id: 2
        },
        {
          name: '华语',
          href: '',
          id: 3
        }
      ]
    }
  },
  computed: {
    length () {
      return this.tab.length - 1
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    position relative
    height:35px
    line-height:33px
    padding:0 10px 0 34px
    border-bottom : 2px solid #C10D0C
    background : url("~@/assets/index.png")
    background-repeat no-repeat
    background-position -225px -156px
    h1
      float:left
      font-weight normal
      font-size 20px
    .tab
      float left
      display flex
      padding-left:20px
      font-size 12px
      .tab-item
        span
          padding: 0 5px
    .more
      float right
      font-size 12px
      i
        float:right
        display block
        margin-top:10px
        width:12px
        height:12px
        line-height 33px
        margin-left:4px
        background: url("~@/assets/index.png")
        background-repeat no-repeat
        background-position 0 -240px
</style>
