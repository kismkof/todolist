import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css';
import './main.css';
import VueRouter from 'vue-router';
import store from './store';

import AddTodo from './components/AddTodo';
import UpdateTodo from './components/UpdateTodo';
import TodoList from './components/TodoList';

import VueCompositionApi from '@vue/composition-api';

Vue.use(VueCompositionApi);

Vue.use(VueRouter);
Vue.config.productionTip = false

const router = new VueRouter({
  mode : "history",
  routes : [
    { path:"/", redirect:{ name:"todoList" } },
    { path:"/todos", name:"todoList", component: TodoList },
    { path:"/todos/add", name:"addTodo", component: AddTodo },
    { path:"/todos/update/:no", name:"updateTodo", component: UpdateTodo },
  ]
})


new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app')
