<template>
  <el-container>
    <el-aside width="auto">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header>
        <layoutNav></layoutNav>
      </el-header>
      <el-main>
        <appMain></appMain>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
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

  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang = "scss">
  .el-header {
    padding: 0;
  }
  .el-aside {
    overflow: unset;
  }
</style>
