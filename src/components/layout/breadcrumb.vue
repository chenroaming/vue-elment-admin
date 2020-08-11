<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>{{ nowPage }}</el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  name: 'breadcrumb',
  data () {
    return {
      nowPage: '菜单一子菜单1'
    }
  },
  watch: {
    $route (cur, old) {
      this.nowPage = cur.meta.title
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang = "scss">

</style>
