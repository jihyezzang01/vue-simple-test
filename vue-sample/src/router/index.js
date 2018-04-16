import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import Menu from '@/components/MenuRouter';
import TodoList from '@/components/TodoList';
import CartMain from '@/components/simple-cart/CartMain';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/cart',
      name: 'Cart',
      component: CartMain,
      children: [
        {
          path: '',
          component: Menu,
        },
        {
          path: 'test',
          component: TodoList,
        }
      ],
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu,
    },
  ],
});
