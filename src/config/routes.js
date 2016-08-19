import React from 'react'
import AppComponent from '../components/AppComponent.jsx'
import AdminComponent from '../components/admin/AdminComponent.jsx'
import ShopFormComponent from '../components/shop/ShopFormComponent.jsx'
import ShopListComponent from '../components/shop/ShopListComponent.jsx'

const routes = {
	path: '/',
	component: AppComponent,
	indexRoute: {
		component: AdminComponent
	},
	childRoutes: [
		{
			path: 'shop',
			indexRoute: {
				component: ShopListComponent
			},
			childRoutes: [
				{
					path: 'create',
					component: ShopFormComponent
				},
				{
					path: 'edit/:id',
					component: ShopFormComponent
				}
			]
		}
	]
}

export default routes