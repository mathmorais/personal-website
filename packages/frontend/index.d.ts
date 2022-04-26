import { theme } from "./src/theme/index";

type Theme = typeof theme;

declare module "styled-components" {
	export interface DefaultTheme extends Theme {}
}
