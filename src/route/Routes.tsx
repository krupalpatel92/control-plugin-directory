import { lazy } from 'react';
const Dashboard = lazy(() => import('pages/dashboard'));
const Plugins = lazy(() => import('pages/plugins'));

export const RouteItems = [
	{
		path: '/',
		exact: true,
		name: 'Dashboard',
		content: Dashboard,
	},
	{
		exact: true,
		path: '/plugins/:type',
		name: 'Plugins',
		content: Plugins,
	},
];
