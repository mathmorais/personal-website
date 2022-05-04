import type { AppProps } from "next/app";
import { domAnimation, LazyMotion } from "framer-motion";
import { ThemeProvider } from "styled-components";
import { Global } from "../styles/Global";
import { theme } from "../theme";
import { appWithTranslation } from "next-i18next";

type NextApp = (props: AppProps) => JSX.Element;

const App: NextApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			<LazyMotion features={domAnimation}>
				<Component {...pageProps} />
			</LazyMotion>
		</ThemeProvider>
	);
};

export default appWithTranslation(App);
