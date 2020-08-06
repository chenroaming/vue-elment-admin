<template>
 <div class="">
  {{msg}}{{userName}}
  <el-button type="primary" @click="signOut">登出</el-button>
 </div>
</template>

<script>
export default {
  name: 'layoutNav',
  data () {
    return {
      msg: 'Welcome!!!'
    }
  },
  computed: {
    userName () {
      const { name } = this.$store.getters.getUserInfo
      return name
    }
  },
  mounted () {

  },
  methods: {
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

</style>
