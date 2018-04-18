<template>
  <div class="list-item">
    {{item.title}}
    <div class="list-item-left">
      <label-spinner :min="1" :max="9" :count="item.count" @update="updateCount"/>
      <button class="remove-button" @click="remove(item.id)">Delete</button>
    </div>
  </div>
</template>

<script>
import LabelSpinner from './LabelSpinner';

export default {
  name: 'CartItem',
  components: {
    'label-spinner': LabelSpinner,
  },
  props: {
    item: {
      type: Object,
      default: () => ({ title: '', id: -1, count: 0 }),
    },
  },
  methods: {
    updateCount(count) {
      this.$store.commit('UPDATE_COUNT', { id: this.item.id, count });
    },
    remove() {
      this.$store.commit('REMOVE_ITEM', this.item.id);
    },
  },
};
</script>

<style scoped>
.remove-button {
  background: #D6D6D6;
  border: 1px solid #A6A6A6;
  color: #FFF;
  cursor: pointer;
  font-size: 15px;
  margin-left: 10px;
  height: 2em;
}

.remove-button:hover {
  background: #34495E;
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
</style>
