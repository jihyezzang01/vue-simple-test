import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    menu: {
      items: [
        {
          id: 1,
          title: 'Bowl of chocolate ice cream',
          type: 'ItemA',
        },
        {
          id: 2,
          title: 'Salad',
          type: 'ItemB',
        },
        {
          id: 3,
          title: 'Iced tea',
          type: 'ItemC',
        },
      ],
    },
    order: {
      items: [],
    },
    todos: [
      {
        id: 0,
        title: 'Study Vue js',
        completed: false,
      },
      {
        id: 1,
        title: 'Make web app',
        completed: false,
      },
    ],
  },
  mutations: {
    ADD_TODO(state, title) {
      const id = parseInt(Math.random() * 100000, 10);
      state.todos.push({
        id,
        title,
        completed: false,
      });
    },
    REMOVE_TODO(state, id) {
      let index = -1;
      for (let i = 0; i < state.todos.length; i += 1) {
        if (state.todos[i].id === id) {
          index = i;
          break;
        }
      }
      console.log(`index: ${index}, id: ${id}`);
      if (index !== -1) {
        state.todos.splice(index, 1);
      }
    },
    DONE_TODO(state, id) {
      const todo = state.todos.find(i => i.id === id);
      if (!todo) {
        return;
      }
      todo.completed = true;
    },
    NEW_ORDER(state, type) {
      const id = parseInt(Math.random() * 100000, 10);
      state.order.items.push({ type, id });
    },
    CLEAR_ORDER(state, id) {
      let index = -1;
      for (let i = 0; i < state.order.items.length; i += 1) {
        if (state.order.items[i].id === id) {
          index = i;
          break;
        }
      }
      console.log(`index: ${index}, id: ${id}`);
      if (index !== -1) {
        state.order.items.splice(index, 1);
      }
    },
  },
  actions: {
    //
  },
  getters: {
    doneTodos: state => state.todos.filter(todo => todo.completed),
    remainTodosCount: (state, getters) => state.todos.length - getters.doneTodos.length,
  },
});
