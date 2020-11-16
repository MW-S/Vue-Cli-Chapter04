<template>
  <div class="main"  id="shop">
    <shopIndex></shopIndex>
  </div>
</template>

<script>
import shopIndex from '@/components/Message.vue'

export default {
  map: 'shop',
  components: {
    shopIndex
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
