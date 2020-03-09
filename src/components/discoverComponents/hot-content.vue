<template>
  <div v-if="list">
    <div class="header">
      <h1>{{title}}</h1>
      <div class="tab">
        <div class="tab-item" v-for="(item, index) of header" :key="item.id">
          <router-link :to="'/' + item.name" >{{item.name}}</router-link>
          <span v-if="index!==length">|</span>
        </div>
      </div>
      <div class="more">
        <router-link to="/about">更多</router-link>
        <i>&nbsp;</i>
      </div>
    </div>
    <div class="hot">
      <ul>
        <router-link tag="li" to="/about" v-for="item of content" :key="item.id">
          <img alt="item.title" :src="item.img">
          <p>{{item.title}}</p>
          <div class="desc-play">
            <span class="icon"></span>
            <span class="desc">{{item.desc}}</span>
            <span class="play"></span>
          </div>
        </router-link>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HotContent',
  props: {
    list: Object
  },
  data () {
    return {
    }
  },
  computed: {
    title () {
      return this.list.title
    },
    header () {
      return this.list.headerList
    },
    content () {
      return this.list.contentList
    },
    length () {
      return this.header.length
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
  .hot
    ul
      flex-wrap wrap
      display flex
      justify-content space-between
      width:100%
      height:468px
      overflow hidden
      margin-top:20px
      li
        position relative
        width:140px
        height:204px
        padding-bottom 30px
        p
          color: #333333
          font-size 14px
          line-height 16px
          margin-top 8px
          &:hover
            text-decoration underline
        .desc-play
          position absolute
          top:113px
          width:100%
          height 27px
          line-height 27px
          opacity 0.8
          color:#ccc
          background #333333
          span
            display inline-block
          .icon
            float:left
            width:14px
            height: 11px
            background :url("~@/assets/iconall.png")
            background-repeat no-repeat
            background-position 0 -24px
            margin: 8px 5px 8px 10px
          .desc
            float:left
          .play
            float:right
            width:16px
            height 17px
            right:0
            margin-top:5px
            background url("~@/assets/iconall.png")
            background-repeat no-repeat
            padding-right:10px
</style>
