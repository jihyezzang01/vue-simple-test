import Vue from 'vue';
import Router from 'vue-router';
import Menu from '@/components/Menu';
import OrderList from '@/components/OrderList';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Menu',
      component: Menu,
    },
    {
      path: '/orders',
      name: 'OrderList',
      component: OrderList,
    },
  ],
});
