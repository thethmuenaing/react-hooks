import { useState } from "react";

const CustomFile = (intialValue) => {
	const [value, setValue] = useState(intialValue);

	const reset = () => {
		setValue(intialValue);
	};

	const bild = {
		value,
		onChange: (e) => {
			setValue(e.target.value);
		},
	};

	return [value, bild, reset];
};

export default CustomFile;
