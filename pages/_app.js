/* eslint react/jsx-props-no-spreading: "off" */
import withRedux from 'next-redux-wrapper';
import App from 'next/app';
import Head from 'next/head';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import rootReducer from '../store/index';

const makeStore = (initialState) => createStore(rootReducer, initialState);

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

		return { pageProps };
	}

	render() {
		const { Component, pageProps, store } = this.props;
		return (
			<>
				<Head>
					<title>Home</title>
					<link rel='shortcut icon' href='/favicon.ico' />
				</Head>
				<Provider store={store}>
					<Component {...pageProps} />
				</Provider>
			</>
		);
	}
}

export default withRedux(makeStore)(MyApp);
