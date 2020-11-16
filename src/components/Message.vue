<template>
<div class="row" style="border-style: ridge;" align="center">
       <div class="navbar navbar-default " style="width: 700px;">
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
         <div class="collapse navbar-collapse navbar-responsive-collapse">
           <ul class="nav navbar-nav">
            <li id="firstTab" @click="childChoice = 'first',compontentName = 'UnPaid',cur=0" :class="{active:cur == 0}">
                <router-link  to="/UnPaid?childChoice=UnPaidBool">待付款</router-link>
             </li>
             <li id="sencondTab" @click="childChoice = 'second',compontentName = 'UnShipped',cur=1" :class="{active:cur == 1}">
                <router-link  to="/UnShipped?childChoice=UnShippedBool">待发货</router-link>
              </li>
              <li id="thirdTab" @click="childChoice = 'third',compontentName = 'UnDispatched',cur=2" :class="{active:cur == 2}">
                 <router-link   to="/UnDispatched?childChoice=UnDispatchedBool">待收货</router-link>
              </li>
           </ul>
         </div>
       </div>
       <transition enter-active-class="animated bounceInDown"
                    :duration="{ enter: 1000}">
                    <router-view class="showContent" />
       </transition>
</div>
</template>

<script>
export default {
  name: 'shopIndex',
  data () {
    return {
      compontentName: 'UnPaid',
      cur: 0,
      childChoice: 'first',
      title: '我的订单'
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

<style>
  .showContent{
    padding: 20px;
    width: 700px;
    min-height: 300px;
    background-color: #F8F8F8;
  }
</style>
