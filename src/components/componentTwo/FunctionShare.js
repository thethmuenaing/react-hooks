import React, { useState } from "react";
import FunctionShareCustom from "./HookFile/FunctionShareCustom";

const FunctionShare = () => {
	const [count, increment, decrement, reset] = FunctionShareCustom(0, 2);

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
