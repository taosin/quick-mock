import Vue from 'vue';
import Router from 'vue-router';
Vue.use(Router);
const routes = [{
	name: 'home',
	path: '/',
	redirect: 'layout'
}, {
	name: 'layout',
	path: '/layout',
	redirect: '/dashboard',
	component: () => import('@/views/pages/layout/index.vue'),
	children: [
		{
			name: 'dashboard',
			path: '/dashboard',
			meta: '首页',
			component: () => import('@/views/pages/dashboard/index.vue')
		},
		{
			name: 'repository',
			path: '/repository',
			meta: '项目',
			component: () => import('@/views/pages/repository/index.vue'),
		},
		{
			name: 'list',
			path: '/repository/list',
			component: () => import('@/views/pages/repository/list.vue')
		}
	]
}, {
	name: 'login',
	path: '/login',
	component: () => import('@/views/pages/login/index.vue')
}]

const routers = new Router({
	routes
});

// routers.beforeEach((to, from, next) => {
//     next()
// })

// routers.afterEach(to => {

// })
export default routers;
