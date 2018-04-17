<template>
  <div class="page">
    <header>
      <title-bar title="Home" />
    </header>
    <div class="items">
      <div v-for="item in items" :key="item.id">
        <item class="item" :item="item" />
      </div>
    </div>
    <link-button :text="cartCounts" path="/cart" />
  </div>
</template>

<script>
import Item from './Item';
import TitleBar from './TitleBar';
import LinkButton from './LinkButton';

export default {
  name: 'Home',
  components: {
    'title-bar': TitleBar,
    'link-button': LinkButton,
    item: Item,
  },
  computed: {
    items() {
      return this.$store.state.items;
    },
    cartCounts() {
      return `Cart (${this.$store.getters.cartProducts})`;
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
</style>
