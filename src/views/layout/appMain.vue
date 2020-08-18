<template>
  <section class="app-main">
    <transition name="fade-transform" mode="out-in">
      <router-view></router-view>
    </transition>
 </section>
</template>

<script>
export default {
  name: 'vueName',
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

  }
}
</script>

<style scoped lang = "scss">
  .app-main {
    padding: 20px;
    height: calc(100vh - 67px);
    position: relative;
    overflow: auto;
    overflow-x: hidden;
    overflow-y: auto;
  }
  .app-main::-webkit-scrollbar {
      display: none;
  }
</style>
