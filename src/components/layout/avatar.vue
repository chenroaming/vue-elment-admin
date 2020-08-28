<template>
  <el-dropdown @command="handleCommand">
    <el-avatar :src="avatarSrc" class="avatar"></el-avatar>
    <el-dropdown-menu slot="dropdown">
      <el-dropdown-item command="signOut">退出登录</el-dropdown-item>
    </el-dropdown-menu>
  </el-dropdown>
</template>

<script>
export default {
  name: 'avatar',
  data () {
    return {
      avatarSrc: 'https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png'
    }
  },
  computed: {

  },
  mounted () {
    console.log(111)
  },
  methods: {
    handleCommand (command) {
      this[command]()
    },
    signOut () {
      this.$store.dispatch('signOut').then(res => {
        this.$router.push({ path: '/' })
        location.reload()
      })
    }
  }
}
</script>

<style scoped lang = "scss">
  .el-avatar {
    cursor: pointer;
    flex-grow:0;
  }
</style>
