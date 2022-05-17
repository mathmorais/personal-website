import React from "react";

import JavaScriptIcon from "~/assets/svgs/skills/JavaScript.svg";
import TypeScriptIcon from "~/assets/svgs/skills/TypeScript.svg";
import ReactJSIcon from "~/assets/svgs/skills/ReactJS.svg";
import NextJSIcon from "~/assets/svgs/skills/NextJS.svg";
import GithubIcon from "~/assets/svgs/tools/Github.svg";
import LinkedinIcon from "~/assets/svgs/tools/Linkedin.svg";
import AzureDevOpsIcon from "~/assets/svgs/tools/AzureDevOps.svg";
import FigmaIcon from "~/assets/svgs/tools/Figma.svg";
import NotionIcon from "~/assets/svgs/tools/Notion.svg";
import VscodeIcon from "~/assets/svgs/tools/Vscode.svg";

export class Icons {
	private readonly mapping: { [key: string]: React.FunctionComponent } = {
		JavaScript: JavaScriptIcon,
		TypeScript: TypeScriptIcon,
		ReactJS: ReactJSIcon,
		NextJS: NextJSIcon,
		Github: GithubIcon,
		Linkedin: LinkedinIcon,
		AzureDevOps: AzureDevOpsIcon,
		Figma: FigmaIcon,
		Notion: NotionIcon,
		Vscode: VscodeIcon,
	};

	getIcon(name: string) {
		return this.mapping[name];
	}
}
