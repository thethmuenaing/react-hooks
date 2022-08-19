import React, { useState, useMemo } from "react";

const Counter = () => {
	const [counterOne, setCounterOne] = useState(0);
	const [counterTwo, setCounterTwo] = useState(0);

	const incrementOne = () => {
		setCounterOne(counterOne + 1);
	};
	const incrementTwo = () => {
		setCounterTwo(counterTwo + 1);
	};
	const isEven = useMemo(() => {
		for (let i = 0; i < 2000; i++) {
			console.log("hello");
		}
		return counterOne % 2 === 0;
	}, [counterOne]);
	return (
		<div>
			<div>
				<button onClick={incrementOne}>CounterOne - {counterOne}</button>
				<span>{isEven ? "Even" : " Odd"}</span>
			</div>
			<div>
				<button onClick={incrementTwo}>CounterTwo - {counterTwo}</button>
			</div>
		</div>
	);
};

export default Counter;
