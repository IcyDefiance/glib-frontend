import * as React from "react";
import { MDCRipple } from "@material/ripple";
import { IconProps, Icon as SvgIcon } from "../icons/icon";

export interface ButtonProps
	extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
	dense?: boolean;
}

const ButtonFn: React.FC<ButtonProps> = props => {
	const ref = React.useCallback((el: HTMLElement | null) => {
		if (el) {
			new MDCRipple(el);
		}
	}, []);

	const dense = props.dense ? "mdc-button--dense" : "";

	const htmlProps = { ...props };
	delete htmlProps.dense;

	return (
		<button ref={ref} {...htmlProps} className={`mdc-button ${dense} ${props.className || ""}`}>
			{props.children}
		</button>
	);
};

const Icon: React.FC<IconProps> = props => (
	<SvgIcon {...props} className={`mdc-button__icon ${props.className || ""}`} />
);

const Label: React.FC<React.HTMLAttributes<HTMLDivElement>> = props => (
	<span {...props} className={`mdc-button__label ${props.className || ""}`} />
);

export const Button = Object.assign(ButtonFn, { Icon, Label });
