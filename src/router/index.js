import Vue from 'vue'
import VueRouter from 'vue-router'
import home from "../views/Home.vue";
import tasks from "../views/tasks.vue";
import login from "../views/login.vue";
import addTask from "../views/addTask.vue";
import notFound from "../views/notFound.vue";
// import store from "../store/index.js"
Vue.use(VueRouter)

const routes = [
  { path: "/", redirect: "home" },
  {
    path: "/home",
    name: "home",
    component: home,
  },
  {
    path:"/home/:user", name:"userTasks" 
    , component:tasks,props:true,meta:{auth:true}, children:[{path:'addTask',name:'addtask',component:addTask,}]
  },
  {
    path: "/login",
    name: "login",
    component: login,meta:{unAuth:true}
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
router.beforeEach(async(to,from,next)=>{
  const store=await import('../store/index.js')
  
  const LoggedIn=store.default.getters.getToken
  if(to.meta.auth && !LoggedIn){
    
    store.default.dispatch('loadSnackbar')
    next('/login');
  }
  else if (to.meta.unAuth&&LoggedIn){
    
    next('/home')
  }
  else{next();}
  next();
})

export default router
