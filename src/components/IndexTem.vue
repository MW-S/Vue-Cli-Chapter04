<template>
  <div align="center">
    <p>{{msg}}</p>
    <div>
      <P>功能入口</P>
      <router-link class="btn btn-default btn-info" style="margin: 10px 20px; width: 120px;" to="/shop?choice=shopBool">我的订单页面</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexTem',
  data () {
    return {
      msg: '欢迎来到Vue3.0实验三首页！'
    }
  },
  beforeCreate () {
    console.log(this.$route)
    var co = this.$route.query.choice
    console.log(co)
    this.$root.$data.choice = co
  }
}
</script>
