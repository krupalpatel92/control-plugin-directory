import React from 'react';
import Layout from 'layouts';
import { Provider } from 'react-redux';
import { store } from 'store/store';

const App: React.FC = () => (
	<Provider store={store}>
		<Layout />
	</Provider>
);

export default App;
