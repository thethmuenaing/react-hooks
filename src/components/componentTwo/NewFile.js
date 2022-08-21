import React from "react";
import CustomFile from "./HookFile/CustomFile";

const NewFile = () => {
	const [firstName, bildFirstName, resetFirstName] = CustomFile("");
	const [lastName, bildLastName, resetLastName] = CustomFile("");

	const handleSubmit = (e) => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};
	return (
		<form onSubmit={handleSubmit}>
			<div>
				<label>First Name - </label>
				<input type="text" {...bildFirstName} />
			</div>
			<div>
				<label>Last Name - </label>
				<input type="text" {...bildLastName} />
			</div>

			<button type="submit">submit</button>
		</form>
	);
};

export default NewFile;
