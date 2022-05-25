/* eslint react/jsx-props-no-spreading: "off" */
import App from 'next/app';
import Head from 'next/head';

class MyApp extends App {
	static async getInitialProps({ Component, ctx }) {
		const pageProps = Component.getInitialProps ? await Component.getInitialProps(ctx) : {};

		return { pageProps };
	}

	render() {
		const { Component, pageProps } = this.props;
		return (
			<>
				<Head>
					<title>Home</title>
					<link rel='shortcut icon' href='/favicon.ico' />
				</Head>
				<Component {...pageProps} />
			</>
		);
	}
}

export default MyApp;
