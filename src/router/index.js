import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '@/components/HelloWorld';
import DemoRef from '@/components/DemoRef';
import DemoSlot from '@/components/DemoSlot';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld
    },
    {
      path: '/ref',
      name: 'DemoRef',
      component: DemoRef
    },
    {
      path: '/slot',
      name: 'DemoSlot',
      component: DemoSlot
    }
  ]
});
