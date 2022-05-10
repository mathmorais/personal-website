import React from "react";

import JavaScriptIcon from "~/assets/svgs/JavaScript.svg";
import TypeScriptIcon from "~/assets/svgs/TypeScript.svg";
import ReactJSIcon from "~/assets/svgs/ReactJS.svg";
import NextJSIcon from "~/assets/svgs/NextJS.svg";

export class Icons {
	private readonly mapping: { [key: string]: React.FunctionComponent } = {
		JavaScript: JavaScriptIcon,
		TypeScript: TypeScriptIcon,
		ReactJS: ReactJSIcon,
		NextJS: NextJSIcon,
	};

	getIcon(name: string) {
		return this.mapping[name];
	}
}
