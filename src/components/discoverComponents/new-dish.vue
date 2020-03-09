<template>
  <div v-if="dish">
    <div class="header">
      <h1>{{title}}</h1>
      <div class="more">
        <router-link to="/about">更多</router-link>
        <i>&nbsp;</i>
      </div>
    </div>
    <div class="new-dish">
      <el-carousel :interval="5000" arrow="always" indicator-position="none">
        <el-carousel-item v-for="item of list" :key="item.item1">
          <ul>
            <li v-for="list of item.content" :key="list.id">
              <div class="img">
                <img :alt="list.singer" :src="list.img">
                <span class="play"></span>
              </div>
              <p class="singer">{{list.singer}}</p>
              <p class="msg">{{list.msg}}</p>
            </li>
          </ul>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NewDish',
  props: {
    dish: Object
  },
  computed: {
    title () {
      return this.dish.title
    },
    list () {
      return this.dish.item
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~@/assets/styles/mixins.styl"
  .new-dish >>> .el-carousel__container
    width:645px
    height:188px
    margin 0 auto
  .new-dish >>> .el-carousel__item
    margin-top:28px
    height:160px
  .new-dish >>> .el-carousel__arrow
    top: 79px
    width:17px
    height:17px
  .new-dish >>> .el-carousel__arrow--right
    background: url("~@/assets/index.png")
    background-repeat no-repeat
    background-position -300px -75px
    z-index -9999px
    right:-17px
  .new-dish >>> .el-carousel__arrow--left
    background: url("~@/assets/index.png")
    background-repeat no-repeat
    background-position -260px -75px
    z-index -9999px
    left:-17px
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
  .new-dish
    height:188px
    margin-top:20px
    margin-bottom 30px
    background:#f5f5f5
    .el-carousel
      height:188px
      ul
        width:645px
        height:100%
        li
          width:118px
          margin-left:11px
          display inline-block
          background url("~@/assets/index.png")
          background-repeat no-repeat
          background-position -260px 100px
          .img
            position: relative
            width:118px
            height:100px
            background url("~@/assets/coverall.png")
            background-repeat no-repeat
            margin-bottom 7px
            background-position 0 -570px
            &:hover .play
              position absolute
              width:16px
              height 17px
              right:15px
              bottom 5px
              background url("~@/assets/iconall.png")
              background-repeat no-repeat
              padding-right:10px
            img
              width:100px
              height:100px
          p
            line-height 20px
            ellipsis()
            &:hover
              text-decoration underline
</style>
