import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Menu from '@/components/MenuRouter';
import TodoList from '@/components/TodoList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/todos',
      name: 'TodoList',
      component: TodoList,
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
  ],
});
