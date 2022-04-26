import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import { Global } from "../styles/Global";
import { theme } from "../theme";

type NextApp = (props: AppProps) => JSX.Element;

const App: NextApp = ({ Component, pageProps }) => {
	return (
		<ThemeProvider theme={theme}>
			<Global />
			<Component {...pageProps} />
		</ThemeProvider>
	);
};

export default App;
