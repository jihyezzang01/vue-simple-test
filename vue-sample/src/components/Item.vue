<template>
<div>
  <div class="title">{{item.title}}</div>
  <button @click="addItem(item.id)">ADD TO CART</button>
</div>
</template>

<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      default: () => ({title: '', id: -1}),
    },
  },
  methods: {
    addItem(id) {
      this.$store.commit('ADD_ITEM', id);
    }
  }
}
</script>

<style scoped>
.item {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 15px;
}

.title {
  margin: 20px;
}

button {
  background: #FFF;
  border: none;
  border-top: 1px solid #34495E;
  color: #34495E;
  cursor: pointer;
  font-size: 15px;
  padding: 15px;
  text-align: center;
  width: 100%;
}

button:hover {
  background: #34495E;
  color: #FFF;
}
</style>
