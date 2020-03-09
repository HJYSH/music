<template>
  <div v-if="side" class="right-side">
    <div class="header">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <router-link to="/about">用户登录</router-link>
    </div>
    <div class="singer-anchor">
      <div class="singer">
        <div class="singer-header">
          <h3>{{singerTitle}}</h3>
          <div class="more">查看全部&gt;</div>
        </div>
        <div class="content">
          <ul>
            <router-link v-for="item of singerList" :key="item.id" tag="li" :to="'/song/'+item.id">
              <img alt="张惠妹" :src="item.img" />
              <div class="info">
                <h4>{{item.name}}</h4>
                <p>{{item.info}}</p>
              </div>
            </router-link>
          </ul>
        </div>
        <div class="footer">申请成为网易音乐人</div>
      </div>
      <div class="anchor">
        <div class="anchor-header">
          <h3>{{anchorTitle}}</h3>
        </div>
        <div class="anchor-content">
          <ul>
            <router-link tag="li" v-for="item of anchorList" :key="item.id" :to="'/song/' + item.id">
              <img :alt="item.name" :src="item.img" />
              <div class="anchor-ifo">
                <h4>{{item.name}}<span style="color:red;font-size: 14px">V</span></h4>
                <p>{{item.info}}</p>
              </div>
            </router-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightSide',
  props: {
    side: Object
  },
  data () {
    return {
    }
  },
  computed: {
    singerList () {
      return this.side.singer.list
    },
    singerTitle () {
      return this.side.singer.title
    },
    anchorList () {
      return this.side.anchor.list
    },
    anchorTitle () {
      return this.side.anchor.title
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .header
    padding 16px 22px
    height:94px
    background #f5f5f5
    p
      font-size 12px
      line-height 22px
    a
      display block
      width:100px
      height:31px
      line-height 31px
      font-size 12px
      margin:10px auto
      color:#fff
      text-align center
      text-shadow: 0 1px 0 #8a060b
      background:#FF0000
      border-radius 4px
  .singer-anchor
    padding:20px
    .singer
      position relative
      .singer-header
        line-height 30px
        border-bottom : 1px solid
        .more
          font-size 12px
          position absolute
          top:0
          right:0
      .content
        li
          height:62px
          position relative
          padding-top: 20px
          cursor pointer
          img
            height:62px
          .info
            position absolute
            top:20px
            left:62px
            width:139px
            height:62px
            padding-left:10px
            background: #f5f5f5
            &:hover
              background #eee
            h4
              line-height 31px
            p
              line-height 31px
              font-size 12px
              ellipsis()
      .footer
        line-height 31px
        margin-top 20px
        text-align center
        border:1px solid #ccc
        font-size 12px
        font-weight:bold
        box-shadow 2px
        background #f5f5f5
    .anchor
      padding-top 30px
      .anchor-header
        line-height 30px
        border-bottom : 1px solid
      .anchor-content
        padding-top:20px
        li
          position relative
          height:40px
          padding-bottom 10px
          img
            height:40px
          .anchor-ifo
            position absolute
            left:40px
            top:0
            height 40px
            width:139px
            overflow hidden
            padding-left:5px
            h4
              font-size 12px
              line-height 20px
              &:hover
                text-decoration underline
            p
              font-size 12px
              line-height 20px
              ellipsis()
</style>
