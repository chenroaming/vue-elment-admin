<template>
 <div class="MainHome">
  这是系统主页面
  {{msg}}
  <el-button type="primary" @click="signOut">登出</el-button>
 </div>
</template>

<script>
export default {
  name: 'MainHome',
  data () {
    return {
      msg: 'Welcome!!!'
    }
  },
  computed: {

  },
  mounted () {

  },
  methods: {
    signOut () {
      this.$store.dispatch('signOut').then(({ state }) => {
        state === 100 && this.$router.push({ name: 'Home' })
      })
    }
  }
}
</script>

<style scoped lang = "scss">

</style>
