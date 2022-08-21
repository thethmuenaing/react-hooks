import React from "react";
import useInput from "./Hool-3/useInput";

const UserForm = () => {
	const [firstName, bildFirstName, resetFirstName] = useInput("");
	const [lastName, bildLastName, resetLastName] = useInput("");

	const submitHandler = (e) => {
		e.preventDefault();
		alert(`Hello ${firstName} ${lastName}`);
		resetFirstName();
		resetLastName();
	};
	return (
		<div>
			<form onSubmit={submitHandler}>
				<div>
					<label>First Name</label>
					<input {...bildFirstName} type="text" />
				</div>
				<div>
					<label>Last Name</label>
					<input {...bildLastName} type="text" />
				</div>
				<button>Submit</button>
			</form>
		</div>
	);
};

export default UserForm;
