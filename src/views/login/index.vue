<template>
 <div class="login-box">
  <router-link :to="{ name:'Home' }">
  <el-button type="primary">返回首页</el-button>
  </router-link>
  <el-form :label-position="labelPosition" label-width="80px" :model="formLabelAlign" class="login-form">
    <el-form-item label="用户名：">
      <el-input v-model="formLabelAlign.userName">
        <i slot="prefix" class="el-icon-user-solid"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="密码：">
      <el-input v-model="formLabelAlign.passWord" type="password" show-password>
        <i slot="prefix" class="el-icon-user"></i>
      </el-input>
    </el-form-item>
    <el-form-item label="验证码：">
      <el-input v-model="formLabelAlign.code">
        <i slot="prefix" class="el-icon-picture"></i>
      </el-input>
    </el-form-item>
    <div class="login-button">
      <el-button type="primary" @click="userLogin">登录</el-button>
    </div>
  </el-form>
 </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'login',
  data () {
    return {
      labelPosition: 'right',
      formLabelAlign: {
        userName: '',
        passWord: '',
        code: ''
      }
    }
  },
  computed: {
    ...mapGetters([
      'isLogin'
    ])
  },
  created () {
    if (this.isLogin) {
      this.$router.push({ name: 'mainHomeChild' })
    }
  },
  methods: {
    ...mapActions([
      'login', // 将 `this.login()` 映射为 `this.$store.dispatch('login')`
      'setRouter'
    ]),
    userLogin () {
      this.login(this.formLabelAlign).then(async ({ state }) => {
        if (state === 100) {
          await this.setRouter()
          this.$router.push({ name: 'mainHomeChild' })
        }
      })
    }
  }
}
</script>

<style scoped lang = "scss">
  .login-box {
    position: fixed;
    border: 1px solid;
    width: 900px;
    height: 300px;
    background: white;
    top: 200px;
    left: 50%;
    margin-left: -450px;
    border-radius: 20px;
    padding: 25px;
  }
  .login-form {
    width: 50%;
    margin: 0 auto;
    margin-top: 25px;
  }
  .login-button {
    width: 50%;
    margin: 0 auto;
    text-align: center;
  }
</style>
