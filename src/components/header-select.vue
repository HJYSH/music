<template>
  <div class="body">
    <div class="container">
      <ul>
        <li
          v-for="item of menu"
          :key="item.id"
          :class="{selected:id===item.id}"
          @click="handleIdChange(item.id)"
        >{{item.name}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeaderSelect',
  props: {
    menu: Array
  },
  data () {
    return {
      keyword: '',
      display: 'false',
      setTimeout: '',
      id: '1'
    }
  },
  methods: {
    handleIdChange (number) {
      this.id = number
    }
  }
}
</script>
<style lang="stylus" scoped>
  .body
    background: #C20C0C
    .container
      width:1100px
      margin:0 auto
      ul
        display flex
        width:550px
        padding-left:180px
        justify-content space-around
        height:36px
        color:whitesmoke
        font-size small
        .selected
          background:black
          border-radius 10px
        li
          margin-top:8px
          height:20px
          padding:0 10px
          line-height 20px
          &:hover
            background:black
            border-radius 10px
</style>
