<template>
 <div class="">
  这是菜单三子菜单1
  <el-button type="primary" v-permission="['admin']" @click="showAuth('admin')">看到此按钮说明具备操作权限</el-button>
 </div>
</template>

<script>
export default {
  name: 'menu3Index1',
  data () {
    return {
      msg: 'Welcome to your vueName'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    showAuth (auth) {
      this.$message.success(`具备${auth}权限！`)
    }
  }
}
</script>

<style scoped lang = "scss">

</style>
