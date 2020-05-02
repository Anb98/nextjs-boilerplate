/* eslint react/jsx-props-no-spreading: "off" */
// CONFIGURACION PARA STYLED COMPONENTES
import React from 'react';
import Document from 'next/document';
import stylesheet from 'antd/dist/antd.min.css';
import { ServerStyleSheet } from 'styled-components';

export default class MyDocument extends Document {
	static async getInitialProps(ctx) {
		const sheet = new ServerStyleSheet();
		const originalRenderPage = ctx.renderPage;

		try {
			ctx.renderPage = () => originalRenderPage({
				enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
			});

			const initialProps = await Document.getInitialProps(ctx);
			return {
				...initialProps,
				styles: (
					<>
						<style dangerouslySetInnerHTML={{ __html: stylesheet }} />
						{initialProps.styles}
						{sheet.getStyleElement()}
					</>
				),
			};
		} finally {
			sheet.seal();
		}
	}
}
