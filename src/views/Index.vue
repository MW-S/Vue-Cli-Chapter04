<template>
<div class="main"  id="index">
  <index></index>
</div>
</template>
<script>
import index from '@/components/IndexTem.vue'
export default {
  map: 'index',
  components: {
    index
  }
}
</script>
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
