import * as React from "react";
import "./text-field.scss";
import { MDCTextField } from "@material/textfield/index";

export interface TextFieldProps {
	children: React.ReactNode;
}

export const TextField: React.FC<TextFieldProps> = ({ children }) => {
	const div = React.useRef<HTMLDivElement>(null);

	React.useEffect(() => {
		if (div.current) {
			new MDCTextField(div.current);
		}
	});

	return (
		<div ref={div} className="mdc-text-field">
			{children}
			<div className="mdc-line-ripple"></div>
		</div>
	);
};

export const Input: React.FC<React.InputHTMLAttributes<HTMLInputElement>> = props => (
	<>
		<input type="text" className="mdc-text-field__input" {...props} />
		<div className="mdc-line-ripple"></div>
	</>
);