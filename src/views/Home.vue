<template>
  <div>
    <HomeHeader/>
    <HeaderSelect/>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeHeader from '../components/Home-header'
import HeaderSelect from '../components/header-select'

export default {
  name: 'Home',
  components: {
    HomeHeader,
    HeaderSelect
  }
}
</script>
