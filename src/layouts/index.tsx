import { lazy, Suspense } from 'react';
import Header from './components/header';
import Content from './components/content';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { RouteItems } from 'route/Routes';
import ErrorBoundary from 'route/ErrorBoundary';
import Loading from 'components/ui-kit/Loader';
import styles from './Layouts.module.scss';
import InitialData from './components/InitialData';
const E404 = lazy(() => import('pages/404'));

const Layout: React.FC = () => {
	return (
		<BrowserRouter>
			{/**
			 * To keep Layout component clean. Loading initial data in individual component.
			 * User can also access the URL /plugins/marketing directly without visiting APP root URL.
			 **/}
			<InitialData />
			<div className={styles.layout}>
				<div className={styles.layout__sidebar}>
					<Header />
				</div>
				<div className={styles.layout__content}>
					<Content>
						<Suspense fallback={<Loading />}>
							<ErrorBoundary>
								<Switch>
									{RouteItems.map(route => (
										<Route key={`root.${route.name}`} exact={route.exact} path={route.path}>
											<route.content />
										</Route>
									))}
									<Route>
										<E404 />
									</Route>
								</Switch>
							</ErrorBoundary>
						</Suspense>
					</Content>
				</div>
			</div>
		</BrowserRouter>
	);
};

export default Layout;
