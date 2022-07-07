import type { JSXElement } from 'solid-js';

interface InputProps {
	class?: string;
	classList?: Record<string, boolean | undefined>;
}

export const Input = (props: InputProps) => {
	return (
		<input
			type="number"
			{...props}
		/>
	);
};

interface ButtonUpProps {
	class?: string;
	classList?: Record<string, boolean | undefined>;
	children?: JSXElement;
}

export const ButtonUp = (props: ButtonUpProps) => {
	return <button {...props} />;
};

interface ButtonDownProps {
	class?: string;
	classList?: Record<string, boolean | undefined>;
	children?: JSXElement;
}

export const ButtonDown = (props: ButtonDownProps) => {
	return <button {...props} />;
};

export const SpinButton = {
	Input,
	ButtonUp,
	ButtonDown,
};
