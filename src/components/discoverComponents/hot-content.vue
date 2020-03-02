<template>
  <div class="hot">
    <ul>
      <li v-for="item of items" :key="item.id">
        <router-link to="/about">
          <img alt="item.title" :src="item.img">
          <p>{{item.title}}</p>
        </router-link>
        <div class="desc-play">
          <span class="icon"></span>
          <span class="desc">{{item.desc}}</span>
          <span class="play"></span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HotContent',
  data () {
    return {
      items: [
        {
          id: 1,
          desc: '21万',
          img: 'http://p1.music.126.net/8NK78G-Ub1Hy5YcFESwNvA==/109951164758621783.jpg?param=140y140',
          title: '2020年二月最热新歌TOP50'
        },
        {
          id: 2,
          desc: '21万',
          img: 'http://p1.music.126.net/8NK78G-Ub1Hy5YcFESwNvA==/109951164758621783.jpg?param=140y140',
          title: '2020年二月最热新歌TOP50'
        },
        {
          id: 3,
          desc: '21万',
          img: 'http://p1.music.126.net/8NK78G-Ub1Hy5YcFESwNvA==/109951164758621783.jpg?param=140y140',
          title: '2020年二月最热新歌TOP50'
        },
        {
          id: 4,
          desc: '21万',
          img: 'http://p1.music.126.net/8NK78G-Ub1Hy5YcFESwNvA==/109951164758621783.jpg?param=140y140',
          title: '2020年二月最热新歌TOP50'
        }
      ]
    }
  }
}
</script>
<style lang="stylus" scoped>
  .hot
    ul
      flex-wrap wrap
      display flex
      justify-content space-between
      width:100%
      height:468px
      overflow hidden
      margin-top:20px
      li
        position relative
        width:140px
        height:204px
        padding-bottom 30px
        p
          color: #333333
          line-height 16px
        .desc-play
          position absolute
          top:113px
          width:100%
          height 27px
          line-height 27px
          opacity 0.8
          color:#ccc
          background #333333
          span
            display inline-block
          .icon
            float:left
            width:14px
            height: 11px
            background :url("~@/assets/iconall.png")
            background-repeat no-repeat
            background-position 0 -24px
            margin: 8px 5px 8px 10px
          .desc
            float:left
          .play
            float:right
            width:16px
            height 17px
            right:0
            margin-top:5px
            background url("~@/assets/iconall.png")
            background-repeat no-repeat
            padding-right:10px
</style>
