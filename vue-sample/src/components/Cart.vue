<template>
  <div class="page">
    <h1 class="title">Cart</h1>
    <div class="divider" />
    <div class="divider" />
    <div class="items">
      <div class="items-header">Product</div>
      <div v-for="item in items" :key="item.id">
        <div class="item">
          {{item.title}}
          <div class="item-left">
            <div class="label-spinner">
              <button @click="minus(item.id)">-</button>
              <span>{{item.count}}</span>
              <button @click="plus(item.id)">+</button>
            </div>
            <button class="remove-button" @click="remove(item.id)">Delete</button>
          </div>
        </div>
      </div>
    </div>
    <router-link class="router-button" to="/" tag="button">
      Home
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Cart',
  computed: {
    items() {
      return this.$store.state.cart.items;
    },
  },
  methods: {
    plus(id) {
      this.$store.commit('INCREMENT_ITEM', id);
    },
    minus(id) {
      this.$store.commit('DECREMENT_ITEM', id);
    },
    remove(id) {
      this.$store.commit('REMOVE_ITEM', id);
    },
  }
}
</script>

<style scoped>
.page {
  margin: auto;
}

.divider {
  border-top: 1px solid #8C8B8B;
  margin-bottom: 2px;
}

button,
.router-button {
  background: #FFF;
  border: 1px solid #34495E;
  color: #34495E;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
}

button:hover,
.router-button:hover {
  background: #34495E;
  color: #FFF;
}

button {
  height: 2em;
}

.router-button {
  margin-top: 20px;
  height: 3em;
  width: 10em;
}

.remove-button {
  font-size: 15px;
  background: #D6D6D6;
  border: 1px solid #A6A6A6;
  color: #FFF;
  margin-left: 10px;
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

.item {
  align-items: center;
  border-bottom: 1px solid #34495e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

.item-left {
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.label-spinner {
  border: 1px solid #34495E;
}

.label-spinner button {
  border: none;
  width: 1.2em;
  font-size: 15px;
}

</style>
