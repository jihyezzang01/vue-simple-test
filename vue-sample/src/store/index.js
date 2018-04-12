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
  },
  mutations: {
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
    //
  },
});
