<template>
  <div class="home">
    这是首页
    <el-button type="primary" @click="goLogin">点击跳转到登录页</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {

  },
  methods: {
    goLogin () {
      this.$router.push({ name: 'login' })
    }
  }
}
</script>
