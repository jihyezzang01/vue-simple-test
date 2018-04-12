<template>
  <div>
    <h1 class="title">Order List</h1>
    <ul>
      <li v-for="item in items" :key="item.id">
        {{item.type}}
        <button @click="clear(item.id)">clear</button>
      </li>
    </ul>
    <router-link to="/" tag="button">Menu</router-link>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  computed: {
    items() {
      return this.$store.state.order.items;
    },
  },
  methods: {
    clear(id) {
      this.$store.commit('CLEAR_ORDER', id);
    },
  },
};
</script>

<style scoped>

</style>
