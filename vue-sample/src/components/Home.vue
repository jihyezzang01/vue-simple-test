<template>
  <div class="page">
    <header>
      <h1 class="title">Home</h1>
      <div class="divider" />
      <div class="divider" />
    </header>
    <div class="items">
      <div v-for="item in items" :key="item.id">
        <item class="item" :item="item" />
      </div>
    </div>
    <router-link class="link-button" to="/cart" tag="button">
      Cart ({{cartCount}})
    </router-link>
  </div>
</template>

<script>
import Item from "./Item.vue";

export default {
  name: 'Home',
  components: {
    item: Item,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    cartCount() {
      return this.$store.getters.cartProducts;
    }
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
  display: flex;
  flex-wrap: wrap;
  margin: auto;
  width: 360px;
}

@media screen and (min-width: 300px) {
  .items {
    width: 230px;
  }
}
@media screen and (min-width: 510px) {
  .items {
    width: 470px;
  }
}
@media screen and (min-width: 740px) {
  .items {
    width: 700px;
  }
}
@media screen and (min-width: 970px) {
  .items {
    width: 930px;
  }
}
@media screen and (min-width: 1200px) {
  .items {
    width: 1160px;
  }
}

.item {
  background-color: #F6F6F6;
  border: 1px solid #34495E;
  height: 150px;
  width: 200px;
}

.link-button {
  background: #FFF;
  border: 1px solid #34495E;
  color: #34495E;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  text-align: center;
  height: 3em;
  width: 10em;
}

.link-button:hover {
  background: #34495E;
  color: #FFF;
}
</style>
