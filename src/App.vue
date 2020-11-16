<template>
  <div id="nav">
    <!--代码-->
    <div class="navbar navbar-default" role="navigation">
      <div class="navbar-header">
        <!-- .navbar-toggle样式用于toggle收缩的内容，即nav-collapse collapse样式所在元素 -->
        <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".navbar-responsive-collapse">
          <span class="sr-only">Toggle Navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <!-- 确保无论是宽屏还是窄屏，navbar-brand都显示 -->
        <a class="navbar-brand">{{title}}</a>
      </div>
      <!-- 屏幕宽度小于768px时，div.navbar-responsive-collapse容器里的内容都会隐藏，显示icon-bar图标，当点击icon-bar图标时，再展开。屏幕大于768px时，默认显示。 -->
      <div class="collapse navbar-collapse navbar-responsive-collapse">
        <ul class="nav navbar-nav">
          <li id="indexTab" @click="choiceTab('index')" :class="choice=='index'?'active':''">
             <router-link to="/?choice=indexBool">网站首页</router-link>
          </li>
         <li id="tabTab" @click="choiceTab('shopBool')" :class="choice=='shopBool'?'active':''">
             <router-link to="/shop?choice=shopBool">我的订单</router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <router-view />
</template>

<style lang="less">
  #app {
    margin-top: 30px;
  }
</style>
<style lang="css">
  .main {
    height: 500px;
    box-shadow: 10px 10px 5px #bbb;
    background-color: #f8f8f8;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .main div p {
    font-size: 30px;
  }
</style>

<script>
export default {
  data () {
    return {
      title: 'Vue3.0实验四',
      menu: {
        shopBool: {
          field: 'shopBool',
          name: '登录页面',
          path: '?shopBool=true'
        }
      },
      choice: 'index'
    }
  },
  methods: {
    choiceTab (param) {
      console.log(this.$data.choice)
      this.$data.choice = param
      console.log(this.$data.choice)
      // return param
    }
  }
}
</script>
