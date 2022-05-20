import { IRoute } from '../interfaces';
import { DemoPage } from 'pages';
import { LoginPage, RegisterPage } from 'pages/auth';
import { lazy } from 'react';
const LazyDemo = lazy(() => import('../pages/DemoLazy'));

export const privateRoutes: IRoute[] = [
	{
		path: '/',
		component: DemoPage,
		name: 'Demo',
	},
	// si quieremos agregar nuevas rutas, debemos agregarlas aquí
	// {
	// 	path: '/',
	// 	component: DemoPage,
	// 	name: 'demo',
	// },

	// TAMBIEN PODEMOS HACER LAZY LOADING DE LAS RUTAS
	{
		path: '/lazy',
		component: LazyDemo,
		name: 'Lazy',
	},
];

export const publicRoutes: IRoute[] = [
	{
		path: '/auth/login',
		component: LoginPage,
		name: 'Login',
	},
	{
		path: '/auth/register',
		component: RegisterPage,
		name: 'Register',
	},
];
