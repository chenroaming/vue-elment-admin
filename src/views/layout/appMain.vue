<template>
  <el-tabs
    v-model="editableTabsValue"
    type="card"
    closable
    class="app-main"
    @tab-remove="removeTab"
    @tab-click="clickTab">
    <el-tab-pane
      :key="item.path"
      v-for="item in editableTabs"
      :label="item.title"
      :name="item.path"
    >
      <div class="underline" :style="{transform:translateXp}"></div>
      <section>
        <transition name="fade-transform" mode="out-in">
          <router-view></router-view>
        </transition>
      </section>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'vueName',
  data () {
    return {
      editableTabsValue: '',
      editableTabs: [],
      position: 30
    }
  },
  watch: {
    $route (cur, old) {
      const { meta: { title }, path } = cur
      this.editableTabs = this.editableTabs.some(item => item.title === title)
        ? this.editableTabs : this.editableTabs.concat([{ title, path }])
      this.editableTabsValue = path
      this.position = this.editableTabs.length * 136 - 136
    }
  },
  computed: {
    translateXp () {
      return `translateX(${this.position}px)`
    }
  },
  created () {
    const { meta: { title }, path } = this.$route
    this.editableTabs.push(
      { title, path }
    )
    this.editableTabsValue = path
  },
  methods: {
    removeTab (targetName) {
      if (this.editableTabs.length < 2) return false
      const index = this.editableTabs.findIndex(item => item.path === targetName)
      this.editableTabsValue === targetName && // 只有删除当前标签时才跳转
        this.$router.push({
          path: index === this.editableTabs.length - 1 // 判断当前点击的标签是否为最后一个标签
            ? this.editableTabs[index - 1].path : this.editableTabs[index + 1].path // 是的话则跳转到前一个标签，否则跳转到后一个标签
        })
      this.editableTabs = this.editableTabs.filter(item => item.path !== targetName) // 将删除的标签进行移除
    },
    clickTab ({ name }) {
      if (this.$route.path === name) return false
      const getNowIndex = this.editableTabs.findIndex(item => name === item.path)
      this.position = getNowIndex === 0 ? -136 : getNowIndex * 136 - 136
      this.editableTabsValue = name
      this.$router.push({
        path: name
      })
    }
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
  .underline {
    width: 80px;
    height: 2px;
    background-color: #409EFF;
    transition: transform .5s;
  }
</style>
