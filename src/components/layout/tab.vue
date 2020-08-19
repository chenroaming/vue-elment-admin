<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
    <el-tab-pane
      :key="item.name"
      v-for="(item, index) in editableTabs"
      :label="item.title"
      :name="item.name"
    >
      {{item.content}}
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  name: 'menuTabs',
  data () {
    return {
      editableTabs: [{
        title: 'Tab 1',
        name: '1',
        content: 'Tab 1 content'
      }, {
        title: 'Tab 2',
        name: '2',
        content: 'Tab 2 content'
      }]
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

</style>
