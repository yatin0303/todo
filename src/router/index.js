import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/Home.vue";
import tasks from "../views/tasks.vue";
import login from "../views/login.vue";
import addTask from "../views/addTask.vue";
import notFound from "../views/notFound.vue";
Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "home" },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path:"/home/:user", name:"tasks" 
    , component:tasks,children:[{path:'addTask',name:'addtask',component:addTask}]
  },
  {
    path: "/login",
    name: "login",
    component: login
  },
  {
    path: "/tasks",
    name: "tasks",
    component: addTask,
  },
  {
    path: "/:notfound(.*)*",
    component: notFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  components: { home, tasks, addTask, login ,notFound },
})

export default router
