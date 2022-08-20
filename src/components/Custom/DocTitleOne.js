import React, { useState } from "react";
import UseDocumentTitle from "./Hooks/UseDocumentTitle";

const DocTitleOne = () => {
	const [count, setCount] = useState(0);

	UseDocumentTitle(count);
	return (
		<div>
			<button
				onClick={() => {
					setCount(count + 1);
				}}
			>
				Count - {count}
			</button>
		</div>
	);
};

export default DocTitleOne;
