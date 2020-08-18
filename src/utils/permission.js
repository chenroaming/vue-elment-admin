import Vue from 'vue'
import store from '@/store'

function checkPermission ({ meta }, authList) {
  return meta &&
  meta.roles instanceof Array &&
  (authList.some(item => meta.roles.includes(item)) || meta.roles.includes('any')) // 查询是否具备权限
}

export function filterRouters (routes, authList) {
  const filterArr = routes.filter(route => {
    route.children &&
    route.children.length > 0 &&
    (route.children = filterRouters(route.children, authList)) // 如果有子节点则递归遍历
    return checkPermission(route, authList)
  })
  return filterArr
}

/**
 * @param {Array} value
 * @returns {Boolean}
 * @example see @/views/permission/directive.vue
 */
export function check (value) {
  if (value && value instanceof Array && value.length > 0) {
    const roles = store.getters && store.getters.roles
    const permissionRoles = value
    const hasPermission = roles.length > 0 ? roles.some(role => {
      return permissionRoles.includes(role)
    }) : false
    return !!hasPermission
  } else {
    console.error('need roles! Like v-permission="[\'admin\',\'editor\']"')
    return false
  }
}

// 自定义按钮权限控制指令
export const Vpermission = Vue.directive('permission', {
  bind: (el, binding, vnode) => {
    const { value } = binding // 获取值
    const roles = store.getters && store.getters.getRoles // 获取权限数组
    const hasPermission = roles.length > 0 ? roles.some(role => {
      return value.includes(role)
    }) : false
    !hasPermission && el.parentNode && el.parentNode.removeChild(el) // 不包含此权限则移除该dom
  }
})
