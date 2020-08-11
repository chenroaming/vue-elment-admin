<template>
 <div class="header">
  <i class="toggleButton" :class="[ isCollapse ? 'el-icon-s-fold' : 'el-icon-s-unfold' ]" @click="closeMenu"></i>
  <!-- <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item>活动管理</el-breadcrumb-item>
  </el-breadcrumb> -->
  <breadcrumb></breadcrumb>
  <div class="title">通用后台管理模板</div>
  <avatar></avatar>
 </div>
</template>

<script>
import breadcrumb from '@/components/layout/breadcrumb'
import avatar from '@/components/layout/avatar'
import { mapGetters } from 'vuex'
export default {
  name: 'layoutNav',
  components: {
    avatar, breadcrumb
  },
  data () {
    return {
      msg: 'Welcome!!!'
    }
  },
  computed: {
    userName () {
      const { name } = this.$store.getters.getUserInfo
      return name
    },
    ...mapGetters({
      isCollapse: 'getIsOpen'
    })
  },
  mounted () {

  },
  methods: {
    closeMenu () {
      this.$store.dispatch('toggleOpen')
    }
  }
}
</script>

<style scoped lang = "scss">
  .header{
    height: 100%;
    width: 100%;
    line-height: 60px;
    display: flex;
    background: #F4F6FF;
    .el-breadcrumb {
      width: 200px;
      height: 60px;
      display: inline-block;
      line-height: 60px;
      flex-grow:0;
    }
    .toggleButton {
      cursor: pointer;
      display: inline-block;
      line-height: 60px;
      width: 50px;
      height: 50px;
      flex-grow:0;
    }
    .title {
      flex-grow:1;
    }
  }
</style>
