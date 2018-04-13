<template>
  <div class="page">
    <h1 class="title">Todos</h1>
    <header>
      <span><strong>{{ remaining }}</strong> left </span>
    </header>
    <div class="divider" />
    <div class="divider" />
    <input
      placeholder="What needs to be done?"
      v-model="newTodo"
      @keyup.enter="addTodo"
    />
    <ul>
      <li v-for="item in items" :key="item.id">
        <div class="view">
            <input class="toggle" type="checkbox"/>
            <label>{{ item.title }}</label>
            <button class="destroy" @click="removeTodo(item.id)"></button>
        </div>
      </li>
    </ul>
    <router-link class="link-button" to="/" tag="button">HOME</router-link>
  </div>
</template>

<script>
export default {
  name: 'OrderList',
  data: {
    newTodo: '',
  },
  computed: {
    items() {
      return this.$store.state.todos;
    },
    remaining() {
      return this.$store.getters.remainTodosCount;
    },
  },
  methods: {
    doneTodo(id) {
      this.$store.commit('DONE_TODO', id);
    },
    addTodo() {
      const value = this.newTodo && this.newTodo.trim();
      if (!value) {
        return;
      }
      this.$store.commit('ADD_TODO', value);
      this.newTodo = '';
    },
    removeTodo(id) {
      this.$store.commit('REMOVE_TODO', id);
    }
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

header {
  text-align: left;
  padding: 10px;
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
