<template>
  <div>
    <home-header/>
    <HeaderSelect/>
    <div>{{id}}</div>
  </div>
</template>
<script>
import HomeHeader from '../components/Home-header'
import HeaderSelect from '../components/header-select'
export default {
  name: 'Song',
  props: {
    id: String
  },
  components: { HeaderSelect, HomeHeader },
  watch: {
    id () {
      console.log(this.id)
    }
  }
}
</script>
<style lang="stylus" scoped>
</style>
