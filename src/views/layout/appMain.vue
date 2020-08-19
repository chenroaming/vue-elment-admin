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
      editableTabs: []
    }
  },
  watch: {
    $route (cur, old) {
      const { meta: { title }, path } = cur
      this.editableTabs = this.editableTabs.some(item => item.title === title)
        ? this.editableTabs : this.editableTabs.concat([{ title, path }])
      this.editableTabsValue = path
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
      this.editableTabsValue === targetName &&
        this.$router.push({
          path: index === this.editableTabs.length - 1
            ? this.editableTabs[index - 1].path : this.editableTabs[index + 1].path
        })
      this.editableTabs = this.editableTabs.filter(item => item.path !== targetName)
    },
    clickTab ({ name }) {
      if (this.$route.path === name) return false
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
</style>
