<template>
  <div class="body">
    <div class="header">
      <div class="logo">
      </div>
      <ul class="banner">
        <router-link
          tag="li"
          v-for="(item, index) of nav"
          :key="item.key"
          :to="'/' + item.to"
          :class="{selected : index===key}"
          @click="handleNavSelect(index)"
        >{{item.title}}<span class="cor" v-show="index===key"/></router-link>
      </ul>
      <div class="hot"></div>
      <div class="search">
        <el-input
          v-model="keyword"
          size="medium"
          placeholder="用户/视频/电台/音乐"
          prefix-icon="el-icon-search"
          @focus="find"
          @blur="hidden"
        >
          >
        </el-input>
        <div class="result" v-show="show1">
          <router-link target="_blank" to="/about" class="result-header">搜"{{keyword}}"相关的用户</router-link>
          <div class="song">
            <div class="title">歌曲</div>
            <div class="message">ni hao </div>
          </div>
        </div>
      </div>
      <div class="user"><p>创作者中心</p></div>
      <router-link tag="div" to="/about" class="log">登录</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
      keyword: '',
      display: 'false',
      setTimeout: '',
      key: 0,
      nav: [
        {
          key: 1,
          title: '发现音乐',
          to: ''
        },
        {
          key: 2,
          title: '我的音乐',
          to: '我的音乐'
        },
        {
          key: 3,
          title: '朋友',
          to: '朋友'
        },
        {
          key: 4,
          title: '商城',
          to: '商城'
        },
        {
          key: 5,
          title: '音乐人',
          to: '音乐人'
        },
        {
          key: 6,
          title: '下载客户端',
          to: '下载客户端'
        }
      ]
    }
  },
  methods: {
    find () {
      this.display = true
    },
    // 这里设置了一个setTimeout，是为了解决点击搜索提供的选项的链接没有跳转直接隐藏搜索提升的bug
    hidden () {
      setTimeout(this.change, 150)
    },
    change () {
      this.display = false
    },
    handleNavSelect (index) {
      if (index < this.nav.length - 3 || index > this.nav.length - 2) {
        if (index !== this.key) {
          this.key = index
        }
      }
    }
  },
  computed: {
    show1 () {
      return this.keyword && this.display
    }
  }
}
</script>
<style lang="stylus" scoped>
.body
  background:#242424
  .header
    width:1100px
    height:69px
    line-height 69px
    display:flex
    margin : 0 auto
    color:white
    .logo
      width:176px
      background : url("~@/assets/topbar.png")
    .banner
      display:flex
      width:550px
      height:69px
      margin:0
      padding:0
      list-style none
      li
        position relative
        height:69px
        padding:0 19px
        &:hover
          background:black
        .cor
          position absolute
          display block
          left:42%
          top: 62px
          width:12px
          height:7px
          background:url("~@/assets/topbar.png")
          background-repeat no-repeat
          background-position  -226px 0
      .selected
        background:black
    .hot
      position:relative
      left:-60px
      top:20px
      height:50px
      width:40px
      background : url("~@/assets/topbar.png")
      background-repeat no-repeat
      background-position  -180px 0
    .search
      width:158px
      font-size 12px
      border-radius :50%
      .result
        position absolute
        top:60px
        width:200px
        line-height: 26px
        border-radius 4px
        background:red
        color:black
        .result-header
          border-bottom 1px solid
          &:hover
            background:black
        .song
          display flex
          .title
            width:60px
          .message
            width:140px
            border:1px solid
            border-top:0
            border-bottom :0
            border-right:0
    .user
      padding:0 15px
      font-size small
      p
        position:relative
        top:19px
        height:30px
        padding:0 14px
        line-height 30px
        border:1px solid white
        border-radius 15px
        margin:0
    .log
      font-size small
</style>
