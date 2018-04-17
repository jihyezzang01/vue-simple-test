<template>
  <div>
    <h1>{{title}}</h1>
    <div class="divider" />
    <div class="divider" />
  </div>
</template>

<script>
export default {
  name: 'TitleBar',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.divider {
  border-top: 1px solid #8C8B8B;
  margin-bottom: 2px;
}
</style>
