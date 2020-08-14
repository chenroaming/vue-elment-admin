<template>
  <el-breadcrumb separator="/">
    <transition-group name="breadcrumb" mode="out-in">
      <el-breadcrumb-item
      v-for="item in menuList"
      :key="item.path"
      :to="{ path:item.path }">{{ item.title }}</el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      menuList: []
    }
  },
  watch: {
    $route (cur, old) {
      this.getBreadCrumb(cur)
    }
  },
  mounted () {
    this.getBreadCrumb(this.$route)
  },
  methods: {
    getBreadCrumb (menu) {
      const { meta: { title }, path } = menu
      this.menuList = [{ title: '首页', path: '/' }].concat(
        [{ title, path }]
      )
    }
  }
}
</script>

<style scoped lang = "scss">

</style>
