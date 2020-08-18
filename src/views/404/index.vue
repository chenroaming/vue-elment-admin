<template>
 <div class="">
  {{msg}}
  <el-button type="primary" @click="back">点击返回</el-button>
 </div>
</template>

<script>
export default {
  name: 'noFound',
  data () {
    return {
      msg: '这是一个不存在的页面'
    }
  },
  methods: {
    back () {
      this.$router.go(-1)
    }
  }
}
</script>
