import { AdminLayout } from 'layout';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';

export const AppRouter = () => {
	const isAuthenticated = false;
	return (
		<BrowserRouter>
			{isAuthenticated ? (
				<AdminLayout>
					<Routes>
						{privateRoutes.map(({ component: Component, path }) => {
							return (
								<Route
									key={path}
									path={path}
									element={<Component />}
								/>
							);
						})}
					</Routes>
				</AdminLayout>
			) : (
				<Routes>
					{publicRoutes.map(({ component: Component, path }) => {
						return (
							<Route
								key={path}
								path={path}
								element={<Component />}
							/>
						);
					})}
				</Routes>
			)}
		</BrowserRouter>
	);
};
