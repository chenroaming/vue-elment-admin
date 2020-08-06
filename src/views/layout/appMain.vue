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
  /*50 = navbar  */
  min-height: calc(100vh - 67px);
  position: relative;
  overflow: auto;
}
/*fade-transform*/
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all .5s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
