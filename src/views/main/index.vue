<template>
  <div class="main-box">
    <div class="aslide">
      <Menu></Menu>
    </div>
    <div class="main-child" :class="{ 'main-child2': isCollapse }">
      <layoutNav></layoutNav>
      <appMain></appMain>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import Menu from '@/views/layout/menu'
import layoutNav from '@/views/layout/layoutNav'
import appMain from '@/views/layout/appMain'
export default {
  name: 'MainHome',
  components: { Menu, layoutNav, appMain },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      isCollapse: 'getIsOpen'
    })
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang = "scss">
  .main-box {
    .aslide {
      width: auto;
      max-width: 200px;
      position: fixed;
      top: 0;
      left: 0;
    }
    .main-child {
      transition: .28s;
      width: calc( 100% - 200px );
      position: relative;
      left: 199px;
    }
    .main-child2 {
      width: calc( 100% - 65px );
      left: 65px;
    }
  }
</style>
