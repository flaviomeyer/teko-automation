import { createRouter, createWebHistory } from 'vue-router'
import ResourceGroup from '../views/ResourceGroup.vue'

const router = createRouter({
	history: createWebHistory(),
	routes: [
		{
			path: '/',
			component: ResourceGroup
		},
		{
			path: '/resource-group',
			component: () => import('../views/ResourceGroup.vue')
		},
		{
			path: '/virtual-network',
			component: () => import('../views/VirtualNetwork.vue')
		},
		{
			path: '/virtual-machine',
			component: () => import('../views/VirtualMachine.vue')
		},
	],
})

export default router