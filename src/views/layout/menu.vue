<template>
  <el-menu
    class="el-menu-vertical-demo"
    :collapse="isCollapse"
    :default-active="nowActive"
    background-color="#545c64"
    text-color="#fff"
    router
    unique-opened>
    <slideItem
      v-for="item in filterRouter"
      :key="item.meta.title"
      :item="item"></slideItem>
  </el-menu>
</template>

<script>
import slideItem from '@/components/layout/slideItem'
import { mapGetters } from 'vuex'
export default {
  name: 'Menu',
  components: {
    slideItem
  },
  data () {
    return {

    }
  },
  computed: {
    ...mapGetters({
      isCollapse: 'getIsOpen',
      asyncRouterMap: 'getRouter'
    }),
    filterRouter () {
      return this.asyncRouterMap.filter(item => !item.hide)
    },
    nowActive () {
      return this.$route.redirectedFrom || this.$route.path
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang = "scss">
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
    height: 100vh;
  }
</style>
