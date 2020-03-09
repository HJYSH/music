<template>
  <div
    class="body"
    v-if="show"
    @mouseenter= "stopAuto"
    @mouseleave= "autoPlay"
    :style= "{background: color}"
  >
    <div class="container">
      <div class="swiper">
        <router-link to="/about">
          <img
            alt="1"
            :src="src"
            :style= "{ transition: transition, opacity: opacity}"
          >
        </router-link>
        <ul
          class="pagination"
        >
          <li
            v-for="(item, index) of list"
            :key="item.id"
            @click="handleKeyChange(index)"
            :class="{select: key===index}"
          >
            {{item.id}}
          </li>
        </ul>
      </div>
      <div class="loading">
        <router-link to="/about" class="link">下载客户端</router-link>
        <p>PC 安卓 iPhone WP iPad Mac 六大客户端</p>
      </div>
    </div>
    <div class="pre-next">
      <div
        class="commont pre "
        @click="pre"
      >
        &lt;
      </div>
      <div
        class="commont next"
        @click="next"
      >
        &gt;
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  props: {
    list: Array
  },
  data () {
    return {
      key: 0,
      auto: '',
      transition: '',
      opacity: '',
      timer: '',
      setTimeout: '',
      setTimeout2: ''
    }
  },
  methods: {
    autoPlay () {
      // 3秒后淡出
      this.setTimeout2 = setTimeout(() => {
        this.transition = 'opacity ease-out 1s'
        this.opacity = 0
      }, 3000)
      // 计时器，用来控制轮播图切换
      this.timer = setInterval(() => {
        if (this.key < this.list.length - 1) {
          this.key++
        } else { this.key = 0 }
        // 切换图片时，图片淡入
        this.transition = 'opacity ease-in 0.6s'
        this.opacity = 1
        // 3秒后淡出
        this.setTimeout = setTimeout(() => {
          this.transition = 'opacity ease-out 1s'
          this.opacity = 0
        }, 3000)
      }, 4000)
      // 实例方法$once监听一个自定义方法，但是只触发一次，一旦触发，监听器就会被移除
      // 下面添加的方法是，当监听到生命周期钩子beforeDestory被触发，调用callback函数，然后
      // 这个监听会移除
      this.$once('hook:beforeDestroy', () => {
        clearInterval(this.timer)
      })
    },
    stopAuto () {
      this.opacity = 1
      clearTimeout(this.setTimeout)
      clearTimeout(this.setTimeout2)
      clearInterval(this.timer)
    },
    pre () {
      if (this.key > 0) {
        this.key--
      } else {
        this.key = this.list.length - 1
      }
    },
    next () {
      if (this.key < this.list.length - 1) {
        this.key++
      } else {
        this.key = 0
      }
    },
    handleKeyChange (index) {
      this.key = index
    }
  },
  computed: {
    show () {
      return this.list.length
    },
    color () {
      return this.list[this.key].color
    },
    src () {
      return this.list[this.key].url
    }
  },
  mounted () {
    this.autoPlay()
  }
}
</script>
<style lang="stylus" scoped>
  .body
    position relative
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
        z-index 99
        img
          width:100%
          height:100%
          opacity 1
        .pagination
          position:relative
          bottom 30px
          display flex
          justify-content center
          li
            width: 8px
            height:8px
            margin:8px
            z-index 999
            text-indent -99999px
            background: white
            border-radius 50%
            &:hover
              background: red
          .select
            background: red
      .loading
        width:252px
        height:285px
        overflow hidden
        z-index 99
        background: url("~@/assets/download.png")
        .link
          display block
          width:215px
          height:56px
          margin: 185px 19px 0 19px
          text-indent :-9999px
          &:hover
            background:black
            opacity 0.1
        p
          color:white
          margin:10px 0
          text-align center
          font-size 12px
    .pre-next
      position relative
      width:982px
      height:285px
      margin: 0 auto
      .commont
        position absolute
        top:50%
        width:37px
        height:63px
        margin-top:-30px
        text-indent -99999px
        z-index 99
        background: url("~@/assets/banner.png")
        background-repeat no-repeat
      .pre
        left -63px
        background-position  0 -360px
        &:hover
          background-position  0 -430px
      .next
        right: -63px
        background-position  0 -508px
        &:hover
          background-position  0 -578px
</style>
