<template>
  <div class="list-item">
    {{item.title}}
    <div class="list-item-left">
      <div class="label-spinner">
        <button @click="minus(item.id)">-</button>
        <span>{{item.count}}</span>
        <button @click="plus(item.id)">+</button>
      </div>
      <button class="remove-button" @click="remove(item.id)">Delete</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    item: {
      type: Object,
      default: () => ({ title: '', id: -1, count: 0 }),
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
    },
  },
};
</script>

<style scoped>
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

.remove-button {
  font-size: 15px;
  background: #D6D6D6;
  border: 1px solid #A6A6A6;
  color: #FFF;
  margin-left: 10px;
}
.list-item {
  align-items: center;
  border-bottom: 1px solid #34495e;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 10px;
}

.list-item-left {
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
