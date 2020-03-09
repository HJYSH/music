<template>
  <div class="new-dish">
    <el-carousel :interval="5000" arrow="always" indicator-position="none">
      <el-carousel-item v-for="item in dis" :key="item.item1">
        <ul>
          <li v-for="dish of item.content" :key="dish.id">
            <div class="img">
              <img :alt="dish.singer" :src="dish.img">
              <span class="play"></span>
            </div>
            <p class="singer">{{dish.singer}}</p>
            <p class="msg">{{dish.msg}}</p>
          </li>
        </ul>
      </el-carousel-item>
    </el-carousel>
  </div>
</template>

<script>
export default {
  name: 'NewDish',
  data () {
    return {
      dis: [
        {
          item1: 1,
          content: [
            {
              id: 3,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 4,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 5,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 6,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 11,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            }
          ]
        },
        {
          item1: 2,
          content: [
            {
              id: 7,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 8,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 9,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 10,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            }
          ]
        },
        {
          item1: 3,
          content: [
            {
              id: 3,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 4,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 5,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 6,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 11,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            }
          ]
        },
        {
          item1: 4,
          content: [
            {
              id: 7,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 8,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 9,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            },
            {
              id: 10,
              img: 'http://p3.music.126.net/PunfNNRGPT-tFm-fWPXTrA==/109951164715215423.jpg?param=100y100',
              singer: 'MAP OF THE SOUL : 7',
              msg: '防弹少年团'
            }
          ]
        }
      ]
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
