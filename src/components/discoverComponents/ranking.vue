<template>
  <div v-if="ranking">
    <div class="header">
      <h1>{{title}}</h1>
      <div class="more">
        <router-link to="/about">更多</router-link>
        <i>&nbsp;</i>
      </div>
    </div>
    <div class="ranking">
      <dl v-for="(item, index) of list" :key="index">
        <dt class="top">
          <div class="img">
            <img :alt="item.name" :src="item.img">
          </div>
          <div class="title">
            <h2>{{item.name}}</h2>
            <div class="btn">
              <router-link class="size play" to="/about">播放</router-link>
              <router-link class="size collect" to="/about">收藏</router-link>
            </div>
          </div>
        </dt>
        <dd>
          <ul>
            <li class="rank-item" v-for="msg of item.content" :key="msg.rank">
              <div class="item">
                <span class="rank">{{msg.rank}}</span>
                <router-link tag="p" :to="'/song/' + msg.id">{{msg.name}}</router-link>
              </div>
              <div class="item-btn">
                <span class="item-play"></span>
                <span class="add"></span>
                <span class="item-collect"></span>
              </div>
            </li>
          </ul>
        </dd>
        <router-link class="all" tag="p" :to="'/' + item.id">查看全部&gt;</router-link>
      </dl>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Ranking',
  props: {
    ranking: Object
  },
  data () {
    return {}
  },
  computed: {
    title () {
      return this.ranking.title
    },
    show () {
      return (this.ranking.length)
    },
    list () {
      return this.ranking.rank
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
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
  .ranking
    height:472px
    width:690px
    margin: 20px 0 20px 0
    background:url("~@/assets/index_bill.png")
    dl
      display inline-block
      width:230px
      height:472px
      .top
        height:100px
        padding-left:20px
        padding-top:20px
        z-index 99
        .img
          float left
          width:80px
          height 80px
          img
            width:100%
        .title
          float left
          margin 10px
          h2
            font-weight bold
            font-size 14px
            &:hover
              text-decoration underline
          .btn
            margin-top:10px
            .size
              display inline-block
              width:22px
              height:22px
              overflow hidden
              text-indent -9999px
              margin-right:10px
              background url("~@/assets/index.png")
              background-repeat no-repeat
            .play
              background-position -267px -205px
              &:hover
                background-position -267px -235px
            .collect
              background-position -300px -205px
              &:hover
                background-position -300px -235px
      ul
        margin-left:50px
        .rank-item
          position relative
          height:32px
          line-height 32px
          display flex
          &:hover
            .item-btn
              display block
            .item
              width:98px
              p
                text-decoration underline
          .item
            height:32px
            p
              overflow hidden
              ellipsis()
            .rank
              position absolute
              left:-20px
              line-height 32px
          .item-btn
            display none
            width 78px
            height:32px
            line-height 32px
            margin-left:5px
            span
              display inline-block
              width:17px
              height:17px
              text-indent -9999px
              overflow hidden
              background-repeat no-repeat
              margin:7px 7px 0 0
            .item-play
              background: url("~@/assets/index.png")
              background-position -267px -268px
            .add
              background:url("~@/assets/icon.png")
              background-position 0 -698px
            .item-collect
              background: url("~@/assets/index.png")
              background-position -297px -268px
    .all
      text-align right
      height:32px
      margin-right:32px
      line-height 32px
      font-size 12px
      &:hover
        text-decoration underline
</style>
