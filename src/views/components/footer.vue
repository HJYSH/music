<template>
  <div class="footer">
    <div class="content">
      <div class="webMessage">
        <p>
          <router-link to="/about">服务条款</router-link>
          <span>|</span>
          <router-link to="/about">隐私策略</router-link>
          <span>|</span>
          <router-link to="/about">儿童隐私策略</router-link>
          <span>|</span>
          <router-link to="/about">版权投诉指导</router-link>
          <span>|</span>
          <router-link to="/about">意见反馈</router-link>
          <span>|</span>
        </p>
        <p>
          网易公司版权所有©1997-2020
          <span>杭州乐读科技有限公司运营：</span>
          <router-link to="/about">浙网文[2018]3506-263号</router-link>
        </p>
        <p>
          违法和不良信息举报电话：
          <span>0571-89853516</span>
          <span>举报邮箱：</span>
          <router-link to="/about">ncm5990@163.com</router-link>
        </p>
        <p>
          粤B2-20090191-18
          <span></span>
          <router-link to="/about">工业和信息化部备案管理系统网站</router-link>
        </p>
      </div>
      <div class="footer-icon">
        <ul>
          <li>
            <router-link to="/about" class="icon user"></router-link>
            <span class="tt-auth"></span>
          </li>
          <li>
            <router-link to="/about" class="icon musicer"></router-link>
            <span></span>
          </li>
          <li>
            <router-link to="/about" class="icon thanks"></router-link>
            <span class="tt-reward"></span>
          </li>
          <li>
            <router-link to="/about" class="icon video"></router-link>
            <span class="tt-cash"></span>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AllFooter',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  .footer
    border-top:1px solid #d3d3d3
    height:172px
    .content
      position: relative
      width:980px
      margin 0 auto
      height:172px
      .webMessage
        width:520px
        padding-top:20px
        font-size 12px
        p
          line-height 24px
          a
            color black
            &:hover
              text-decoration underline
          span
            margin 0 8px 0 10px
      .footer-icon
        position absolute
        top:0
        right 0
        padding-top 33px
        width:330px
        ul
          display flex
          justify-content space-between
          li
            width:60px
            height:70px
            .icon
              display block
              width:50px
              height 45px
              margin 0 auto
              background: url("~@/assets/foot_enter_new.png")
              background-size 110px 450px
              background-repeat no-repeat
            .user
              background-position: -63px -101px
            .musicer
              background-position: 0 0
            .thanks
              background-position: -60px -50px
            .video
              background-position: 0 -101px
            span
              display block
              background: url("~@/assets/foot_enter_tt.png")
              background-repeat no-repeat
              background-size 180px 100px
              width:52px
              height 14px
              margin 5px 5px 0
            .tt-auth
              background-position -1px -91px
            .tt-reward
              background-position 0 -54px
            .tt-cash
              background-position -1px -71px
</style>
