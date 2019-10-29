import { MDCTopAppBar } from "@material/top-app-bar/index";
import * as React from "react";

export interface TopAppBarProps extends React.HTMLAttributes<HTMLUnknownElement> {
	dense?: boolean;
	fixed?: boolean;
}

const TopAppBarFn: React.FC<TopAppBarProps> = props => {
	const header = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (header.current) {
			new MDCTopAppBar(header.current);
		}
	});

	const dense = props.dense ? "mdc-top-app-bar--dense" : "";
	const fixed = props.fixed ? "mdc-top-app-bar--fixed" : "";
	const adjust = props.dense ? "mdc-top-app-bar--dense-fixed-adjust" : "mdc-top-app-bar--fixed-adjust";

	return (
		<>
			<header ref={header} {...props} className={`mdc-top-app-bar ${dense} ${fixed} ${props.className}`}>
				<div className="mdc-top-app-bar__row">
					<section className="mdc-top-app-bar__section mdc-top-app-bar__section--align-start">
						{props.children}
					</section>
				</div>
			</header>
			<div className={adjust} />
		</>
	);
};

const Title: React.FC<React.HTMLAttributes<HTMLSpanElement>> = props => (
	<span {...props} className={`mdc-top-app-bar__title ${props.className || ""}`} />
);

export const TopAppBar = Object.assign(TopAppBarFn, { Title });
