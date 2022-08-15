import React, { useState, useEffect } from "react";

const HookCounterOne = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		document.title = `You clickd ${count} times`;
	});

	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Click {count}</button>
		</div>
	);
};

export default HookCounterOne;
