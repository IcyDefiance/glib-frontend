import * as React from "react";
import { MDCRipple } from "@material/ripple";

export interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	dense?: boolean;
}

const ButtonFn: React.FC<ButtonProps> = props => {
	const ref = React.useRef<HTMLButtonElement>(null);

	React.useEffect(() => {
		if (ref.current) {
			new MDCRipple(ref.current);
		}
	});

	const dense = props.dense ? "mdc-button--dense" : "";

	const htmlProps = { ...props };
	delete htmlProps.dense;

	return (
		<button ref={ref} {...htmlProps} className={`mdc-button ${dense} ${props.className || ""}`}>
			{props.children}
		</button>
	);
};

const Label: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
	<span {...props} className={`mdc-button__label ${props.className || ""}`} />
);

export const Button = Object.assign(ButtonFn, { Label });
