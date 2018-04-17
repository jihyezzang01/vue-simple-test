<template>
  <router-link class="router-button" tag="button" :to="path" >
    {{text}}
  </router-link>
</template>

<script>
export default {
  name: 'LinkButton',
  props: {
    text: {
      type: String,
      default: '',
    },
    path: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped>
.router-button {
  background: #FFF;
  border: 1px solid #34495E;
  color: #34495E;
  cursor: pointer;
  font-size: 16px;
  text-align: center;
  margin-top: 20px;
  height: 3em;
  width: 10em;
}

.router-button:hover {
  background: #34495E;
  color: #FFF;
}
</style>
