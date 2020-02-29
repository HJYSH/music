<template>
  <div class="body" :style="{ background: swiperItem.background}">
    <div class="container">
      <div class="swiper">
        <img alt="1" :src="swiperItem.img"  :style="{ transition: transition, opacity: opacity}">
      </div>
      <div class="loading"><img src="@/assets/download.png"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiper: [
        {
          id: 1,
          background: 'black',
          img: 'http://p1.music.126.net/9uDT_uDF54swMpBHPjx_IQ==/109951164753781892.jpg?imageView&quality=89'
        },
        {
          id: 2,
          background: 'red',
          img: 'http://p1.music.126.net/tQVFPFK5JF01ZY0r7MjAxQ==/109951164755957537.jpg?imageView&quality=89'
        },
        {
          id: 3,
          background: 'pink',
          img: 'http://p1.music.126.net/Slq3EmG_9XrBwYFBK0mVag==/109951164755707125.jpg?imageView&quality=89'
        }
      ],
      key: 0,
      auto: null,
      transition: null,
      opacity: null
    }
  },
  methods: {
    autoPlay () {
      // 2秒后淡出
      setTimeout(() => {
        this.transition = 'opacity ease-out 1s'
        this.opacity = 0.2
      }, 2000)
      // 计时器，用来控制轮播图切换
      const timer = setInterval(() => {
        if (this.key < this.swiper.length - 1) {
          this.key++
        } else { this.key = 0 }
        // 切换图片时，图片淡入
        this.transition = 'opacity ease-in 1s'
        this.opacity = 1
        // 2秒后淡出
        setTimeout(() => {
          this.transition = 'opacity ease-out 1s'
          this.opacity = 0.2
        }, 2000)
      }, 3000)
      // 实例方法$once监听一个自定义方法，但是只触发一次，一旦触发，监听器就会被移除
      // 下面添加的方法是，当监听到生命周期钩子beforeDestory被触发，调用callback函数，然后
      // 这个监听会移除
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
      })
    }
  },
  computed: {
    swiperItem () {
      return this.swiper[this.key]
    }
  },
  mounted () {
    this.autoPlay()
  }
}
</script>
<style lang="stylus" scoped>
  .body
    height:285px
    .container
      width:982px
      height:0
      margin:0 auto
      padding-botton:285px
      display flex
      .swiper
        width:730px
        height:285px
        img
          width:100%
          height:100%
          opacity 1
      .loading
        width:252px
        height:285px
        overflow hidden
        .img
          width:100%
</style>
