<template>
  <div>
    <home-header/>
    <HeaderSelect/>
  </div>
</template>
<script>
import HomeHeader from '../components/Home-header'
import HeaderSelect from '../components/header-select'
export default {
  name: 'Song',
  components: { HeaderSelect, HomeHeader }
}
</script>
<style lang="stylus" scoped>
</style>
