<template>
  <div class="header">
    <div class="logo">
    </div>
    <ul class="banner">
      <li>发现音乐</li>
      <li>我的音乐</li>
      <li>朋友</li>
      <li>商城</li>
      <li>音乐人</li>
      <li>下载客户端</li>
    </ul>
    <div class="search">3</div>
    <div class="user">4</div>
  </div>
</template>

<script>
export default {
  name: 'HomeHeader',
  data () {
    return {
    }
  }
}
</script>
<style lang="stylus" scoped>
  .header
    width:1100px
    height:69px
    display:flex
    margin : 0 auto
    background:#242424
    .logo
      width:176px
      background : url("~@/assets/topbar.png")
    .banner
      display:flex
      width:600px
      height:69px
      color:white
      margin:0
      padding:0
      list-style none
      li
        height:69px
        line-height 69px
        padding:0 19px
</style>
