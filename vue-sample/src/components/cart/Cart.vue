<template>
  <div class="page">
    <header>
      <title-bar title="Cart" />
    </header>
    <div class="items">
      <div class="items-header">Product</div>
      <div v-for="item in items" :key="item.id">
        <list-item :item="item" />
      </div>
    </div>
    <router-button text="Home" path="/" />
  </div>
</template>

<script>
import TitleBar from '../TitleBar';
import RouterButton from '../RouterButton';
import CartItem from './CartItem';

export default {
  name: 'Cart',
  components: {
    'title-bar': TitleBar,
    'router-button': RouterButton,
    'list-item': CartItem,
  },
  computed: {
    items() {
      return this.$store.state.cart.items;
    },
  },
};
</script>

<style scoped>
.page {
  margin: auto;
}

.divider {
  border-top: 1px solid #8C8B8B;
  margin-bottom: 2px;
}

.items {
  margin: auto;
  max-width: 800px;
}

.items-header {
  margin-top: 30px;
  text-align: left;
  border-bottom: 2px solid #34495e;
  padding: 10px;
}
</style>
