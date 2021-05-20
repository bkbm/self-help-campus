import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Worksheets from "../views/Worksheets.vue";
import Worksheet from "../views/Worksheet.vue";
import Dashboard from "../views/Dashboard.vue";
import { auth } from "../firebase";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/login",
    name: "Login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue"),
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: Dashboard,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/worksheets",
    name: "Worksheets",
    component: Worksheets,
    meta: {
      requireAuth: true,
    },
  },
  {
    path: "/worksheets/:id",
    name: "Worksheet",
    component: Worksheet,
    props: true,
    meta: {
      requireAuth: true
    }
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((x) => x.meta.requireAuth);

  if (requiresAuth && !auth.currentUser) {
    next("/login");
  } else {
    next();
  }
});

export default router;
