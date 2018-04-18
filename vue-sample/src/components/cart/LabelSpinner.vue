<template>
  <div class="label-spinner">
    <button @click="minus">-</button>
    <span>{{count}}</span>
    <button @click="plus">+</button>
  </div>
</template>

<script>
export default {
  name: 'CartItem',
  props: {
    count: {
      type: Number,
      default: 0,
    },
    min: {
      type: Number,
      default: 0,
    },
    max: {
      type: Number,
      default: 100,
    },
  },
  methods: {
    minus() {
      if (this.count > this.min) {
        this.$emit('update', this.count - 1);
      }
    },
    plus() {
      if (this.count < this.max) {
        this.$emit('update', this.count + 1);
      }
    },
  },
};
</script>

<style scoped>
.label-spinner {
  border: 1px solid #34495E;
}

.label-spinner button {
  background: #FFF;
  border: none;
  color: #34495E;
  cursor: pointer;
  font-size: 15px;
  text-align: center;
  width: 1.2em;
  height: 2em;
}

.label-spinner button:hover {
  background: #34495E;
  color: #FFF;
}
</style>
