<template>
  <div>
    <table width="600" border="0" cellspacing="0" cellpadding="0" class="ordertab1">
      <tr class="orderbg">
        <td height="36" colspan="2">商品</td>
        <td width="108">单价（元）</td>
        <td width="102">数量</td>
        <td width="170">实付款（元）</td>
        <td width="168">订单状态</td>
        <td width="132">操作</td>
      </tr>
      <tr>
        <td colspan="8" class="orderbg1"><span>
            <input name="" type="checkbox" value="" />
          </span><span>订单编号：1000000002</span><span> 成交时间：2020-10-27 </span><span>GDUTVue商贸有限公司 </span></td>
      </tr>
      <tr align="center">
        <td width="70" height="60">
          <p class="proimg"><img src="../images/pic.png" width="60" height="60" /></p>
        </td>
        <td width="100">卡索古堡干红葡萄酒</td>
        <td>388.0</td>
        <td><strong>10</strong></td>
        <td rowspan="2">
          <p>6760.0</p>
          <p class="gray">（含快递：120.0元）</p>
        </td>
        <td rowspan="2">
          <p class="red">未交易</p>
          <p class="blue"> <a href="#">订单详情</a></p>
        </td>
        <td>
          <p><a href="#">付款</a></p>
          <p><a href="#">退款</a></p>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: 'UnPaid',
  beforeCreate () {
    console.log(this.$route)
    var co = this.$route.query.childChoice
    console.log(co)
    this.$root.$data.childChoice = co
  }
}
</script>

<style>
  .ordertab1 {
    border-top: 1px solid #e6e6e6;
    border-left: 1px solid #e6e6e6;
  }

  .ordertab1 td {
    border-right: 1px solid #e6e6e6;
    border-bottom: 1px solid #e6e6e6;
  }

  .orderbg {
    height: 20px;
    line-height: 20px;
    background: #e6e6e6;
    text-align: center;
    border-bottom: 1px solid #d5d5d5;
  }

  .orderbg1 {
    height: 20px;
    line-height: 20px;
    color: #636363;
  }

  .orderbg1 span {
    padding-left: 15px;
  }
  .main div p{
    font-size: 20px;
  }
</style>
