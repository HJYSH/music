<template>
  <div class="right-side">
    <div class="header">
      <p>登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
      <router-link to="/about">用户登录</router-link>
    </div>
    <div class="singer-anchor">
      <div class="singer">
        <div class="singer-header">
          <h3>入驻歌手</h3>
          <div class="more">查看全部&gt;</div>
        </div>
        <div class="content">
          <ul>
            <li>
              <img alt="张惠妹" src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" />
              <div class="info">
                <h4>张惠妹aMEI</h4>
                <p>台湾歌手张惠妹有一二个三国杀东方国际司法解释</p>
              </div>
            </li>
            <li>
              <img alt="张惠妹" src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" />
              <div class="info">
                <h4>张惠妹aMEI</h4>
                <p>台湾歌手张惠妹</p>
              </div>
            </li>
            <li>
              <img alt="张惠妹" src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" />
              <div class="info">
                <h4>张惠妹aMEI</h4>
                <p>台湾歌手张惠妹</p>
              </div>
            </li>
            <li>
              <img alt="张惠妹" src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" />
              <div class="info">
                <h4>张惠妹aMEI</h4>
                <p>台湾歌手张惠妹</p>
              </div>
            </li>
          </ul>
        </div>
        <div class="footer">申请成为网易音乐人</div>
      </div>
      <div class="anchor">
        <div class="anchor-header">
          <h3>热门主播</h3>
        </div>
        <div class="anchor-content">
          <ul>
            <li>
              <img alt="张惠妹" src="http://p1.music.126.net/p9U80ex1B1ciPFa125xV5A==/5931865232210340.jpg?param=62y62" />
              <div class="anchor-ifo">
                <h4>张惠妹aMEI <span style="color:red;font-size: 16px">V</span></h4>
                <p>台ksg;skg;kd;sgfkp;dkf;g;4154548748789</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'RightSide',
  data () {
    return {
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
          img
            height:62px
          .info
            position absolute
            top:20px
            left:62px
            width:139px
            height:62px
            padding-left:10px
            background #f5f5f5
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
            p
              font-size 12px
              line-height 20px
              ellipsis()
</style>
