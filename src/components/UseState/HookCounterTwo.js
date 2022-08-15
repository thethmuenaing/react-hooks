import React, { useState } from "react";

const HookCounterTwo = () => {
	const initialCount = 0;
	const [count, setCount] = useState(initialCount);
	const incrementFive = () => {
		for (let i = 0; i < 5; i++) {
			// can not use count state
			// setCount(count + 1)
			setCount((prevCount) => prevCount + 1);
		}
	};
	return (
		<div>
			Count : {count}
			<br />
			<button onClick={() => setCount(initialCount)}>Reset</button>
			<button onClick={() => setCount(count + 1)}>Increment</button>
			<button onClick={() => setCount(count - 1)}>Decrement</button>
			{/* can be use */}
			{/* <button onClick={() => setCount(prevCount => prevCount + 1)}>Increment</button> */}
			{/* <button onClick={() => setCount(prevCount => prevCount - 1)}>Decrement</button> */}
			<button onClick={() => incrementFive}>Increment 5</button>
		</div>
	);
};

export default HookCounterTwo;
