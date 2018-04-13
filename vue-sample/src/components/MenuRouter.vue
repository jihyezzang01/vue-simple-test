<template>
  <div class="page">
    <h1 class="title">Menu</h1>
    <div class="divider" />
    <div class="divider" />
    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.title}}
        <button @click="order(item.type)">order</button>
      </li>
    </ul>
    <router-link class="link-button" to="/orders" tag="button">Order List</router-link>
  </div>
</template>

<script>
export default {
  name: 'Menu',
  computed: {
    items() {
      return this.$store.state.menu.items;
    },
  },
  methods: {
    order(type) {
      this.$store.commit('NEW_ORDER', type);
    },
  },
};
</script>

<style scoped>
.page {
  margin: auto;
  min-width: 400px;
  max-width: 600px;
}

.divider {
  border-top: 1px solid #8c8b8b;
  margin-bottom: 2px;
}

ul {
  list-style-type: none;
}

ul li {
  padding: 20px 0;
  position: relative;
  text-align: left;
}

.link-button,
li button {
  display: inline-block;
  font-size: 16px;
  margin-right: 30px;
  position: absolute;
  text-align: center;
  right: 0;
  width: 7em;
  height: 2em;
  background: #fff;
  color: #34495e;
  border: 1px solid #34495e;
  cursor: pointer;
}

.link-button:hover,
li button:hover {
  background: #34495e;
  color: #fff;
  border: 1px solid #34495e;
}

.link-button {
  position: relative;
  width: 10em;
  height: 3em;
}
</style>
