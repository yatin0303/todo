import { createRouter, createWebHistory } from "vue-router";
import home from "../views/home.vue";
import tasks from "../views/tasks.vue";
import login from "../views/login.vue";
import allTasks from "../views/allTasks.vue";
import notFound from "../views/notFound.vue";

const routes = [
  { path: "/", redirect: "home" },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path: "/login",
    name: "login",
    component: login,
  },
  {
    path: "/tasks",
    name: "tasks",
    component: tasks,
  },
  {
    path: "/allTasks",
    name: "all",
    component: allTasks,
  },
  {
    path: "/:notfound(.*)",
    component: notFound,
  },
];
console.log(process.env.BASE_URL);
const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  components: { home, tasks, allTasks, login },
});

export default router;
