<template>
  <el-submenu :index="item.path" v-if="hasChildNode">
    <template slot="title">
      <i :class="item.meta.icon"></i>
      <span slot="title">{{ item.meta.title }}</span>
    </template>
    <!-- 递归显示子菜单 -->
    <el-menu-item-group
      v-for="child in item.children"
      :key="child.meta.title"
      >
      <slideItem
        v-if="child.children && child.children.length > 0"
        :item="child"></slideItem>
      <el-menu-item
        v-if="!child.children"
        :key="child.name"
        :index="child.path">{{ child.meta.title }}</el-menu-item>
    </el-menu-item-group>
  </el-submenu>
  <el-menu-item :index="item.path" v-else>
    <i :class="item.meta.icon"></i>
    <span slot="title">{{ item.meta.title }}</span>
  </el-menu-item>
</template>

<script>
export default {
  name: 'slideItem',
  props: {
    item: {
      type: Object,
      default: () => ({})
    }
  },
  data () {
    return {

    }
  },
  computed: {
    hasChildNode () {
      // 是否折叠菜单
      return this.item.children && this.item.children.length > 0 && this.item.isCollapse
    }
  },
  mounted () {

  },
  methods: {

  }
}
</script>

<style scoped lang = "scss">

</style>
