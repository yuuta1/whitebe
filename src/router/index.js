import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import Product from "../views/Product.vue";
import Member from "../views/Member.vue";
import Login from "../views/Login.vue";
import Company from "../views/Company.vue";
import Service from "../views/Service.vue";
import Privacy from "../views/Privacy.vue";
import Law from "../views/Law.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product,
    props: true
  },
  {
    path: '/member',
    name: 'Member',
    component: Member
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/company',
    name: 'Company',
    component: Company
  },
  {
    path: '/service',
    name: 'Service',
    component: Service
  },
  {
    path: '/privacy',
    name: 'Privacy',
    component: Privacy
  },
  {
    path: '/law',
    name: 'Law',
    component: Law
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});

export default router;
