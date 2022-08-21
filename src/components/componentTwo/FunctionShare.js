import React, { useState } from "react";

const FunctionShare = () => {
	const [count, setCount] = useState(0);

	const increment = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrement = () => {
		setCount((prevCount) => prevCount - 1);
	};

	const reset = () => {
		setCount(0);
	};
	return (
		<div>
			<div>Count - [{count}]</div>
			<button onClick={increment}>Increment</button>
			<button onClick={decrement}>Decrement</button>
			<button onClick={reset}>Reset</button>
		</div>
	);
};

export default FunctionShare;
