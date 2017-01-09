//require("./style.css") // 载入 style.css
//document.write('It works.')
//document.write(require('./module.js')) // 添加模块
import Vue from 'vue'
import a from './a.vue'
import b from './b.vue'
import c from './c.vue'
import VueRouter from 'vue-router'
import store from './store.js'

Vue.use(VueRouter);
/*
const router = new Router({
        routes: [{
            path: '/',
            component: { template: '<div>home</div>' }
        }, {
            path: '/bar',
            component: { template: '<div>bar</div>' }
        }]
    })
var App = Vue.extend({});
router.start(App, '#app-5');


const vm = new Vue({
    router
}).$mount('#app-5')
*/	
/* eslint-disable no-new */
/*
new Vue({
  el: '#app-5',
  render: (createElement) => createElement(a)
})
*/

// 0. 如果使用模块化机制编程，導入Vue和VueRouter，要调用 Vue.use(VueRouter)

// 1. 定义（路由）组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。
const routes = [
 // { path: '/', component: a },
  { path: '/foo', component: b },
  { path: '/bar', component: c }
]

// 3. 创建 router 实例，然后传 `routes` 配置
// 你还可以传别的配置参数, 不过先这么简单着吧。
const router = new VueRouter({
  routes // （缩写）相当于 routes: routes
})

// 4. 创建和挂载根实例。
// 记得要通过 router 配置参数注入路由，
// 从而让整个应用都有路由功能
/*
const app = new Vue({
  router:router
}).$mount('#app-5')
*/
/*
new Vue({
  router: router,
  el: '#app-5', 
  render: h => h('router-view')
  //render: (createElement) => createElement(a)
})
*/
new Vue({
    router,
	store,
    render: h => h(a)
}).$mount('#app-5')

