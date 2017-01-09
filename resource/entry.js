//require("./style.css") // ���� style.css
//document.write('It works.')
//document.write(require('./module.js')) // ���ģ��
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

// 0. ���ʹ��ģ�黯���Ʊ�̣�����Vue��VueRouter��Ҫ���� Vue.use(VueRouter)

// 1. ���壨·�ɣ������
// ���Դ������ļ� import ����
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. ����·��
// ÿ��·��Ӧ��ӳ��һ������� ����"component" ������
// ͨ�� Vue.extend() �����������������
// ���ߣ�ֻ��һ��������ö���
// �������������Ƕ��·�ɡ�
const routes = [
 // { path: '/', component: a },
  { path: '/foo', component: b },
  { path: '/bar', component: c }
]

// 3. ���� router ʵ����Ȼ�� `routes` ����
// �㻹���Դ�������ò���, ��������ô���Űɡ�
const router = new VueRouter({
  routes // ����д���൱�� routes: routes
})

// 4. �����͹��ظ�ʵ����
// �ǵ�Ҫͨ�� router ���ò���ע��·�ɣ�
// �Ӷ�������Ӧ�ö���·�ɹ���
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

